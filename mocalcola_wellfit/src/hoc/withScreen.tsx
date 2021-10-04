import React from 'react';

import {StyleSheet, View, Text, SafeAreaView} from 'react-native';

const withScreen = (WrappedComponent: any) => {
    return (props: any) => {
        return (
            <SafeAreaView style={style.container}>
                <WrappedComponent {...props} />
            </SafeAreaView>
        );
    };
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'red',
    },
});

export default withScreen;
