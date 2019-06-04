import React from 'react';
import 'jquery/dist/jquery.min.js';
import "bootstrap/js/src/collapse.js";
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Link, withRouter} from "react-router-dom";
import courses from "./courses"
import courseService from "../services/CourseService";
import CourseRow from "./CourseRow";
import CourseEditor from "./CourseEditor";
import Route from "react-router-dom/es/Route";
const myService = courseService.getInstance();
export default class CourseTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            course: {
                id: -1,
                title: 'New Course'
            },
            courses: courses}
    }
    createCourse = () => {
        // this.state.module.push()
        console.log('creating a course' + this.state.course.title )
        this.state.course.id = (new Date()).getTime()
        myService.createCourse(this.state.course)
        this.setState({courses: [...this.state.courses,this.state.course]
        })
    }
    titleChanged = (event) => {
        console.log(event.target.value)
        this.setState({
            course: {
                title: event.target.value,
                id: (new Date()).getTime()
            }
        })
    }
    deleteCourse = (id) => {
        console.log('deleteCourse ' + id)
        myService.deleteCourseById(id)
        this.setState({
            courses: this.state.courses.filter(course => course.id !== id)
        })
        console.log(myService.findAllCourses())
    }
    render() {
        return (
            <div>
                <div className="row">
            <div>
                <nav className="navbar-dark bg-dark">
                    <a className="navbar-brand text-center" href="#"
                       style={{marginLeft: '15px', height: '80px', marginTop: '25px'}}>Course Manager</a>
                    <button className="navbar-toggler"
                            type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mr-auto"
                            style={{marginLeft: '15px'}}>
                            <li key= "CourseTable" className="nav-item active">
                                <Link to="/">Course List</Link>
                            </li>
                            <li key= "CourseGrid" className="nav-item">
                                <Link to="/course-grid">Course Grid</Link>
                            </li>
                        </ul>
                    </div>
                    <form className="nav-item form-inline float-lg-right" style={{
                        marginTop: '30px'
                    }}>
                        <input
                            onChange={this.titleChanged}
                            defaultValue={this.state.course.title}
                            className="form-control" type="text"
                               placeholder="Search" aria-label="Search"
                               style={{width: '50rem', marginRight: '5px'}}/>
                        <button type="button" onClick = {() => {this.createCourse()}}
                                style={{marginLeft: '20px', marginRight: '10px'}}>Add</button>
                    </form>
                </nav>
            </div>
                </div>
                <div className="row">
            <nav className="navbar navbar-light bg-light"
                 style={{height: '80px',marginTop: '0px'}}>
                <div className="container-fluid">
                <a className="nav-item"
                   style={{marginLeft: '120px'}}>Title</a>
                <a className="nav-item dropdown-toggle"
                   href="#" id="navbarDropdownMenuLink"
                   role="button" data-toggle="dropdown"
                   aria-haspopup="true" aria-expanded="false">Dropdown(test)</a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a className="dropdown-item" href="#">Login</a>
                    <a className="dropdown-item" href="#">Register</a>
                    <a className="dropdown-item" href="#">Profile</a>
                </div>
                <a className="nav-item" style={{marginLeft: '5px'}}>Last modified by me</a>
            </div>
                </nav>
                </div>
                <div style={{width: '58rem'}}>
                    <h1>Course List</h1>
                    <div className="list-group">
                        {
                            this.state.courses.map(course =>
                                <CourseRow course={course}
                                           deleteCourse={this.deleteCourse}/>
                            )
                        }

                    </div>
                </div>
            </div>
        )
    }
}