export const registerUserReducer = (state = {}, action) => {
    const { type, payload } = action;
    switch (type) {
        case "REGISTER_USER_REQUEST":
            return {
                ...state,
                loading: true
            }
        case "REGISTER_USER_SUCCESS":
            return {
                ...state,
                success: true,
                loading: false,
                error: false

            }
        case "REGISTER_USER_FAILED":
            return {
                ...state,
                error: payload.response.data.error,
                loading: false
            }
        default: return state;
    }
}

export const userLoginReducer = (state = {activeUser:null}, action) => {
    const { type, payload } = action;
    switch (type) {
        case "LOGIN_USER_REQUEST":
            return {
                ...state,
                loading: true
            }
        case "LOGIN_USER_SUCCESS":
            return {
                ...state,
                success: true,
                error: false,
                loading: false,
                activeUser: payload

            }
        case "LOGIN_USER_FAILED":
            return {
                ...state,
                success: false,
                error: payload.response.data.error,
                loading: false
            }
        case "LOGOUT_USER":
            return {
                ...state,
                success: true,
                error: false,
                loading: false,
                activeUser: null
            }
        case "LOGOUT_FAILED":
            return {
                ...state,
                error: "Logout failed"
            }
        default: return state;
    }
}



export const userUpdateReducer = (state = {}, action) => {
    const { type, payload } = action;
    switch (type) {
        case "UPDATE_USER_REQUEST":
            return {
                ...state,
                loading: true
            }
        case "UPDATE_USER_SUCCESS":
            return {
                ...state,
                success: true,
                loading: false,
                error: false

            }
        case "UPDATE_USER_FAILED":
            return {
                ...state,
                error: payload.response.data.error,
                loading: false
            }
        default: return state;
    }
}

export const getInfoOfAllUsersReducer=(state={users:[]}, action)=>{
    const { type, payload } = action;
    switch (type) {
        case "GET_USERSINFO_REQUEST":
            return {
                ...state,
                loading: true
            }
        case "GET_USERSINFO_SUCCESS":
            return {
                ...state,
                loading: false,
                users: payload

            }
        case "GET_USERSINFO_FAILED":
            return {
                ...state,
                error: payload.response.data.error,
                loading: false
            }
        default: return state;
    }
}


export const deleteSpecificUserReducer=(state={}, action)=>{
    const { type, payload } = action;
    switch (type) {
        case "DELETE_USERINFO_REQUEST":
            return {
                ...state,
                loading: true
            }
        case "DELETE_USERINFO_SUCCESS":
            return {
                ...state,
                success: true,
                loading: false,

            }
        case "DELETE_USERINFO_FAILED":
            return {
                ...state,
                error: payload.response.data.error,
                loading: false
            }
        default: return state;
    }
}