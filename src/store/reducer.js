const INITIAL_STATE ={
    user:{},
    allUsers:[]
}

export default (state = INITIAL_STATE,action)=>{
   switch(action.type){
       case "USERDATA":
              return({
                  ...state,
                  user: action.payload
              })
       case "ALLUSERDATA":
              return({
                  ...state,
                  allUsers: action.payload
              })
       default:
           return state
   }

}