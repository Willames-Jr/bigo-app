import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreenInitial from './pages/SplashScreen/index';
import TelaInicial from './pages/TelaInicial/index';
import Etapa1 from './pages/Etapa1Cadastro/index';
import Etapa2 from './pages/Etapa2Cadastro/index';
import Etapa3 from './pages/Etapa3Cadastro/index';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Etapa1">
      
        <Stack.Screen 
          name="SplashScreenInitial" 
          component={SplashScreenInitial} 
          options={{ headerShown: false}}/>
        
        <Stack.Screen 
          name="TelaInicial" 
          component={TelaInicial} 
          options={{ headerShown: false}}/>
        
        <Stack.Screen 
          name="Etapa1" 
          component={Etapa1}
          options={{ headerShown: false}}/>

         <Stack.Screen 
          name="Etapa2"
          component={Etapa2}
          options={{ headerShown: false}}/>

          <Stack.Screen 
          name="Etapa3"
          component={Etapa3}
          options={{ headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;