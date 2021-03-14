const user = {
    currentUser: {},
    appointments: {}
}


const currentUserReducer = (state=user, action) => {
    let user = state;
    switch(action.type){
        case 'SIGN_UP':
            user.currentUser.id = action.data.id
            user.currentUser.username = action.data.username
            user.appointments = action.data.appointments
            return user
        case 'NEW_APPT_CREATED':
            user.appointments.push(action.data)
            return user
        case 'EDIT_APPT_SUCCESS':
            const objIndex = user.appointments.findIndex(obj => obj.id === action.data.id)
            user.appointments[objIndex] = action.data
            return user
        case 'DELETE_APPT_SUCCESS':
            user.appointments.filter(appt => appt.id !== action.data.id)
            return user
        default:
            return state

    }
}

export default currentUserReducer;