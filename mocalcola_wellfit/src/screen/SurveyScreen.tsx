import React, {useCallback, useMemo} from 'react';
import {SafeAreaView, Text, StyleSheet, View} from 'react-native';
import {
    SurveyStoreProvider,
    useSurveyDispatch,
    useSurveyState,
} from '@store/SurveyContext';
import {getSurveyItemListByStep} from '@lib/surveyUtil';
import SurveyStepper from '@molecule/SurveyStepper';
import SurveyBody from '@molecule/SurveyBody';
import withScreen from '@hoc/withScreen';
import PaddingSection from '@organism/PaddingSection';

const SurveyScreen = () => {
    const state = useSurveyState();
    const dispatch = useSurveyDispatch();
    // STEPPER
    const setStep = useCallback(
        stepNumber => {
            dispatch({type: 'survey/CHANGE_STEP', stepNumber: stepNumber});
        },
        [state.step],
    );
    const prevStep = useCallback(() => {
        dispatch({type: 'survey/CHANGE_STEP', stepNumber: state.step - 1});
    }, [state.step]);
    const nextStep = useCallback(() => {
        dispatch({type: 'survey/CHANGE_STEP', stepNumber: state.step + 1});
    }, [state.step]);

    // SurveyFormGroupr
    const curSurveyItemList = useMemo(
        () => getSurveyItemListByStep(state.step),
        [state.step],
    );

    const getInitSurveyStateByStep = () => {
        switch (state.step) {
            case 0:
                return state.lifeArray;
            case 1:
                return state.charTrgterArrayList;
            case 2:
                return state.obstKiArrayList;
            case 3:
                return state.obstAbtArray;
            case 4:
                return state.trgterIndvdlArrayList;
            case 5:
                return state.desireArrayList;
            default:
                return [];
        }
    };

    const handleChangeStep = (type: 'PREV' | 'NEXT', item: any) => {
        switch (state.step) {
            case 0: {
                dispatch({type: 'survey/SET_LIFE_ARRAY', lifeArray: item[0]});
                break;
            }
            case 1: {
                dispatch({
                    type: 'survey/SET_CHAR_TRGTER_ARRAY_LIST',
                    charTrgterArrayList: item,
                });
                break;
            }
            case 2: {
                dispatch({
                    type: 'survey/SET_OBST_KI_ARRAY_LIST',
                    obstKiArrayList: item,
                });
                break;
            }
            case 3: {
                dispatch({
                    type: 'survey/SET_OBST_ABT_ARRAY',
                    obstAbtArray: item[0],
                });
                break;
            }
            case 4: {
                dispatch({
                    type: 'survey/SET_TRGTER_INDVDL_ARRAY_LIST',
                    trgterIndvdlArrayList: item,
                });
                break;
            }
            case 5: {
                dispatch({
                    type: 'survey/SET_DESIRE_ARRAY_LIST',
                    desireArrayList: item,
                });
                break;
            }
        }
        if (type === 'PREV') {
            prevStep();
        } else {
            nextStep();
        }
    };

    return (
        <View style={style.container}>
            <PaddingSection style={style.head}>
                <SurveyStepper
                    step={state.step}
                    setStep={setStep}
                    prevStep={prevStep}
                    nextStep={nextStep}
                />
            </PaddingSection>
            <View style={style.body}>
                <SurveyBody
                    step={state.step}
                    initData={getInitSurveyStateByStep()}
                    itemList={curSurveyItemList}
                    onChangeStep={handleChangeStep}
                />
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    head: {
        marginVertical: 15,
    },
    body: {
        flex: 1,
    },
});

export default withScreen(() => (
    <SurveyStoreProvider>
        <SurveyScreen />
    </SurveyStoreProvider>
));
