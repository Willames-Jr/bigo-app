import React,{useState, useEffect} from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions ,PermissionsAndroid, Platform} from 'react-native';
import Geolocation from '@react-native-community/geolocation';


export default function App() {
  const [region, setRegion] = useState(null);
  useEffect(()=>{
    getMyLocation();
  },[])
  function getMyLocation(){
    Geolocation.getCurrentPosition(info => {
      info.coords.longitude
      info.coords.latitude
    });
  }
  return (
    <View style={styles.container}>
      <MapView onMapReady={()=>{
        Platform.OS === 'android'? PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
          .then(()=>{
            console.log("Usuario Aceitou")
          })
        : ""
      }} 
      
      style={styles.map} 
      region={region}
      zoomEnabled={true}
      minZoomLevel={17}
      showsUserLocatio={true}
      loadingEnabled={true}/>
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
});