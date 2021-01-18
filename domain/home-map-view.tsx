import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';
import MapView, { AnimatedRegion, Marker } from 'react-native-maps';
import {PrimaryButton} from "../components/custom-button"
import {getAppState} from "../redux/state-provider"
import { UserAction } from '../redux/user-reducer';
import ItemService from "../firebase-services/get-item-data"
import {initialItemData, itemData} from "../types"


const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
// const LATITUDE = 29.9990674;
// const LONGITUDE = -90.0852767;
const LATITUDE_DELTA = 0.0722;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.001;


const initialMapData = {
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0,
    longitudeDelta: 0
}
const coordinates = {
    latitude : 0,
    longitude : 0
}

export default function HomeMapView() {
  const {
    state,
    dispatch
} = getAppState();

  useEffect(() => {
    console.log("user is",state.user)
  },[])

  const [region, setRegion] = useState(initialMapData);
  const [marker, setMarker] = useState(coordinates);
  const initialData : itemData[] = [];
  const [itemsData, setItemsData] = useState(initialData);

  useEffect(() => {
    // console.log("my firebase config :",firebase);
    getCurrentLocation();
  },[])

  useEffect(()  =>  {
    ItemService().getAllItems()
    .then((docSnapshot) => {
      const localData : itemData[] = [];
      docSnapshot.forEach((doc) => {
        const data = {
          itemId: doc.get("itemId"),
          userId: doc.get("userId"),
          itemName: doc.get("itemName"),
          desc: doc.get("desc"),
          condition: doc.get("condition"),
          contact: doc.get("contact"),
          timestamp: doc.get("timestamp"),
          coordinates: doc.get("coordinates"),
          imageUri : doc.get("imageUri"),
        }
        localData.push(data);
      })
      setItemsData(localData);
    })

  })

  const getCurrentLocation = async () => {
    await navigator.geolocation.getCurrentPosition((position) => {
        let region = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0722,
          longitudeDelta: LATITUDE_DELTA * ASPECT_RATIO
        };
        setRegion(region);
        const coordinates = {
            latitude: region.latitude + SPACE,
            longitude: region.longitude + SPACE
        }
        setMarker(coordinates);
    },
  );
}



  return (
    <View style={styles.container}>
      <MapView 
        style={styles.map} 
        //initialRegion={region}
        region={region}
        zoomTapEnabled={false}
        showsUserLocation={true}
      >
        <Marker
          coordinate={marker}
          title="This is a native view"
          description="Lorem ipsum dolor sit amet"
          
        />
      </MapView>
      {/* <View style = {styles.buttons}>
        <PrimaryButton buttonTitle = "Add Item" onPress = {() => {}} />
        <PrimaryButton buttonTitle = "Logout" 
          onPress = {() => {dispatch({type: UserAction.LOGOUT})}} 
        />
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  buttons : {
    position : "absolute",
    bottom : width * 0.2,
    width : "100%"
  }
});
