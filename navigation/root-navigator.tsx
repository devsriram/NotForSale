import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import HomeMapView from "../domain/home-map-view"
import LoginScreen from "../domain/login"
import {getAppState} from "../redux/state-provider"
import AuthNavigator from "./auth-navigator"
import {RootStack} from "../types"

const RootNavigator = () => {
    const {
        state,
        dispatch
    } = getAppState();

    const Stack = createStackNavigator<RootStack>();
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName = "home"
                screenOptions = {{headerShown : false}}
            >
                {(state.isAuthenticated) ? (
                    <Stack.Screen name = "home" component ={HomeMapView}/>
                ) : (
                    <Stack.Screen name = "auth" component ={AuthNavigator}/>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigator;