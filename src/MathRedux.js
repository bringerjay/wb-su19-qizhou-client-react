import React from 'react'
import {createStore} from 'redux'
import {Provider, connect} from 'react-redux'
import mathReducer from './reducers/mathReducer'
import AddContainer from './containers/AddContainer'

const store = createStore(mathReducer)

const MathRedux = () =>
    <Provider store={store}>
        <AddContainer/>
    </Provider>

export default MathRedux