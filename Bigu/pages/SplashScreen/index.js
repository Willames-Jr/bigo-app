import * as React from 'react';
import {
   View,
   Text, 
   TouchableOpacity,
   TextInput, 
   ScrollView, 
   SafeAreaView, 
   Image } from "react-native";
import { styles } from '../../components/style.js';
import { useNavigation } from '@react-navigation/native';



export default function SplashScreenInitial({navigation}) {

  setTimeout(() => {
    navigation.navigate('TelaInicial');
  },1000); 
    return (
      <View style={styles.fundoGeral}>
        <View>
          <Image  style={styles.logo}  source={require('../../assets/LOGO.png')} />
        </View>
      </View>
    );
  }