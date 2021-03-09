// action = {
//  type: "SUMBIT_SIGNUP",
//  description: "this is where the associated data will go"
//  }

const signUpReducer = (state={
    username: '',
     password: ''
}, action) => {
    switch(action.type){
        case 'SIGN_UP':
            return console.log(state);
        default:
            return state
    }
}

export default signUpReducer;