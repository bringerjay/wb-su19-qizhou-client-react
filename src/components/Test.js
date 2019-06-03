import React from 'react'
import {Link, withRouter} from "react-router-dom";

const Test = () =>
    <div>
        <h1>Test</h1>
        <Link to="/">Home</Link>
        <Link to="/course-editor">editor</Link>
    </div>

export default withRouter(Test)