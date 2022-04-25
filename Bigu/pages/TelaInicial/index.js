import * as React from 'react';
import { styles } from '../../components/style.js';
import {View,Text,Image,TouchableOpacity} from 'react-native';



export default function TelaPrincipal ({ navigation }) {

  return (
    <View style={styles.fundoGeral}>
    
        <View>
            <Image style={styles.logo} source={require('../../assets/LOGO.png')} />
          <View style={styles.viewButoonEnd ,[{marginTop:185}]}>
            <TouchableOpacity style={styles.butao} onPress ={ () => navigation.navigate('Etapa1')}>
              <Text>Continuar</Text>
            </TouchableOpacity>
          </View> 
        </View>

    </View>
  );
}