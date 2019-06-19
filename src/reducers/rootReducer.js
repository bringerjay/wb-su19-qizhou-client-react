import { combineReducers } from 'redux'
import courseReducer from './courseReducer'
import widgetReducer from './widgetReducer'

const rootReducer = combineReducers({
    courseReducer,
    widgetReducer
})
export default rootReducer;