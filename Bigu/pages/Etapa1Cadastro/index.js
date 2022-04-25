import * as React from 'react';
import { useState } from 'react';
import { styles } from '../../components/style';
import {TextInput,View,Text,Image,TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-picker/picker';



export default function Etapa1Cadastro ({ navigation }) {
  const [userType, setUserType] = useState();
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [sobrenome, setSobrenome] = useState();
  const [cpf, setCpf] = useState();


  const autenticacao=()=>{
    const userInfo = {
      cpf,
      email,
      name: nome,
      surname: sobrenome,
      is_driver: userType == "motorista"
    }

    if(nome == null || sobrenome == null || cpf == null){
      alert("Por favor preencha todos os campos!")
    }
    else{
      if(userType == null){
        alert("Selecione o tipo de cadastro")
      }
      else{
        if (userType == "motorista"){
           navigation.navigate("Etapa2", userInfo);
        }
        else{
          navigation.navigate("Etapa3", userInfo);
        }
      }
    }
  }

  return (
    <View style={{backgroundColor:'#fff'}}>
        <View style={{margin:10}}>
          <Text style={{fontSize: 20,fontWeight: "bold"}}>Insira seus Dados</Text>
        </View>

        <View style={{flexDirection:"row"}}>
          <TextInput
            value={nome}
            onChangeText={setNome}
            style={styles.input}
            placeholder="Nome" />

          <TextInput
            value={sobrenome}
            onChangeText={setSobrenome}
            style={styles.input}
            placeholder="Sobrenome" />
        </View>

        <View>
          <TextInput
            value={cpf}
            onChangeText={setCpf}
            style={[styles.input ,{width:'100%'}]}
            keyboardType="numeric"
            placeholder="CPF" />
        </View>

        <View>
          <TextInput
            value={email}
            onChangeText={setEmail}
            style={[styles.input ,{width:'100%'}]}
            placeholder="Email" />
        </View>

        <View style={{flexDirection:"row", margin:10}}>

        <Text>Cadastrar-me como: </Text>

        <Picker
          selectedValue={userType}
          onValueChange={(itemValue, itemIndex) =>
            setUserType(itemValue)
          }>
          <Picker.Item label="Tipo" value="null" />
          <Picker.Item label="Motorista" value="motorista" />
          <Picker.Item label="Cliente" value="cliente" />
        </Picker>
        </View>


        <View style={styles.viewButoonEnd,[{marginTop:419, justifyContent:"center",alignItems:"center"}]}>
            <TouchableOpacity style={styles.butao} onPress={autenticacao}>
              <Text>Continuar</Text>
            </TouchableOpacity>
        </View> 
    </View>
  );
}