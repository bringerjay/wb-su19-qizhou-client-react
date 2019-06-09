import React from 'react';
import 'jquery/dist/jquery.min.js';
import "bootstrap/js/src/collapse.js";
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Link, withRouter} from "react-router-dom";
import service from "../services/CourseService";
import CourseGrid from "./CourseGrid";
import CourseList from "./CourseList";
import '../styles/CourseTable.css'
import {faPlusCircle, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
const courseService = service.getInstance();
export default class CourseTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: true,
            style: "list view",
            course: {
                id: -1,
                title: 'New Course'
            },
            courses: courseService.findAllCourses()}
    }
    createCourse = () => {
        // this.state.module.push()
        console.log('creating a course' + this.state.course.title )
        this.state.course.id = (new Date()).getTime()
        this.setState({courses: [...this.state.courses,courseService.createCourse(this.state.course)]
        })}
    titleChanged = (event) => {
        console.log(event.target.value)
        this.setState({
            course:{
                title: event.target.value,
                id: (new Date()).getTime()
            }
        })
            }
    deleteCourse = (id) => {
        console.log('deleteCourse ' + id)
        this.setState({
            courses: courseService.deleteCourseById(id)
        })
        console.log(courseService.findAllCourses())
    }
    onToggle = () => {
        if (this.state.style === "grid view")
            this.setState({ style: "list view"})
        else {
            this.setState({ style: "grid view" })
        }
        this.setState({ list: !this.state.list })
    }
    updateCourse = (id,newtitle) =>{
        this.setState({
            courses: courseService.updateCourse(id,newtitle)
        })
    }
    render() {
        return (
            <Router>
            <div>
                <nav className="navbar-dark bg-dark">
                    <a className="navbar-brand text-center" href="#"
                    >Course Manager</a>
                    <button type="button" className="btn btn-success"
                    onClick={this.onToggle}>{this.state.style}</button>
                    <form className="nav-item form-inline float-lg-right" style={{
                        marginTop: '30px'
                    }}>
                        <input
                            onChange={this.titleChanged}
                            defaultValue={this.state.course.title}
                            className="form-control" type="text"
                               placeholder="Search" aria-label="Search"
                               style={{width: '50rem', marginRight: '5px'}}/>
                        <FontAwesomeIcon icon={faPlusCircle} type="button"
                                         className="add fa-2x"
                                         onClick = {() => {
                                             console.log(this.state.courses)
                                             this.createCourse()}}/>
                    </form>
                </nav>
                <div className="row">
                <table className="table-header w-100">
                    <tr>
                        <td className="col-5">
                            <a className="title-col offset-2">
                                Title</a>
                        </td>
                        <td className="col-2">
                            <a className="dropdown-toggle ownership"
                               href="#" id="navbarDropdownMenuLink"
                               role="button" data-toggle="dropdown"
                               aria-haspopup="true" aria-expanded="false">Owned by</a>
                            <div className="dropdown-menu offset-3 col-2" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="#">Login</a>
                                <a className="dropdown-item" href="#">Register</a>
                                <a className="dropdown-item" href="#">Profile</a>
                            </div>
                        </td>
                        <td className="col-2">
                            <a className="modified" style={{marginLeft: '5px'}}>Last modified by me</a>
                        </td>
                    </tr>
                </table>
                </div>
                <div className="container-fluid">
                {this.state.list && <CourseList
                    courses={this.state.courses}
                    newcourse={this.state.course}
                    deleteCourse={this.deleteCourse}
                    updateCourse={this.updateCourse}
                />}
                {!this.state.list && <CourseGrid
                    courses={this.state.courses}
                    newcourse={this.state.course}
                    deleteCourse={this.deleteCourse}
                    updateCourse={this.updateCourse}
                />}
            </div>
            </div>
            </Router>
    )
    }
}