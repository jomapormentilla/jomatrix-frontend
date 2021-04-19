export const renderAlert = (data) => {
    return (dispatch) => {
        dispatch({ type: 'RENDER_ALERT', data: { message: data, type: 'success' } })
    }
}

export const clearAlert = () => {
    return (dispatch) => {
        dispatch({ type: 'CLEAR_ALERT' })
    }
}