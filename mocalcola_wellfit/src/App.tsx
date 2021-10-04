import React from 'react';
import {SafeAreaView} from 'react-native';
import AppRouter from './AppRouter';
const App = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <AppRouter />
        </SafeAreaView>
    );
};

export default App;
