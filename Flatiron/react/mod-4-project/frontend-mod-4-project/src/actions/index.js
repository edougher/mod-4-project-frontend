export const addUserSuccess = (data) => {
    return {
        type: 'SIGN_UP',
        data: data
    }
}

export const createAppointment = (data) => {
    return {
        type: 'CREATE_APPT',
        data: data
    }
}