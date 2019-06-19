import React from "react";
import {BrowserRouter as Router, Route, withRouter} from 'react-router-dom'
import Provider from "react-redux/es/components/Provider";
import {createStore} from 'redux'
import CourseEditor from "./CourseEditor";
import rootReducer from "../reducers/rootReducer";
import CourseTableContainer from "../containers/CourseTableContainer";
const store = createStore(rootReducer)
console.log(store.getState())
export default class HomePage extends React.Component{
    constructor(props) {
        super(props)
    }
    render(){
        return(
            <Provider store={store}>
                <Router>
                  <Route exact path={"/"}
                           component={withRouter(CourseTableContainer)}/>
                    <Route path={"/course-editor/:courseId"}
                           component={withRouter(CourseEditor)}/>
                </Router>
            </Provider>
        )
    }
}


