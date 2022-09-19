import shortId from 'shortid';
import produce from 'immer';
import faker from 'faker';

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
    hasMorePosts: true,
    loadPostsLoading: false,
    loadPostsDone: false,
    loadPostsError: null,
    addPostLoadding: false,
    addPostDone: false,
    addPostErr: null,
    removePostLoadding: false,
    removePostDone: false,
    removePostErr: null,
    addCommentLoadding: false,
    addCommentDone: false,
    addCommentErr: null,
}


// export const getDemmuyPost = (number) => Array(number).fill().map(() => ({
//     id: shortId.generate(),
//     User: {
//         id: shortId.generate(),
//         nickname: faker.name.findName(),
//     },
//     content: faker.lorem.paragraph(),
//     Images: [{
//         src: faker.image.image(),
//     }],
//     Comments: [{
//         User: {
//             id: shortId.generate(),
//             nickname: faker.name.findName(),
//         },
//         content: faker.lorem.sentence(),
//     }],
// }))

export const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
export const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';

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

const reducer = (state = initialState, action) => {
    return produce(state, (draft) => {
        switch (action.type) {
            case LOAD_POSTS_REQUEST:
                draft.loadPostsLoading = true;
                draft.loadPostsDone = false;
                draft.loadPostsError = null;
                break;
            case LOAD_POSTS_SUCCESS:
                draft.loadPostsLoading = false;
                draft.loadPostsDone = true;
                draft.mainPosts = action.data.concat(draft.mainPosts);
                draft.hasMorePosts = draft.mainPosts.length < 50;
                break;
            case LOAD_POSTS_FAILURE:
                draft.loadPostsLoading = false;
                draft.loadPostsError = action.error;
                break;

            case ADD_POST_REQUEST:
                draft.addPostLoadding = true
                draft.addPostDone = false
                draft.addPostErr = null

                break;
            case ADD_POST_SUCCESS:
                draft.addPostLoadding = false
                draft.addPostDone = true
                draft.mainPosts.unshift(action.data)

                break;
            case ADD_POST_FAILURE:
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
                draft.addCommentLoadding = true
                draft.addCommentDone = false
                draft.addCommentErr = null
                break;
            case ADD_COMMENT_SUCCESS:
                const post = draft.mainPosts.find((item) => { return item.id === action.data.PostId})
                post.Comments.unshift(action.data)

                draft.addCommentLoadding = false
                draft.addCommentDone = true
                break;
            case ADD_COMMENT_FAILURE:
                draft.addCommentLoadding = false
                draft.addCommentErr = action.error

            default:
                return state
        }
    })
}

export default reducer