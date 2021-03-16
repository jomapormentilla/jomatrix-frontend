export const usersReducer = (state=[], action) => {
    let idx
    switch (action.type) {
        case 'GET_USERS':
            return [...state, action.users]

        default:
            return state
    }
}