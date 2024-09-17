export default amountReducer = (amountstate = 0, action) => {
    if (action.type == 'deposit') {
        return amountstate + action.payload;
    } else if (action.type == 'withdraw') {
        return amountstate - action.payload;
    } else {
        return amountstate;
    }
}
//action.payload includes new data / amount which will be added to the previous state of the amount i.e. will be added to (amountstate) which is our state