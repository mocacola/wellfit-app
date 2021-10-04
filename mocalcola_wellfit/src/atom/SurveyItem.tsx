import {color} from '@lib/metaStyle';
import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';

type Props = {
    nowActive: boolean;
    code: string;
    name: string;
    onClick: () => void;
};

const SurveyItem = (props: Props) => {
    return (
        <TouchableOpacity
            onPress={props.onClick}
            style={[
                style.container,
                props.nowActive ? style.container_on : style.container_off,
            ]}>
            <Text
                style={[
                    style.text,
                    props.nowActive ? style.text_on : style.text_off,
                ]}>
                {props.name}
            </Text>
            {props.nowActive && <Icon name="check" style={style.text_on} />}
        </TouchableOpacity>
    );
};

const style = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginVertical: 10,

        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    container_on: {
        backgroundColor: color.primary_color,
        elevation: 5,
    },
    container_off: {
        backgroundColor: color.light_gray_back_color,
    },

    text: {
        fontFamily: 'bold',
    },
    text_on: {color: 'white'},
    text_off: {color: color.default_text_color},
});

export default SurveyItem;
