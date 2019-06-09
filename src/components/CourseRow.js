import React from 'react'
import {BrowserRouter as Router, Link} from "react-router-dom";
import {faPencilAlt, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Provider from "react-redux/es/components/Provider";
export default class CourseRow extends React.Component{
    constructor(props){
        super(props)
        }

    render(){
    return(
        <Router>
        <li className="list-group-item" key={this.props.course.id}>
            <div className="row">
            <Link className="offset-1 col-4"
                  to={`/course-editor/${this.props.course.id}`}
            >{this.props.course.title}</Link>
            <a className="offset-2 col-1"> me </a>
            <a className="offset-2 col-1"> 06:44PM </a>
                <span className="course-actions float-right">
                    <FontAwesomeIcon icon={faPencilAlt} type="button"
                                     className="icons update-icon fa-2x"
                                     onClick={() => this.props.updateCourse(this.props.course.id,this.props.newcourse.title)}/>
                <FontAwesomeIcon icon={faTrashAlt} type="button"
                                 className="icons fa-2x"
                                 onClick={() => this.props.deleteCourse(this.props.course.id)}/>
                </span>
        </div>
            </li>
        </Router>
    )
    }
}
