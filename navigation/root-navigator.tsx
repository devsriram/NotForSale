import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import HomeMapView from "../domain/home-map-view"
import LoginScreen from "../domain/login"
import {getAppState} from "../redux/state-provider"

function RootNavigator(props) {
    const {
        state,
        dispatch
    } = getAppState();

    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName = "home"
            >
                {(state.isAuthenticated) ? (
                    <Stack.Screen name = "home" component ={HomeMapView}/>
                ) : (
                    <Stack.Screen name = "login" component ={LoginScreen}/>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigator;