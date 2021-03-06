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
    currentUser: null,
    stopInfiniteScroll: false,
    alert: null

}, action) => {
    let idx
    switch (action.type) {
        case 'GET_USERS':
            return { ...state, users: action.users, loading: false }

        case 'CREATE_USER':
            return { ...state, loggedIn: true, currentUser: action.user, loading: false }

        case 'UPDATE_USER':
            idx = state.users.findIndex(user => user.id === action.data.id)
            return { ...state, users: [...state.users.slice(0, idx), action.data, ...state.users.slice(idx + 1)], currentUser: action.data, loading: false }

        case 'LOGIN_USER':
            return { ...state, loggedIn: action.loggedIn, currentUser: action.data, loading: false }
        
        case 'LOGOUT_USER':
            return { ...state, loggedIn: false, currentUser: null, loading: false }

        case 'GET_POSTS':
            return { ...state, posts: action.posts, loading: false }

        case 'MORE_POSTS':
            return { ...state, posts: [...state.posts.concat(action.posts)], loading: false }

        case 'CREATE_POST':
            return { ...state, posts: [action.data, ...state.posts] }

        case 'LIKE_POST':
            idx = state.posts.findIndex(p => p.id === action.data.id)
            return { ...state, posts: [...state.posts.slice(0, idx), action.data, ...state.posts.slice(idx + 1)], loading: false }

        case 'DELETE_POST':
            idx = state.posts.findIndex(p => p.id === action.data.id)
            return { ...state, posts: [...state.posts.slice(0, idx), ...state.posts.slice(idx + 1)] }

        case 'GET_COMMENTS':
            return { ...state, comments: action.comments, loading: false }

        case 'CREATE_COMMENT':
            idx = state.posts.findIndex(p => p.id === action.data.id)
            return { ...state, posts: [...state.posts.slice(0, idx), action.data, ...state.posts.slice(idx + 1)], loading: false, comments: [...state.comments, action.data.comments[action.data.comments.length - 1]] }

        case 'LIKE_COMMENT':
            idx = state.comments.findIndex(c => c.id === action.data.id)
            return { ...state, comments: [...state.comments.slice(0, idx), action.data, ...state.comments.slice(idx + 1)], loading: false }

        case 'LOADING':
            return { ...state, loading: true }

        case 'STOP_LOADING':
            return { ...state, loading: false }

        case 'STOP_INFINITE_SCROLL':
            return { ...state, stopInfiniteScroll: true }

        case 'RENDER_ALERT':
            return { ...state, alert: action.data.message, alertType: action.data.type }

        case 'CLEAR_ALERT':
            return { ...state, alert: null, alertType: null }

        default:
            return state
    }
}

export default reducer