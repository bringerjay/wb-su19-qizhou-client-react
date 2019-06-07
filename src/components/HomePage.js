import React from "react";
import {BrowserRouter as Router, Link, Route, withRouter} from 'react-router-dom'
import CourseEditor from "./CourseEditor";
import CourseGrid from "./CourseGrid";
import CourseTable from "./CourseTable";
import courses from "./courses"
import Provider from "react-redux/es/components/Provider";
import {createStore} from 'redux'
import widgetReducer from "../reducers/widgetReducer";

const store = createStore(widgetReducer)
const HomePage = () => (
    <Provider store={store}>
        <Router>
                <Route exact path="/"
                       component={withRouter(CourseTable)}
                />
            <Route path="/course-grid"
                   component={withRouter(CourseGrid)}
            />
            <Route path={"/course-editor/:courseId"} render={() => <CourseEditor
            courses={courses}/>}
            />
        </Router>
    </Provider>
);

export default HomePage
