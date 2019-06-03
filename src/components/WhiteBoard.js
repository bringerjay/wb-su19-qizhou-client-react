import React from 'react'
import CourseTable from "./CourseTable"
import {BrowserRouter as Router, Link, Route, withRouter} from 'react-router-dom'
import CourseEditor from "./CourseEditor";
export default class Whiteboard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
                <Router>
                    <Route
                        exact path="/"  component={withRouter(CourseTable)}
                />
                    <Route
                        exact path="/course-editor"
                        render={() => <CourseEditor/>}
                    />
            </Router>
    )
    }
}
