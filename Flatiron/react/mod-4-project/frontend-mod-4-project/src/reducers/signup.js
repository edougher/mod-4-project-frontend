const signUpReducer = (state={}, action) => {
    switch(action.type){
        case 'SIGN_UP':
            console.log(action.data);
            return {...action.data}
        default:
            return state
    }
}

export default signUpReducer;