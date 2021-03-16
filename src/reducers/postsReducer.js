export const postsReducer = (state=[], action) => {
    let idx
    switch (action.type) {
        case 'GET_POSTS':
            return [...state, action.posts]
        
        default:
            return state
    }
}