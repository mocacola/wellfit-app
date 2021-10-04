import {color} from '@lib/metaStyle';
import React from 'react';

import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ViewStyle,
    TextStyle,
} from 'react-native';

type Props = {
    content: string;
    onPress: any;
    type?: 'POSITIVE' | 'NEGATIVE' | 'DEFAULT' | 'WARN';
    style?: ViewStyle;
    textStyle?: TextStyle;
    icon?: JSX.Element;
};

const SurveyButton = (props: Props) => {
    const type = props.type || 'DEFAULT';
    //@ts-ignore
    const btnStyle = style[`container_${type.toLowerCase()}`];
    //@ts-ignore
    const textStyle = style[`text_${type.toLowerCase()}`];
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={[style.container, btnStyle, props.style]}>
            <View>
                <Text style={[style.text, textStyle, props.textStyle]}>
                    {props.content}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const style = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
    },
    container_positive: {
        backgroundColor: color.primary_color,
    },
    container_negative: {
        backgroundColor: color.negative_color,
    },
    container_default: {
        backgroundColor: color.light_gray_back_color,
    },
    container_warn: {},

    text: {
        fontFamily: 'bold',
    },
    text_positive: {
        color: 'white',
    },
    text_negative: {
        color: 'white',
    },
    text_default: {
        color: 'black',
    },
    text_warn: {},
});

export default SurveyButton;
