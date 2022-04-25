import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  fundoGeral:{
    flex:1,
    alignItems:"center", //alinhando itens no centro
    justifyContent:"center",
    backgroundColor:"#fff",
  },

  butao:{
    backgroundColor:'#EF9928',
    padding:10,
    width:250,
    alignItems:"center", //alinhando itens no centro
    borderRadius:3,
  },

  input:{
    backgroundColor:"#E0E0E0",
    width:100,
    margin:10,
    padding:8,
    borderRadius:5,
  },
  
  viewButoonEnd:{
    flex:1,
    marginTop:150
  },

  logo:{
    width:200, //colocando 60% em qualquer tipo de dispositivo
    height:200, //colocando 50% em qualquer tipo de dispositivo
    marginTop:80
  },
  
  inputPassword:{
    flexDirection:"row",
    height: 40,
    margin: 10,
    backgroundColor:"#fff",
    borderColor:"gray",
    borderRadius:10,
    borderWidth: 1,
  },
});