import {color} from '@lib/metaStyle';
import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

type Props = {
    step: number;
    setStep: (stepNumber: number) => void;
    prevStep: () => void;
    nextStep: () => void;
};

const SurveyStepper = (props: Props) => {
    return (
        <View style={style.container}>
            <View style={style.step_bar_row}>
                {Array.from({length: 6}, (_, i) => i + 1).map(it => {
                    const isActive: boolean = it <= props.step + 1;
                    return (
                        <TouchableOpacity
                            style={[
                                style.step_bar,
                                isActive
                                    ? style.step_bar_on
                                    : style.step_bar_off,
                            ]}
                        />
                    );
                })}
            </View>

            {/* <View style={style.step_text_row}>
                <Text style={[style.curstep, style.stepper_text]}>
                    {props.step + 1}
                </Text>
                <Text style={[style.sep]}>/</Text>
                <Text style={[style.totalstep, style.stepper_text]}>6</Text>
            </View> */}
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
    },

    step_bar_row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    step_bar: {
        flex: 1,
        height: 3,
        borderRadius: 10,
        marginHorizontal: 5,
    },
    step_bar_on: {
        backgroundColor: color.primary_color,
    },
    step_bar_off: {
        backgroundColor: color.light_primary_color,
    },
    step_text_row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    stepper_text: {
        color: color.primary_color,
        fontSize: 20,
        fontWeight: 'bold',
    },
    sep: {marginHorizontal: 10, color: color.light_primary_color},
});

export default React.memo(SurveyStepper);
