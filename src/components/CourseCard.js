import React from 'react'
import {Link, withRouter} from "react-router-dom";

const CourseCard = ({course,deleteCourse}) =>
            <div className="card" styles={{width: '18rem'}}>
                <img className="card-img-top"
                     src="https://picsum.photos/300/200"/>
                <div className="card-body">
                    <Link to={`/course-editor/${course.id}`}><h5 className="card-title">
                        {course.title}
                    </h5></Link>
                    <p className="card-text">Card text for {course.title}.</p>
                    <button onClick={() => deleteCourse(course.id)}
                       className="btn btn-primary">Delete</button>
                </div>
            </div>
export default withRouter(CourseCard);