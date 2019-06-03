import React from 'react'
import {Link, withRouter} from 'react-router-dom'
const CourseEditor = () => (
    <div>
        <div>
        <nav className="navbar-dark bg-dark">
            <a className="navbar-brand text-center" href="#"
               style={{marginLeft: '15px', height: '80px', marginTop: '25px'}}>Course Editor</a>
                <span className="navbar-toggler-icon"></span>
        </nav>
        </div>
        <h1> Kitty</h1>
        <Link to="/">Home</Link>
        <Link to="/course-grid">Home</Link>
    </div>
)

export default withRouter(CourseEditor)