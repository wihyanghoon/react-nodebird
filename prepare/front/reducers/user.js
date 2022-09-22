import produce from 'immer'

export const initialState = {
    loadMyInfoLoading: false, // 로그인 불러오기 시도중
    loadMyInfoDone: false,
    loadMyInfoErr: null,
    logInLoading: false, // 로그인 시도중
    logInDone: false,
    logInErr: null,
    logOutLoading: false, // 로그아웃 시도중
    logOutDone: false,
    logOutErr: null,
    loadUserLoading: false, // 로그인 불러오기 시도중
    loadUserDone: false,
    loadUserErr: null,
    signUpLoading: false, // 회원가입 시도중
    signUpDone: false,
    signUpErr: null,
    changeNickLoading: false, // 닉네임변경 시도중
    changeNickDone: false,
    changeNickErr: null,
    followingLoading: false, // 팔로잉 시도중
    followingDone: false,
    followingErr: null,
    unfollowingLoading: false, // 팔로잉 제거
    unfollowingDone: false,
    unfollowingErr: null,
    loadfollowLoading: false, // 팔로우 목록 불러오기 시도중
    loadfollowDone: false,
    loadfollowErr: null,
    loadfollowingLoading: false, // 팔로잉 목록 불러오기 시도중
    loadfollowingDone: false,
    loadfollowingErr: null,
    removefollowerLoading: false, // 팔로워 제거 시도중
    removefollowerDone: false,
    removefollowerErr: null,
    me: null,
}

//액션 타입 변수 선언
export const LOAD_MYINFO_REQUEST = 'LOAD_MYINFO_REQUEST'
export const LOAD_MYINFO_SUCCESSS = 'LOAD_MYINFO_SUCCESSS'
export const LOAD_MYINFO_FAILURE = 'LOAD_MYINFO_FAILURE'

export const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST'
export const LOAD_USER_SUCCESSS = 'LOAD_USER_SUCCESSS'
export const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE'

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST'
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE'

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST'
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS'
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE'


export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST'
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS'
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE'

export const CHANGE_NICK_REQUEST = 'CHANGE_NICK_REQUEST'
export const CHANGE_NICK_SUCCESS = 'CHANGE_NICK_SUCCESS'
export const CHANGE_NICK_FAILURE = 'CHANGE_NICK_FAILURE'

export const FOLLOW_REQUEST = 'FOLLOW_REQUEST'
export const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS'
export const FOLLOW_FAILURE = 'FOLLOW_FAILURE'

export const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST'
export const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS'
export const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE'

export const LOAD_FOLLOWER_REQUEST = 'LOAD_FOLLOWER_REQUEST'
export const LOAD_FOLLOWER_SUCCESS = 'LOAD_FOLLOWER_SUCCESS'
export const LOAD_FOLLOWER_FAILURE = 'LOAD_FOLLOWER_FAILURE'

export const REMOVE_FOLLOWER_REQUEST = 'REMOVE_FOLLOWER_REQUEST'
export const REMOVE_FOLLOWER_SUCCESS = 'REMOVE_FOLLOWER_SUCCESS'
export const REMOVE_FOLLOWER_FAILURE = 'REMOVE_FOLLOWER_FAILURE'

export const LOAD_FOLLWING_REQUEST = 'LOAD_FOLLWING_REQUEST'
export const LOAD_FOLLWING_SUCESSS = 'LOAD_FOLLWING_SUCESSS'
export const LOAD_FOLLWING_FAILURE = 'LOAD_FOLLWING_FAILURE'

export const ADD_POST_TO_ME = 'ADD_POST_TO_ME'
export const REMOVE_POST_TO_ME = 'REMOVE_POST_TO_ME'

