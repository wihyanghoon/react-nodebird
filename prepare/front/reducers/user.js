export const initialState = {
    isLoggingIn: false, // 로그인 시도중
    isLoggedIn: false,
    isLoggingOut: false, // 로그아웃 시도중
    me: null,
    signUpData: {},
    loginData: {},
}

//로그인 액션

export const loginRequestAction = (data) => {
    console.log('reducer start')
    return {
        type: 'LOG_IN_REQUEST',
        data,
    }
}

//로그아웃 액션

export const logoutRequestAction = (data) => {
    return {
        type: 'LOG_OUT_REQUEST',
        data,
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOG_IN_REQUEST':
            return {
                ...state,
                isLoggingIn: true,
            }
        case 'LOG_IN_SUCCESS':
            return {
                ...state,
                isLoggingIn: false,
                isLoggedIn: true,
                me: { ...action.data, nickname: 'wihyanghoon'}
            }
        case 'LOG_IN_FAILURE':
            return {
                ...state,
                isLoggingIn: false,
                isLoggedIn: false,
            }
        case 'LOG_OUT_REQUEST':
            return {
                ...state,
                isLoggingOut: true,
            }
        case 'LOG_OUT_SUCCESS':
            return {
                ...state,
                isLoggingOut: false,
                isLoggedIn: false,
                me: null,
            }
        case 'LOG_OUT_FAILURE':
            return {
                ...state,
                isLoggingOut: false,
            }
        default:
            return state
    }
}

export default reducer