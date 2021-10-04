import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {SafeAreaView, View, TouchableOpacity, Text} from 'react-native';

const HomeScreen = () => {
    const nav = useNavigation();
    return (
        <SafeAreaView
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity
                onPress={() => {
                    console.log('CICK!');
                    nav.navigate('Survey');
                }}
                style={{padding: 10}}>
                <View>
                    <Text style={{color: 'black'}}>GO TO SURVEY</Text>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default HomeScreen;
