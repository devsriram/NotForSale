import { useState } from "react"
import { number } from "yup/lib/locale"
//import firebase from "../firebase-config"
import firebase from '../firebase-config';
import {itemData} from "../types"

export default () => {

    const getItemId = async () => {
        return await firebase.firestore().collection("item-id-manager").doc("admin").get()
    }

    const setItemId = async () => {
        const idConfig = await getItemId();
        let newItemId = idConfig.data()?.itemId;
    
        newItemId = newItemId + 1;
        let data = {
          itemId: newItemId,
        };
        firebase.firestore().collection("item-id-manager").doc("admin").set(data);
    };

    const storeImage = async (currentUri, itemId) => {
      const response = await fetch(currentUri);
      const blob = await response.blob();
      var ref = firebase.storage().ref().child("item-images/" + itemId);
      ref.put(blob);
    }

    const addItem = async (itemData : itemData, itemId) => {
      let newItemId = itemId.toString();
      await firebase.firestore().collection("items").doc(newItemId).set(itemData);
    }

    return {
          getItemId,
          setItemId,
          addItem,
          storeImage
    }
}