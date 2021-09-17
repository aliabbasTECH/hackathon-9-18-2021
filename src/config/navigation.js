import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Home from "../screens/home";
import LoginScreen from "../screens/login";
import RegisterUser from "../screens/register";


const Stack = createNativeStackNavigator();

function Navigation() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="register" component={RegisterUser} />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="login" component={LoginScreen} />
        
          
  
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default Navigation;