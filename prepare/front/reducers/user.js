export const initialState = {
    isLoggedIn: false,
    me: null,
    signUpData: {},
    loginData: {},
}

//로그인 액션

export const loginRequestAction = (data) => {
    return {
        type: 'LOG_IN_REQUSET',
        data,
    }
}

export const loginSuccessAction = (data) => {
    return {
        type: 'LOG_IN_SUCCESS',
        data,
    }
}

export const loginFailureAction = (data) => {
    return {
        type: 'LOG_IN_FAILURE',
        data,
    }
}

//로그아웃 액션

export const logoutRequestAction = (data) => {
    return {
        type: 'LOG_OUT_REQUSET',
        data,
    }
}

export const logoutSuccessAction = (data) => {
    return {
        type: 'LOG_OUT_SUCCESS',
        data,
    }
}

export const logoutFailureAction = (data) => {
    console.log(data)
    return {
        type: 'LOG_OUT_FAILURE',
        data,
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOG_IN_REQUSET':
            return {
                ...state,
                isLoggingIn: true,
                me: action.data
            }
        case 'LOG_IN_SUCCESS':
            return {
                ...state,
                isLoggingIn: false,
                isLoggedIn: true,
                me: action.data
            }
        case 'LOG_IN_FAILURE':
            return {
                ...state,
                isLoggingIn: false,
                isLoggedIn: false,
            }
        case 'LOG_OUT_REQUSET':
            return {
                ...state,
                isLoggedIn: false,
                me: null,
            }
        case 'LOG_OUT_SUCCESS':
            return {
                ...state,
                isLoggedIn: false,
                me: null,
            }
        case 'LOG_OUT_FAILURE':
            return {
                ...state,
                isLoggedIn: false,
                me: null,
            }
        default:
            return state
    }
}

export default reducer