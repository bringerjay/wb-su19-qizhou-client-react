import React from 'react'
import {Link, withRouter} from "react-router-dom";

const CourseCard = ({course,deleteCourse}) =>
            <div className="card" styles={{width: '18rem'}}>
                <img className="card-img-top"
                     src="https://picsum.photos/300/200"/>
                <div className="card-body">
                    <h5 className="card-title">
                        {course.title}
                    </h5>
                    <p className="card-text">Card text.</p>
                    <a onClick={() => deleteCourse(course.id)}
                       className="btn btn-primary">Delete</a>
                </div>
            </div>
export default withRouter(CourseCard);