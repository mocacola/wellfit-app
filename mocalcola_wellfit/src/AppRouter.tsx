import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '@screen/HomeScreen';
import SurveyScreen from '@screen/SurveyScreen';

const Stack = createNativeStackNavigator();
const AppRouter = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Survey" component={SurveyScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppRouter;
