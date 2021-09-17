import React from 'react';
import {
 StyleSheet,Text, View,Button,Image,TextInput,TouchableOpacity,ImageBackground,
} from 'react-native';
import { useState } from 'react';
import { singupUser } from '../store/action';
import { useDispatch } from 'react-redux';
import Images from '../assets/imges'
import Icon from 'react-native-vector-icons/AntDesign';






export default function RegisterUser({navigation}) {

   const [username, setUsername] = useState("") 
   const [password, setPassword] = useState("")  
   const [email, setEmail] = useState("")  
   const dispatch = useDispatch();
  //  const [count, setCount]=useState(0)

  //  function counting (){
  //    setCount(count+1)
  //  }

  function register (){

       let user={
         username,
         email,
         password
       }
      dispatch(singupUser(user))
   } 

  return (
    <ImageBackground source={Images[1]} resizeMode="cover" style={{flex: 1,
      justifyContent: "center" }}>

    <View style={styles.container}>
    <Image style={styles.image}  />

    <View style={styles.inputView}>
    <Icon name="user" size={30} color="#900" />
      <TextInput
        style={styles.TextInput}
        placeholder="UserName."
        placeholderTextColor="#fff"
        onChangeText={(text) => setUsername(text)}
        />
    </View>

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

  

    <TouchableOpacity  onPress={register} style={styles.loginBtn}>
      <Text on style={styles.loginText}>Signup</Text>
    </TouchableOpacity>

    <View style={{flexDirection:"row",marginTop:35,}}>

    <Text  style={{fontSize:12,color:"#fff",paddingTop:9  }}>if you alrady have an account just  </Text>
    <TouchableOpacity 
     onPress={() => navigation.navigate('login')}
     style={{}}>
      <Text style={{fontSize:20,color:"#fff",marginLeft:5,borderBottomWidth:1,borderColor:"#fff"}}> Login</Text>
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
    borderColor:"#fff",
    flexDirection:"row"
  },
 
  TextInput: {
    width:"100%",
     textAlign:"center",
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
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



























   // auth()
    // .createUserWithEmailAndPassword(email, password)
    // .then(() => {
    //   console.log('User account created & signed in!');
    // })
    // .catch(error => {
    //   if (error.code === 'auth/email-already-in-use') {
    //     console.log('That email address is already in use!');
    //   }
  
    //   if (error.code === 'auth/invalid-email') {
    //     console.log('That email address is invalid!');
    //   }
  
    //   console.error(error);
    // });