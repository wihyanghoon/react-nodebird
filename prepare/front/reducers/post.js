import shortId from 'shortid'
import produce from 'immer'

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
    return produce(state, (draft) => {
        switch (action.type) {
            case ADD_POST_REQUEST:
                draft.addPostLoadding = true
                draft.addPostDone = false
                draft.addPostErr = null

                break;
            case ADD_POST_SUCCESS:
                draft.addPostLoadding = false
                draft.addPostDone = true
                draft.mainPosts.unshift(dummyPost(action.data))

                break;
            case ADD_COMMENT_FAILURE:
                draft.addPostLoadding = false
                draft.addPostErr = action.err

                break;
            case REMOVE_POST_REQUEST:
                draft.removePostLoadding = true
                draft.removePostDone = false
                draft.removePostErr = null
                break;

            case REMOVE_POST_SUCCESS:
                draft.removePostLoadding = false
                draft.removePostDone = true
                draft.mainPosts = state.mainPosts.filter((item) => item.id !== action.data)
                break;
            case REMOVE_POST_FAILURE:
                draft.removePostLoadding = false
                draft.removePostErr = action.err
                break;
            case ADD_COMMENT_REQUEST:
                draft.addComentLoadding = true
                draft.addComentDone = false
                draft.addComentErr = null
                break;
            case ADD_COMMENT_SUCCESS:
                const post = draft.find((item) => item.id === action.data.postId)
                post.Comments.unshift((dummyComment(action.data.content)))

                draft.addComentLoadding = false
                draft.addCommentDone = true
                draft.mainPosts
                break;
            case ADD_COMMENT_FAILURE:
                draft.addComentLoadding = false
                draft.addComentErr = action.error

            default:
                return state
        }
    })
}

export default reducer