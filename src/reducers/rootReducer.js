const reducer = (state = {
    users: [],
    posts: [],
    comments: [],
    loading: false,
    loggedIn: false,
    current_user: null,
    token: null
}, action) => {
    switch (action.type) {
        case 'GET_USERS':
            return { ...state, users: action.users }
        case 'GET_POSTS':
            return { ...state, posts: action.posts }
        case 'GET_COMMENTS':
            return { ...state, comments: action.comments }
        case 'LOGIN_USER':
            return { ...state, loggedIn: action.loggedIn, token: action.jwt, current_user: action.data.user }
        default:
            return state
    }
}

export default reducer