import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function AddItemScreen(props) {
    return (
        <SafeAreaView>
            <View style = {styles.container}>
                <Text>Add Item</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container : {
        alignItems : "center",
        alignContent : "center"
    }
})

export default AddItemScreen;