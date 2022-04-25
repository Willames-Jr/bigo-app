import * as React from 'react';
import { useState } from 'react';
import { TextInput, View, Text, Image, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { styles } from '../../components/style';
import { Ionicons } from '@expo/vector-icons';
import api from '../../services/api';

export default function Etapa4Cadastro({ navigation, route }) {
  const [senha, setSenha] = React.useState('');
  const [confirmarSenha, setConfirmarSenha] = React.useState('');
  const [aparecerSenhaConfirmacao, setAparecerSenhaConfirmacao] =
    React.useState(true);
  const [aparecerSenha, setAparecerSenha] = React.useState(true);

  const saveUser = async () => {
    alert('!');
    console.log('oi');
    const userInfo = route.params;

    const formDataUserInfo = new FormData();
    formDataUserInfo('name', userInfo.name);
    formDataUserInfo('surname', userInfo.surname);
    formDataUserInfo('is_driver', userInfo.is_driver);
    formDataUserInfo('password', senha);
    formDataUserInfo('cpf', userInfo.cpf);
    formDataUserInfo('email', userInfo.email);

    await api
      .post('users/register', formDataUserInfo, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((result) => {
        // Tudo ok ...
        alert(result);
        console.log(result);
      })
      .catch((err) => {
        // Ocorreu algum erro ...
        alert(err);
        console.log(err);
      });

    //navigation.navigate('Usuario')
  };

  return (
    <View style={styles.fundo}>
      <View style={{ margin: 10 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
          Crie uma senha.
        </Text>
      </View>

      <View style={styles.inputPassword}>
        <TextInput
          style={{ width: '85%', fontSize: 20, paddingLeft: 2 }}
          onChangeText={setSenha}
          maxLength={8}
          secureTextEntry={aparecerSenha}
          placeholder="senha"
          value={senha}
        />

        <TouchableOpacity
          style={{ paddingRight: 5 }}
          onPress={() => setAparecerSenha(!aparecerSenha)}>
          <Ionicons name="eye" size={32} color="#EF9928" />
        </TouchableOpacity>
      </View>

      <View style={styles.inputPassword}>
        <TextInput
          style={{ width: '85%', fontSize: 20, paddingLeft: 2 }}
          onChangeText={setConfirmarSenha}
          maxLength={8}
          secureTextEntry={aparecerSenhaConfirmacao}
          placeholder="Confirmar senhar"
          value={confirmarSenha}
        />

        <TouchableOpacity
          style={{ paddingRight: 5 }}
          onPress={() =>
            setAparecerSenhaConfirmacao(!aparecerSenhaConfirmacao)
          }>
          <Ionicons name="eye" size={32} color="#EF9928" />
        </TouchableOpacity>
      </View>

      <View style={{ margin: 10 }}>
        <Text style={{ fontSize: 20 }}>
          Sua senha precisa conter pelo menos:.
        </Text>
        <Text style={{ fontSize: 10 }}>- 8 caracteres .</Text>
        <Text style={{ fontSize: 10 }}>- 1 Letra .</Text>
        <Text style={{ fontSize: 10 }}>- 1 Número .</Text>
        <Text style={{ fontSize: 10 }}>- 1 Símbolo (!@#$%^&*.).</Text>
      </View>

      <View
        style={
          (styles.viewButoonEnd,
          [{ marginTop: 300, justifyContent: 'center', alignItems: 'center' }])
        }>
        <TouchableOpacity style={styles.butao} onPress={() => saveUser()}>
          <Text>Continuar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
