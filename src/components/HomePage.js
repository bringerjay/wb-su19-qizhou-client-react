import React from "react";
import {BrowserRouter as Router, Link, Route, withRouter} from 'react-router-dom'
import Whiteboard from "./WhiteBoard";
import CourseEditor from "./CourseEditor";
import CourseGrid from "./CourseGrid";
import CourseTable from "./CourseTable";
const HomePage = () => (

        <Router>
                <Route exact path="/"
                       component={withRouter(CourseTable)}
                />
            <Route path="/course-grid"
                   component={withRouter(CourseGrid)}
            />
                <Route path="/course-editor" component={withRouter(CourseEditor)}
                />
        </Router>

);

export default HomePage
