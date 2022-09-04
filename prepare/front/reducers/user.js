export const initialState = {
    logInLoading: false, // 로그인 시도중
    logInDone: false,
    logInErr: null,
    logOutLoading: false, // 로그아웃 시도중
    logOutDone: false,
    logOutErr: null,
    signUpLoading: false, // 회원가입 시도중
    signUpDone: false,
    signUpErr: null,
    me: null,
    signUpData: {},
    loginData: {},
}

//액션 타입 변수 선언
export const LOG_IN_REQUEST = 'LOG_IN_REQUEST'
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE'

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST'
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS'
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE'


export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST'
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS'
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE'

export const FOLLOW_REQUEST = 'FOLLOW_REQUEST'
export const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS'
export const FOLLOW_FAILURE = 'FOLLOW_FAILURE'

export const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST'
export const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS'
export const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE'

//더미데이터

const UserDummy = (data) => {
    return {
        ...data,
        nickname: '향훈',
        id: 1,
        Posts: [],
        Followings: [],
        Followers: [],
    }
}

//로그인 액션

export const loginRequestAction = (data) => {
    return {
        type: LOG_IN_REQUEST,
        data,
    }
}

//로그아웃 액션

export const logoutRequestAction = (data) => {
    return {
        type: LOG_OUT_REQUEST,
        data,
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN_REQUEST:
            return {
                ...state,
                logInLoading: true,
            }
        case LOG_IN_SUCCESS:
            return {
                ...state,
                logInLoading: false,
                logInDone: true,
                me: UserDummy(action.data)
            }
        case LOG_IN_FAILURE:
            return {
                ...state,
                logInLoading: false,
                logInDone: false,
            }
        case LOG_OUT_REQUEST:
            return {
                ...state,
                logOutLoading: true,
            }
        case LOG_OUT_SUCCESS:
            return {
                ...state,
                logOutLoading: false,
                logOutDone: true,
                logInDone: false,
                me: null,
            }
        case LOG_OUT_FAILURE:
            return {
                ...state,
                logOutErr: action.error,
            }
        case SIGN_UP_REQUEST:
            return {
                ...state,
                signUpLoading: true,
            }
        case SIGN_UP_SUCCESS:
            return {
                ...state,
                signUpLoading: false,
                signUpDone: true,
            }
        case SIGN_UP_FAILURE:
            return {
                ...state,
                signUpErr: action.error
            }
        default:
            return state
    }
}

export default reducer