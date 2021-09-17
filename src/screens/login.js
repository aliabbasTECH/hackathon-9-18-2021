import React from 'react';
import {
  StyleSheet,
  Text, 
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { useState } from 'react';
import { loginUser } from '../store/action';
import { useDispatch } from 'react-redux';
import Images from '../assets/imges'



export default function LoginScreen({navigation}) {

  const [password, setPassword] = useState("")  
  const [email, setEmail] = useState("") 
  
  const dispatch = useDispatch()
 
  
  const login =()=>{
      let user = {
        email,
        password
      }
      dispatch(loginUser(user,navigation))
      .then((uid)=>{
        navigation.navigate("home",{user:uid})
      })
      .catch((error)=>{
        alert(error) 
      })
     
   }

  return (

    <ImageBackground source={Images[2]} resizeMode="cover" style={{flex: 1,
      justifyContent: "center"}}>

    <View style={styles.container}>
    <Image style={styles.image}  />

    <View style={styles.inputView}>
      <TextInput
        style={styles.TextInput}
        placeholder="Email."
        placeholderTextColor="#fff"
        onChangeText={(text) => setEmail(text)}
        />
    </View>

    <View style={styles.inputView}>
      <TextInput
        style={styles.TextInput}
        placeholder="Password."
        placeholderTextColor="#fff"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        />
    </View>


    <TouchableOpacity>
      <Text style={styles.forgot_button}>Forgot Password?</Text>
    </TouchableOpacity>

    
    <TouchableOpacity onPress={login} style={styles.loginBtn}>
      <Text style={styles.loginText}>Login</Text>
    </TouchableOpacity>
    
    <View style={{flexDirection:"row",marginTop:35,}}>

      <Text  style={{fontSize:12,color:"#fff",paddingTop:9  }}>if you don't have a acount  </Text>
      <TouchableOpacity 
        onPress={() => navigation.navigate('register')}
        style={{}}>
         <Text style={{fontSize:20,color:"#fff",marginLeft:5,borderBottomWidth:1,borderColor:"#fff"}}>Create Account</Text>
      </TouchableOpacity>
      
    </View>
    
    
  </View>
</ImageBackground>
  )
}



const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#000000',
opacity: 0.6,
    alignItems:"center",
    
  },
  image: {
    resizeMode:'contain',
    width:"40%",
    height:"30%"
  },
 
  inputView: {
    borderRadius: 30,
    width: "80%",
    height: 55,
    marginBottom: 20,
    alignItems: "center",
    borderBottomWidth:2,
    borderColor:"#fff"
  },
 
  TextInput: {
    width:"100%",
     textAlign:"center"
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
    color:"#fff"
  },
 
  loginBtn: {
    width: "70%",
    borderRadius: 30,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor:"rgba(242, 247, 246, 0.3)",
   
    borderEndWidth:5,
    borderLeftWidth:5,
    borderColor:"white",
    
  },
  loginText:{
       fontSize:20,
       color:"#fff",
       
  },
});


