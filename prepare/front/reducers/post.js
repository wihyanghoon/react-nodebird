export const initialState = {
    mainPosts: [{
        id: 1,
        User: {
            id: 1,
            nickname: '제로초',
        },
        content: '첫번째 게실글 #해시태그 #익스프레스',
        Images: [{
            src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
        }, {
            src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg',
        }, {
            src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg',
        }],
        Comments: [{
            User: {
                nickname: 'nero',
            },
            content: '우와우와'
        }, {
            User: {
                nickname: 'wi',
            },
            content: '힘내자'
        }],
    }],
    imagePath: [],
    addPostLoadding: false,
    addPostDone: false,
    addPostErr: null,
}

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST'
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS'
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE'

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST'
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS'
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE'



export const addPost = (data) => {
    return {
        type: ADD_POST_REQUEST,
        data
    }
}

export const addComment = (data) => {
    return {
        type: ADD_COMMENT_REQUEST,
        data
    }
}

const dummyPost = {
    id: 2,
    content: '더미 데이터입니다.',
    User: {
        id: 1,
        nickname: '제로초',
    },
    Images: [],
    Comments: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST_REQUEST:
            return {
                ...state,
                addPostLoadding: true,
            }
        case ADD_COMMENT_SUCCESS:
            return {
                ...state,
                addPostLoadding: false,
                addPostDone: true,
                mainPosts: [PostDummy, ...state.mainPosts]
            }
        case ADD_COMMENT_FAILURE:
            return {
                ...state,
                addPostLoadding: false,
                addPostErr: action.err,
            }
        case ADD_COMMENT_REQUEST:
            return {
                ...state,
                addPostLoadding: true,
            }
        default:
            return state
    }

}

export default reducer