import auth, { firebase } from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

const singupUser =(user)=>{
      return (dispatch) =>{
      auth().createUserWithEmailAndPassword(user.email, user.password)
        .then((res)=>{
          firebase.database().ref('/').child(`user/${res.user.uid}`).set(user)
          alert("UserSignUp")
        ;})
        .catch(error => {
           console.log(error.message)
        });

      }
  }


const loginUser =(user)=>{
    return (dispatch) =>{
      return new Promise((resolve,reject)=>{ 
              auth().signInWithEmailAndPassword(user.email, user.password)
              .then((res)=>{
                  firebase.database().ref('/').child(`user/${res.user.uid}`)
                  .once('value',(data)=>{
                      dispatch({type:"USERDATA",payload:data.val()})
                      resolve(res.user.uid)
                     });
                })
              .catch(error => {
                  reject(error.message)
                });

      })

    }
}


const getUser =(uid)=>{
     return (dispatch)=>{
      firebase.database().ref('/').child(`user/${uid}`)
      .once('value',(data)=>{
          dispatch({type:"USERDATA",payload:data.val()})
         
         });
     }
}


const getAllUsers=()=>{
  return (dispatch)=>{
    firebase.database().ref('/').child(`user`)
    .once('value',(data)=>{
        var arr=[]
        for(var key in data.val() ){
          arr.push(data.val()[key])
         
        }
        
        dispatch({type:"ALLUSERDATA",payload:arr})
       
       });
   }
}




  export {
      singupUser,
      loginUser,
      getUser,
      getAllUsers,
  }