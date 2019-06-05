import React from 'react'
import ModuleList from "./ModuleList";
import LessonTabs from "./LessonTabs";
import TopicPills from "./TopicPills";
import {Link} from "react-router-dom";

export default class CourseEditor
    extends React.Component {

    constructor(props) {
        super(props)
        const pathname = window.location.pathname
        const paths = pathname.split('/')
        const courseId = paths[2]
        console.log(courseId,props.courses)
        this.courses = props.courses
        this.state = {
            courseId: courseId,
            lessons: props.courses.find(course => course.id === courseId).modules[0].lessons,
            course: props.courses.find(course => course.id === courseId),
            topics: props.courses.find(course => course.id === courseId).modules[0].lessons[0].topics
        }
    }
    render() {
        return(
            <div>
                <h2>{this.state.course.title} {this.state.course.id}</h2>
                <Link to="/"><button>Home</button></Link>
                <Link to="/course-grid"><button>CourseGrid</button></Link>
                <div className="row">
                    <div className="col-4 left">
                        <ModuleList modules={this.state.course.modules}/>
                    </div>
                    <div className="col-8 right">
                        <LessonTabs
                        lessons={this.state.lessons}
                        />
                        <br/>
                        <TopicPills
                            topics={this.state.topics}/>
                    </div>
                </div>
            </div>
        )
    }
}