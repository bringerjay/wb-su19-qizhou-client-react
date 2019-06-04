import React from 'react'
import {Link, withRouter} from "react-router-dom";

const CourseRow = ({course,deleteCourse}) =>
    <div className="row" key={course.id}>
        <Link to={`/course-editor/${course.id}`}>
            {course.title}</Link>
        <a className="offset-md-4"> me </a>
        <a className="offset-md-3"> 0644 </a>
        <button onClick={() => deleteCourse(course.id)} className="btn btn-danger float-right">Delete</button>
    </div>

export default withRouter(CourseRow);