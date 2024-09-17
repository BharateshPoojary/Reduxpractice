export const depositMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'deposit',
            payload: amount
        })
    }
}
export const withdrawMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'withdraw',
            payload: amount
        })
    }
}
//With amount state all this actions can be done
//dispatch is one function which is dipatching each function