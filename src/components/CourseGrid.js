import React from 'react';
import CourseCard from './CourseCard'
import {Link, withRouter} from "react-router-dom";
import 'jquery/dist/jquery.min.js';
import "bootstrap/js/src/collapse.js";
import 'bootstrap/dist/css/bootstrap.min.css'
export default class CourseGrid extends React.Component {
        constructor(props) {
                super(props)
        }
        render() {
                return (
                    <div>
                                    <h1>Course Grid</h1>
                                    <Link to="/">Home</Link>
                                    <Link to="/course-editor">editor</Link>
                                    <div className="row">
                                            {
                                                    this.props.courses.map((course) =>
                                                        <CourseCard course={course}
                                                                    deleteCourse={this.props.deleteCourse}/>)
                                            }
                                    </div>
                            </div>
                    )
        }
}

