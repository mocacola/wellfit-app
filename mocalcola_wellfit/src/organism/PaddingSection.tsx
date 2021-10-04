import React from 'react';

import {StyleSheet, View, Text, ViewStyle} from 'react-native';

type Props = {
    children: JSX.Element | JSX.Element[];
    isNoPadding?: boolean;
    style?: ViewStyle;
};

const PaddingSection = (props: Props) => {
    return (
        <View style={[!props.isNoPadding && style.container, props.style]}>
            {props.children}
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
    },
});

export default PaddingSection;
