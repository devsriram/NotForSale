import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import {PrimaryInput} from "../components/custom-input"
import ImageInput from "../components/image-picker"
import RadioGroup from "react-native-radio-buttons-group";
import RadioButtons from "../components/radio-buttons"
import {PrimaryButton} from "../components/custom-button"

function AddItemScreen(props) {

    const itemConditions = [
        {
            value : 0,
            label : "Good"
        },
        {
            value : 1,
            label : "Not Good"
        },
        {
            value : 2,
            label : "Broken"
        }
    ]

    const contact = [
        {
            value : 0,
            label : "Email"
        },
        {
            value : 1,
            label : "Phone Number"
        },
        {
            value : 2,
            label : "Both"
        },
        {
            value : 3,
            label : "None"
        }
    ]

    return (
        <SafeAreaView style = {styles.safeAreaContainer}>
            <ScrollView style = {styles.scroll}>
            <View style = {styles.container}>
                <ImageInput />
                <View style = {styles.gap}></View>
                <View style = {styles.nameContainer}>
                    <Text style = {styles.conditionText}>Item Name</Text>
                    <PrimaryInput 
                        placeholderText = "Hii"
                    />
                </View>
                
                <View style = {styles.conditionContainer}>
                    <Text style = {styles.conditionText}>Item Condition</Text>
                    <RadioButtons data = {itemConditions} />
                </View>

                <View style = {styles.contactContainer}>
                    <Text style = {styles.conditionText}>Show Contact</Text>
                    <RadioButtons data = {contact} />
                </View>
                <View style = {styles.contactContainer}>
                    <Text style = {styles.conditionText}>Description</Text>
                    <View style = {styles.descContainer}>
                        <TextInput
                            style = {styles.descText}
                            numberOfLines = {3}
                        />
                    </View>
                </View>
                <PrimaryButton buttonTitle = "Submit" style = {styles.submitButton}/>
            </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container : {
        alignItems : "center",
        alignContent : "center",
        padding : 10,
        backgroundColor : "#fff",
        height : "100%"
    },
    safeAreaContainer : {
        backgroundColor : "#fff"
    },
    gap : {
        height : 20
    },
    conditionText : {
        fontSize : 20,
        fontWeight : "bold",
        color : "#fc5c65",
        marginBottom : 10
    },
    conditionContainer : {
        justifyContent : "flex-start",
        paddingTop : 20,
        width : "100%",
        paddingLeft : 10
    },
    nameContainer : {
        justifyContent : "flex-start",
        paddingTop : 20,
        width : "100%",
        paddingLeft : 10
    },
    contactContainer : {
        justifyContent : "flex-start",
        paddingTop : 20,
        width : "100%",
        paddingLeft : 10,  
    },
    scroll : {
        backgroundColor : "#fff",
        height : "100%"
    },
    descContainer: {
        borderColor : "#fc5c65",
        borderRadius: 10,
        borderWidth : 1,
        width : "95%",
        padding : 10,
        height : 120
      },
      descText : {
        fontSize : 15,
        width : "100%"
        //color : "#a9a9a9"
    },
    submitButton : {
        fontSize : 20,
        color : "#fff"
    }
})

export default AddItemScreen;