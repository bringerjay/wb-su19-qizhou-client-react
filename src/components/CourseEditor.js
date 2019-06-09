import React from 'react'
import ModuleList from "./ModuleList";
import LessonTabs from "./LessonTabs";
import TopicPills from "./TopicPills";
import {BrowserRouter as Router, Link, Route, withRouter} from 'react-router-dom'
import WidgetListContainer from "../containers/WidgetListContainer"
import service from "../services/CourseService";
import '../styles/CourseEditor.css'
const courseService = service.getInstance();
export default class CourseEditor
    extends React.Component {
    constructor(props) {
        super(props)
        const pathname = window.location.pathname
        const paths = pathname.split('/')
        const courseId = paths[2]
        //const moduleId = paths[3]
        //const lessonTitle = paths[4]
        const currentCourses = courseService.findAllCourses()
        const currentCourse = courseService.findCourseById(courseId)
        console.log(courseId, currentCourses,currentCourse)
        const currentModules = currentCourse.modules
        const currentLessons = currentModules[0].lessons
        const currentTopics = currentLessons[0].topics
        this.state = {
            courses: currentCourses,
            courseId: courseId,
            course: currentCourse,
            Modules: currentModules,
            lessons: currentLessons,
            topics: currentTopics
        }
    }
    render() {
        return(
            <div>
                <div className="editor-header">
                <h2>{this.state.course.title} {this.state.course.id}</h2>
                <Link to="/"><button>Home</button></Link>
                </div>
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
                        <br/>
                        <WidgetListContainer/>
                    </div>
                </div>
            </div>
                  )
    }
}
