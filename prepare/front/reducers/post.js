export const initialState = {
    mainPosts: [{
        id :1,
        User: {
            id: 1,
            nickname: '제로초',
        },
        content: '첫번째 게실글 #해시태그 #익스프레스',
        Images: [{
            src:"https://www.zerocho.com/book/1",
        },{
            src:"https://www.zerocho.com/book/2",
        },{
            src:"https://www.zerocho.com/book/3",
        }],
        Comments: [{
            User:{
                nickname: 'nero',
            },
            contetnt: '우와우와'
        },{
            User:{
                nickname: 'wi',
            },
            contetnt: '힘내자'
        }],
    }],
    imagePath:[],
    postAdded: false
}

const ADD_POST = 'ADD_POST'

export const addPost = {
    type: ADD_POST
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
        case ADD_POST:
            return {
                ...state,
                mainPosts: [dummyPost, ...state.mainPosts],
                postAdded: true
            }
        default:
        return state
    }
    
}

export default reducer