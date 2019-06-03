import connect from "react-redux/es/connect/connect";
import React from "react";
import AddComponent from '../components/AddComponent'

const stateToPropertyMapper = state => ({
    paramA: state.a,
    paramB: state.b
})

const dispathToPropertyMapper = dispatch => ({
    paramAchanged: (a) => dispatch({type: 'A_CHANGED', newA: a}),
    paramBchanged: (b) => dispatch({type: 'B_CHANGED', newB: b})
})

const AddContainer = connect(
    stateToPropertyMapper,
    dispathToPropertyMapper
)(AddComponent)

export default AddContainer