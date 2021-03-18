// import { combineReducers } from 'redux'
// import { usersReducer } from './usersReducer'
// import { postsReducer } from './postsReducer'
// import { commentsReducer } from './commentsReducer'

// const reducer = combineReducers({
//     users: usersReducer,
//     posts: postsReducer,
//     comments: commentsReducer,
// })

const reducer = (state = {
    users: [],
    posts: [],
    comments: [],
    loading: false,
    loggedIn: false,
    currentUser: null
}, action) => {
    switch (action.type) {
        case 'GET_USERS':
            return { ...state, users: action.users, loading: false }

        case 'GET_POSTS':
            return { ...state, posts: action.posts, loading: false }

        case 'GET_COMMENTS':
            return { ...state, comments: action.comments, loading: false }

        case 'LOADING':
            return { ...state, loading: action.loading }
            
        case 'LOGIN_USER':
            return { ...state, loggedIn: action.loggedIn, currentUser: action.data }
        
        case 'LOGOUT_USER':
            return { ...state, loggedIn: false, currentUser: null }

        default:
            return state
    }
}

export default reducer