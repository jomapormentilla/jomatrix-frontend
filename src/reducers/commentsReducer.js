export const commentsReducer = (state=[], action) => {
    let idx
    switch (action.type) {
        case 'GET_COMMENTS':
            return [...state, action.comments]
        
        default:
            return state
    }
}