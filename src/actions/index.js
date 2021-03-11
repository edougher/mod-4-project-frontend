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

export const getMyAppts = (data) => {
    return {
        type: 'MY_APPTS',
        data: data
    }
}
