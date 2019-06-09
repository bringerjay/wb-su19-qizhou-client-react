import React from 'react'
import CourseRow from "./CourseRow";
export default class CourseList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="course-list">
                <h1 className="list-header">Course List</h1>
                <ul className="list-group">
                    {
                        this.props.courses.map(course =>
                            <CourseRow course={course}
                                       newcourse={this.props.newcourse}
                                       deleteCourse={this.props.deleteCourse}
                                       updateCourse={this.props.updateCourse}
                            />)
                    }
                </ul>
            </div>)
    }
}