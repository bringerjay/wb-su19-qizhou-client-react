import React from "react";
import {BrowserRouter as Router, Route, withRouter} from 'react-router-dom'
import Provider from "react-redux/es/components/Provider";
import {createStore} from 'redux'
import service from '../services/CourseService'
import CourseTable from "./CourseTable";
import CourseEditor from "./CourseEditor";
import widgetReducer from "../reducers/widgetReducer";
const store = createStore(widgetReducer)

export default class HomePage extends React.Component{
    constructor(props) {
        super(props)
        this.courseService = service.getInstance()
        this.state = {
            courses: this.courseService.findAllCourses()
        }
    }
    render(){
        return(
            <Provider store={store}>
                <Router>
                    <switch>
                    <Route exact path={"/"}
                           component={withRouter(CourseTable)}/>
                    <Route path={"/course-editor/:courseId"}
                           component={withRouter(CourseEditor)}/>
                    </switch>
                </Router>
            </Provider>
        )
    }
}


