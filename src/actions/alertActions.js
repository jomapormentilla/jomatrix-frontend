export const renderAlert = (data) => {
    return (dispatch) => {
        dispatch({ type: 'RENDER_ALERT', data })
    }
}

export const clearAlert = () => {
    return (dispatch) => {
        dispatch({ type: 'CLEAR_ALERT' })
    }
}