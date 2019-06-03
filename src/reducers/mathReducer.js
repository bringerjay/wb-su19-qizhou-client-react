const initialState = {a: 2, b: 3}
const reducer = (state = initialState, action) => {
    // alert('reducer')
    console.log(action)
    if(action.type == "A_CHANGED") {
        return {a: parseInt(action.newA), b: state.b}
    } else if(action.type == "B_CHANGED") {
        return {b: parseInt(action.newB), a: state.a}
    }
    return state
}
export default reducer