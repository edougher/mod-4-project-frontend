const currentUserReducer = (state={}, action) => {
    let currentUser;
    switch(action.type){
        case 'SIGN_UP':
            currentUser = action.data
            return currentUser
        case 'NEW_APPT_CREATED':
            let newAppts = state.appointments.push(action.data) 
            //return Object.assign({}, state, { appointments: action.data})
            currentUser = {...state, appointments: newAppts}
            debugger 
            return currentUser
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