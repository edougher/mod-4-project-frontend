const createApptForm = (state={}, action) => {
    switch(action.type){
        case 'CREATE_APPT':
            console.log(action.data);
            return {...action.data}
        default:
            return state
    }
}

export default createApptForm;