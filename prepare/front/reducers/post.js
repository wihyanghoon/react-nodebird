import shortId from 'shortid'

export const initialState = {
    mainPosts: [{
        id: 1,
        User: {
            id: 1,
            nickname: '제로초',
        },
        content: '첫번째 게실글 #해시태그 #익스프레스',
        Images: [{
            id: shortId.generate(),
            src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
        }, {
            id: shortId.generate(),
            src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg',
        }, {
            id: shortId.generate(),
            src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg',
        }],
        Comments: [{
            id: shortId.generate(),
            User: {
                id: shortId.generate(),
                nickname: 'nero',
            },
            content: '우와우와'
        }, {
            id: shortId.generate(),
            User: {
                id: shortId.generate(),
                nickname: 'wi',
            },
            content: '힘내자'
        }],
    }],
    imagePath: [],
    addPostLoadding: false,
    addPostDone: false,
    addPostErr: null,
    removePostLoadding: false,
    removePostDone: false,
    removePostErr: null,
    addComentLoadding: false,
    addComentDone: false,
    addComentErr: null,
}

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST'
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS'
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE'

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST'
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS'
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE'

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST'
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS'
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE'



export const addPostAction = (data) => {
    console.log(data)
    return {
        type: ADD_POST_REQUEST,
        data
    }
}

export const addCommentAction = (data) => {
    console.log(data)
    return {
        type: ADD_COMMENT_REQUEST,
        data
    }
}

const dummyPost = (data) => (
    {
        id: data.id,
        content: data.content,
        User: {
            id: 1,
            nickname: '제로초',
        },
        Images: [],
        Comments: [],
    }
)

const dummyComment = (data) => (
    {
        id: shortId.generate(),
        content: data,
        User: {
            id: 1,
            nickname: '제로초',
        },
    }
)

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST_REQUEST:
            return {
                ...state,
                addPostLoadding: true,
                addPostDone: false,
                addPostErr: null,
            }
        case ADD_POST_SUCCESS:
            return {
                ...state,
                addPostLoadding: false,
                addPostDone: true,
                mainPosts: [dummyPost(action.data), ...state.mainPosts]
            }
        case ADD_COMMENT_FAILURE:
            return {
                ...state,
                addPostLoadding: false,
                addPostErr: action.err,
            }
        case REMOVE_POST_REQUEST:
            return {
                ...state,
                removePostLoadding: true,
                removePostDone: false,
                removePostErr: null,
            }
        case REMOVE_POST_SUCCESS:
            return {
                ...state,
                removePostLoadding: false,
                removePostDone: true,
                mainPosts: state.mainPosts.filter((item) => item.id !== action.data)
            }
        case REMOVE_POST_FAILURE:
            return {
                ...state,
                removePostLoadding: false,
                removePostErr: action.err,
            }
        case ADD_COMMENT_REQUEST:
            return {
                ...state,
                addComentLoadding: true,
                addComentDone: false,
                addComentErr: null,
            }
        case ADD_COMMENT_SUCCESS:
            const postIndex = state.mainPosts.findIndex((item) => item.id === action.data.postId) // 보낸 개시물과 같은아이디 위치값 찾기
            const post = { ...state.mainPosts[postIndex] } // 위치값
            post.Comments = [dummyComment(action.data.content), ...post.Comments]// 해당 위치 코멘트
            const mainPosts = [...state.mainPosts];
            mainPosts[postIndex] = post;

            return {
                ...state,
                addComentLoadding: false,
                addCommentDone: true,
                mainPosts,
            }
        case ADD_COMMENT_FAILURE:
            return {
                ...state,
                addComentLoadding: false,
                addComentErr: action.error,
            }
        default:
            return state
    }

}

export default reducer