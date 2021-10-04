import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {item_tyeps} from '@global_types';
import SurveyItem from '@atom/SurveyItem';

import Icon from 'react-native-vector-icons/FontAwesome5';
import {color} from '@lib/metaStyle';
import SurveyButton from '@atom/SurveyButton';
import PaddingSection from '@organism/PaddingSection';
type item = item_tyeps.survey_item;
type Props = {
    step: number;
    initData: item | item[];
    itemList: item[];
    onChangeStep: (type: 'PREV' | 'NEXT', item: item[]) => void;
};

const SurveyBody = (props: Props) => {
    const [type, setType] = useState<'SINGLE' | 'MULTIPLE'>('SINGLE');
    const [state, setState] = useState<item[]>([]);
    const [itemList, setItemList] = useState<item[]>([]);

    useEffect(() => {
        if (
            Object.prototype.toString.call(props.initData) === '[object Array]'
        ) {
            setType('MULTIPLE');
            // @ts-ignore
            setState(props.initData);
        } else {
            setType('SINGLE');
            if (props.initData) {
                // @ts-ignore
                setState([props.initData]);
            }
        }
    }, [props.initData]);

    useEffect(() => {
        setItemList([]);
        setItemList(props.itemList);
    }, [props.itemList]);

    const handleOnClickItem = (item: item) => {
        if (type === 'SINGLE') {
            setState([item]);
        } else {
            const newState = state.slice();
            const matchIdx = state.findIndex(it => it.code === item.code);
            if (matchIdx === -1) {
                // push
                newState.push(item);
            } else {
                // delete
                newState.splice(matchIdx, 1);
            }
            setState(newState);
        }
    };
    return (
        <>
            <View>
                <PaddingSection style={style.question_row}>
                    <View style={style.left_col}>
                        <Text>{props.step}</Text>
                    </View>
                    <View style={style.right_col}>
                        <Text style={style.question_text}>
                            생애주기가 어떻게 되시나요?
                        </Text>
                        <View style={style.question_info_row}>
                            <Icon
                                style={style.question_info_icon}
                                name="question-circle"
                            />
                            <Text style={style.question_info_text}>
                                2개 이상 선택해야 합니다
                            </Text>
                        </View>
                    </View>
                </PaddingSection>
                <ScrollView>
                    <PaddingSection>
                        <>
                            {itemList.length > 1 && (
                                <>
                                    {itemList.map((it, idx) => {
                                        const active =
                                            state.findIndex(
                                                stateItem =>
                                                    stateItem.code === it.code,
                                            ) !== -1;
                                        return (
                                            <SurveyItem
                                                key={`surveyitem:${idx}`}
                                                nowActive={active}
                                                onClick={() =>
                                                    handleOnClickItem(it)
                                                }
                                                {...it}
                                            />
                                        );
                                    })}
                                </>
                            )}
                        </>
                    </PaddingSection>
                </ScrollView>
            </View>
            <View style={style.submit_row}>
                <PaddingSection style={style.submit_row_inner}>
                    <SurveyButton
                        content={'이전'}
                        onPress={() => props.onChangeStep('PREV', state)}
                    />
                    <SurveyButton
                        type={'POSITIVE'}
                        content={'다음'}
                        onPress={() => props.onChangeStep('NEXT', state)}
                    />
                </PaddingSection>
            </View>
        </>
    );
};

const style = StyleSheet.create({
    question_row: {
        marginBottom: 25,
    },
    question_icon: {
        color: color.primary_color,
        fontSize: 20,
        marginRight: 20,
    },
    question_text: {
        color: 'black',
        fontSize: 20,
        fontFamily: 'bold',
    },

    question_info_row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    question_info_icon: {
        fontSize: 10,
        color: 'gray',
    },
    question_info_text: {
        color: 'gray',
        fontFamily: 'regular',
    },

    submit_row: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,

        paddingVertical: 5,
        backgroundColor: 'white',
        elevation: 11,
    },
    submit_row_inner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default SurveyBody;
