import axios from 'axios'

export const placeOrder = (order) => async (dispatch) => {
    dispatch({type:'PLACE_ORDER_REQUEST'})
    // const currentUser = getState().loginUserReducer.currentUser
    // const cartItems = getState().cartReducer.cartItems
    try {
        const responses = await axios.post('/api/orders/placeorder',order)
        dispatch({type:'PLACE_ORDER_SUCCESS'})
        console.log(responses)
    } catch (error) {
        dispatch({type:'PLACE_ORDER_FAIL'})
        console.log(error)
    }
}