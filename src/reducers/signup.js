const signUpReducer = (state={}, action) => {
    let currentUser;
    switch(action.type){
        case 'SIGN_UP':
            //console.log(action.data);
            currentUser = action.data
            return currentUser
        default:
            return state
    }
    debugger;
}

export default signUpReducer;