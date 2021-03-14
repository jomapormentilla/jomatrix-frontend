const reducer = (state = {
    users: [],
    posts: []
}, action) => {
    switch (action.type) {
        case 'GET_USERS':
            return {...state, users: action.users}
        case 'GET_POSTS':
            return {...state, posts: action.posts}
        default:
            return state
    }
}

export default reducer