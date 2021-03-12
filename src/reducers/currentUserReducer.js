const currentUserReducer = (state={}, action) => {
    let currentUser;
    switch(action.type){
        case 'SIGN_UP':
            currentUser = action.data
            return currentUser
        case 'NEW_APPT_CREATED':
            //debugger
            return currentUser = {...state, appointments: action.data}
        case 'EDIT_APPT_SUCCESS':
            const objIndex = state.appointments.findIndex(obj => obj.id === action.data.id)
            state.appointments[objIndex] = action.data
            currentUser = {...state}
            //currentUser.appointments
            debugger
            return currentUser
        default:
            return state
    }
}

export default currentUserReducer;