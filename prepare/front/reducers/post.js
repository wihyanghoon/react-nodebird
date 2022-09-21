import shortId from 'shortid';
import produce from 'immer';
import faker from 'faker';
import { LIKE_FAILURE, LIKE_REQUEST, LIKE_SUCCESS } from './user';

export const initialState = {
    mainPosts: [],
    imagePath: [],
    hasMorePosts: true,
    loadPostsLoading: false,
    loadPostsDone: false,
    loadPostsError: null,
    likeLoading: false,
    likeDone: false,
    likeError: null,
    unLikeLoading: false,
    unLikeDone: false,
    unLikeError: null,
    addPostLoadding: false,
    addPostDone: false,
    addPostErr: null,
    removePostLoadding: false,
    removePostDone: false,
    removePostErr: null,
    addCommentLoadding: false,
    addCommentDone: false,
    addCommentErr: null,
    upLoadImagesLoadding: false,
    upLoadImagesDone: false,
    upLoadImagesErr: null,
    retweetLoadding: false,
    retweetDone: false,
    retweetErr: null,
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
export const REMOVE_IMAGES_SUCSESS = 'REMOVE_IMAGES_SUCSESS';

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

export const LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
export const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
export const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';

export const UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';
export const UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
export const UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';

export const UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
export const UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
export const UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';

export const RETWEET_REQUEST = 'RETWEET_REQUEST'
export const RETWEET_SUCCESS = 'RETWEET_SUCCESS'
export const RETWEET_FAILURE = 'RETWEET_FAILURE'

export const addPostAction = (data) => {
    return {
        type: ADD_POST_REQUEST,
        data
    }
}

export const addCommentAction = (data) => {
    return {
        type: ADD_COMMENT_REQUEST,
        data
    }
}

const reducer = (state = initialState, action) => {
    return produce(state, (draft) => {
        switch (action.type) {
            case RETWEET_REQUEST:
                draft.retweetLoadding = true
                draft.retweetDone = false
                draft.retweetErr = null
                break;
            case RETWEET_SUCCESS:
                draft.retweetLoadding = false
                draft.retweetDone = true
                break;
            case RETWEET_FAILURE:
                draft.retweetLoadding = false
                draft.retweetErr = action.err
                break;
            case REMOVE_IMAGES_SUCSESS:
                console.log(action.data)
                draft.imagePath = draft.imagePath.filter((item, index) => index !== action.data)
                break;
            case LOAD_POSTS_REQUEST:
                draft.loadPostsLoading = true;
                draft.loadPostsDone = false;
                draft.loadPostsError = null;
                break;
            case LOAD_POSTS_SUCCESS:
                draft.loadPostsLoading = false;
                draft.loadPostsDone = true;
                draft.mainPosts = draft.mainPosts.concat(action.data);
                draft.hasMorePosts = draft.mainPosts.length === 10;
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
                draft.imagePath = []
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
                draft.mainPosts = state.mainPosts.filter((item) => item.id !== action.data.PostId)
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
                const post = draft.mainPosts.find((item) => { return item.id === action.data.PostId })
                post.Comments.unshift(action.data)

                draft.addCommentLoadding = false
                draft.addCommentDone = true
                break;

            case ADD_COMMENT_FAILURE:
                draft.addCommentLoadding = false
                draft.addCommentErr = action.error

            case LIKE_POST_REQUEST:
                draft.likeLoading = true
                draft.likeDone = false
                draft.likeError = null
                break;

            case LIKE_POST_SUCCESS: {
                draft.likeLoading = false
                draft.likeDone = true
                const post = draft.mainPosts.find((item) => item.id === action.data.PostId)
                post.Likers.push({id: action.data.UserId})
                break;
            }
            case LIKE_POST_FAILURE:
                draft.unLikeLoading = false
                draft.unLikeError = true

            case UNLIKE_POST_REQUEST:
                draft.unLikeLoading = true
                draft.unLikeDone = false
                draft.unLikeError = null
                break;

            case UNLIKE_POST_SUCCESS: {
                draft.unLikeLoading = false
                draft.unLikeDone = true
                const post = draft.mainPosts.find((v) => v.id === action.data.PostId);
                post.Likers = post.Likers.filter((v) => v.id !== action.data.UserId);
                break;
            }
            case UNLIKE_POST_FAILURE:
                draft.unLikeLoading = false
                draft.unLikeDone = true
                break;
            case  UPLOAD_IMAGES_REQUEST:
                draft.upLoadImagesLoadding = true
                draft.upLoadImagesDone = false
                draft.upLoadImagesErr = null
                break;
            case UPLOAD_IMAGES_SUCCESS:
                draft.upLoadImagesLoadding = true
                draft.upLoadImagesDone = false
                draft.imagePath = action.data
                break;
            case UPLOAD_IMAGES_FAILURE:
                draft.upLoadImagesLoadding = false
                draft.upLoadImagesErr = action.error
                break;
            default:
                return state
        }
    })
}

export default reducer