//더미데이터

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
    return produce(state, (draft) => {
        switch (action.type) {
            case LOAD_MYINFO_REQUEST:
                draft.loadMyInfoLoading = true
                draft.loadMyInfoDone = false
                draft.loadMyInfoErr = null
                break;
            case LOAD_MYINFO_SUCCESSS:
                draft.loadMyInfoLoading = false
                draft.loadMyInfoDone = true
                draft.me = action.data
                break;
            case LOAD_MYINFO_FAILURE:
                draft.loadMyInfoLoading = false
                draft.loadMyInfoErr = action.err
                break;
            case LOG_IN_REQUEST:
                draft.logInLoading = true
                draft.logInDone = false
                draft.logInErr = null
                break;
            case LOG_IN_SUCCESS:
                draft.logInLoading = false
                draft.logInDone = true
                draft.me = action.data
                break;
            case LOG_IN_FAILURE:
                draft.logInLoading = false
                draft.logInErr = action.error
                break;
            case LOG_OUT_REQUEST:
                draft.logOutLoading = true
                draft.logOutDone = false
                draft.logOutErr = null
                break;
            case LOG_OUT_SUCCESS:
                draft.logOutLoading = false
                draft.logOutDone = true
                draft.me = null
                break;
            case LOG_OUT_FAILURE:
                draft.logOutLoading = false
                draft.logOutErr = action.error
                break;
            case LOAD_USER_REQUEST:
                draft.loadUserLoading = true
                draft.loadUserDone = false
                draft.loadUserErr = null
                break;
            case LOAD_USER_SUCCESSS:
                draft.loadUserLoading = false
                draft.loadUserDone = true
                draft.me = action.data
                break;
            case LOAD_USER_FAILURE:
                draft.loadUserLoading = false
                draft.loadUserErr = action.error
                break;
            case SIGN_UP_REQUEST:
                draft.signUpLoading = true
                draft.signUpDone = false
                draft.signUpErr = null
                break;
            case SIGN_UP_SUCCESS:
                draft.signUpLoading = false
                draft.signUpDone = true
                break;
            case SIGN_UP_FAILURE:
                draft.signUpLoading = false
                draft.signUpErr = action.error
                break;
            case CHANGE_NICK_REQUEST:
                draft.changeNickLoading = true
                draft.changeNickDone = false
                draft.changeNickErr = null
                break;
            case CHANGE_NICK_SUCCESS:
                draft.changeNickLoading = false
                draft.changeNickDone = true
                draft.me.nickname = action.data.nickname
                break;
            case CHANGE_NICK_FAILURE:
                draft.changeNickLoading = false
                draft.changeNickErr = action.error
                break;
            case FOLLOW_REQUEST:
                draft.followingLoading = true
                draft.followingDone = false
                draft.followingErr = null
                break;
            case FOLLOW_SUCCESS:
                draft.followingLoading = false
                draft.followingDone = true
                draft.me.Followings.push({ id: action.data.userId })
                break;
            case FOLLOW_FAILURE:
                draft.followingLoading = false
                draft.followingDone = action.error
                break;
            case UNFOLLOW_REQUEST:
                draft.unfollowingLoading = true
                draft.unfollowingDone = false
                draft.unfollowingErr = null
                break;
            case UNFOLLOW_SUCCESS:
                draft.unfollowingLoading = false
                draft.unfollowingDone = true
                draft.me.Followings = draft.me.Followings.filter((item) => item.id !== action.data.userId)
                break;
            case UNFOLLOW_FAILURE:
                draft.unfollowingLoading = false
                draft.unfollowingErr = action.error
                break;
            case LOAD_FOLLOWER_REQUEST:
                draft.loadfollowLoading = true
                draft.loadfollowDone = false
                draft.loadfollowErr = null
                break;
            case LOAD_FOLLOWER_SUCCESS:
                draft.loadfollowLoading = false
                draft.loadfollowDone = true
                draft.me.Followers = action.data
                break;
            case LOAD_FOLLOWER_FAILURE:
                draft.loadfollowLoading = false
                draft.loadfollowErr = action.err
                break;
            case REMOVE_FOLLOWER_REQUEST:
                draft.removefollowerLoading = true
                draft.removefollowerDone = false
                draft.removefollowerErr = null
                break;
            case REMOVE_FOLLOWER_SUCCESS:
                draft.removefollowerLoading = false
                draft.removefollowerDone = true
                draft.me.Followers = draft.me.Followers.filter((item)=> item.id !== action.data.userId)
                break;
            case REMOVE_FOLLOWER_FAILURE:
                draft.removefollowerLoading = false
                draft.removefollowerErr = action.err
                break;
            case LOAD_FOLLWING_REQUEST:
                draft.loadfollowingLoading = true
                draft.loadfollowingDone = false
                draft.loadfollowingErr = null
                break;
            case LOAD_FOLLWING_SUCESSS:
                draft.loadfollowingLoading = false
                draft.loadfollowingDone = true
                draft.me.Followings = action.data
                break;
            case LOAD_FOLLWING_FAILURE:
                draft.loadfollowingLoading = false
                draft.loadfollowingErr = action.err
                break;
            case ADD_POST_TO_ME:
                console.log(action.data)
                draft.me.Posts.unshift({ id: action.data })
                break;
            case REMOVE_POST_TO_ME:
                console.log(action.data)
                draft.me.Posts = draft.me.Posts.filter((item) => item.id !== action.data)
                break;
            default:
                return state
        }
    })
}

export default reducer