import * as React from 'react';
import { useState } from 'react';
import { styles } from '../../components/style';
import {TextInput,View,Text,Image,TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements'
import {Picker} from '@react-native-picker/picker';



export default function Etapa2Cadastro ({ navigation }) {
  const [nplaca, setNplaca] = useState();



  const autenticacao=()=>{
    if(nplaca == null){
      alert("por favor preencha todos os campos!")
    }
    else{
      navigation.navigate('Etapa3')
    }
  }

  return (
    <View>
        <View style={{backgroundColor:'#fff',margin:10}}>
          <Text style={{fontSize: 20,fontWeight: "bold"}}>Olá, Nome.</Text>
        </View>
        <View style={{margin:10}}>
          <Text style={{fontSize: 20}}>Precisamos de mais algumas informações para finalizar o seu registro.</Text>
        </View>
        
        <View style={{margin:10}}>
          <TextInput
            value={nplaca}
            onChangeText={setNplaca}
            style={styles.input}
            placeholder="Número da Placa" />
        </View>

        <View style={{flexDirection:"row",margin:10}}>
          <Text style={{fontSize: 20}}>Foto do Perfil: </Text>

          <View>
           <TouchableOpacity style={{}}>
             <Icon
              name='camera'
              type='ionicon'
              color='#EF9928'
            />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{flexDirection:"row",margin:10}}>
          <Text style={{fontSize: 20}}>Foto do Veículo: </Text>
          <View>
           <TouchableOpacity style={{}}>
             <Icon
              name='camera'
              type='ionicon'
              color='#EF9928'
            />
            </TouchableOpacity>
          </View>
          
        </View>
        <View style={styles.viewButoonEnd ,[{marginTop:293, justifyContent:"center",alignItems:"center"}]}>
           <TouchableOpacity style={styles.butao} onPress={autenticacao}>
              <Text>Continuar</Text>
            </TouchableOpacity>
        </View> 
    </View>
  );
}