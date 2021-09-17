import React from "react";
import { ImageBackground, StyleSheet, Text, View, TextInput,TouchableOpacity } from "react-native";
import Navigation from './src/config/navigation'
import { Provider } from "react-redux";
import store from "./src/store";


export default function App() {
  return (
    <View style={styles.container}>
      <Provider store={store}>
         <Navigation/>
      </Provider>
    
  </View>
  )
}

const styles = StyleSheet.create({
  container:{
       flex:1,

  },
  
})