const reducer = (state = {
    users: [],
    posts: [],
    comments: []
}, action) => {
    switch (action.type) {
        case 'GET_USERS':
            return {...state, users: action.users}
        case 'GET_POSTS':
            return {...state, posts: action.posts}
        case 'GET_COMMENTS':
            return {...state, comments: action.comments}
        default:
            return state
    }
}

export default reducer