import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import React from "react";
import {AntDesign, MaterialCommunityIcons} from "@expo/vector-icons"
import {BottomTabList} from "../types"
import HomeMapView from "../domain/home-map-view"
import AddItemScreen from "../domain/add-item"
import AccountNavigator from "../navigation/account-navigator"
import AddItemButton from "./add-item-button"

const BottomTab = createBottomTabNavigator<BottomTabList>();

const BottomTabNavigator = () => {
    return (
        <BottomTab.Navigator
            initialRouteName = "home"
        >
            <BottomTab.Screen 
                name = "home"
                component = {HomeMapView}
                options={{
                    title: "Home",
                    tabBarIcon: ({ color }) => (
                      <AntDesign name="home" size={24} color={color} />
                    ),
                }}
            />
            <BottomTab.Screen 
                name = "addItem"
                component = {AddItemScreen}
                options={({navigation}) => ({
                    tabBarButton: () => (
                        <AddItemButton
                            onPress={() => navigation.navigate("addItem")}
                        />
                    ),
                })}
            />
            <BottomTab.Screen 
                name = "account"
                component = {AccountNavigator}
                options={{
                    title: "Account",
                    tabBarIcon: ({ color }) => (
                      <AntDesign name="user" size={24} color={color} />
                    ),
                }}
            />
        </BottomTab.Navigator>
    )
}

export default BottomTabNavigator; 