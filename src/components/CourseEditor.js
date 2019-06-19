import React from 'react'
import ModuleList from "./ModuleList";
import LessonTabs from "./LessonTabs";
import TopicPills from "./TopicPills";
import tcourses from "./courses"
import {BrowserRouter as Router, Link, Route, withRouter} from 'react-router-dom'
import WidgetListContainer from "../containers/WidgetListContainer"
import service from "../services/CourseService";
import '../styles/CourseEditor.css'
const courseService = service.getInstance();
const tempCourses = tcourses
export default class CourseEditor
    extends React.Component {
    constructor(props) {
        super(props)
        const pathname = window.location.pathname
        const paths = pathname.split('/')
        const courseId = paths[2]
        let currentLessons = tempCourses[0].modules[0].lessons
        let currentTopics =tempCourses[0].modules[0].lessons[0].topics
        let selectedLesson= tempCourses[0].modules[0].lessons[0]
        let selectedTopic = tempCourses[0].modules[0].lessons[0].topics[0]
        let currentCourses = []
        let currentCourse = []
        let currentModules = []
        let selectedModule = []
        this.state = {
            courses: [],
            courseId: [],
            course: [],
            modules: [],
            lessons: [],
            topics: [],
            selectedLesson: [],
            selectedModule: [],
            selectedTopic: []
        }
        courseService.findAllCourses()
            .then(courses => currentCourses = courses)
        courseService.findCourseById(courseId)
            .then(course => currentCourse = course)
            .then(() => {
                currentModules = currentCourse.modules
                selectedModule = currentModules[0]
            }).then(()=>{
            this.setState({
                courses: currentCourses,
                courseId: courseId,
                course: currentCourse,
                modules: currentModules,
                lessons: currentLessons,
                topics: currentTopics,
                selectedLesson: selectedLesson,
                selectedModule: selectedModule,
                selectedTopic: selectedTopic
            })
        })
        /**if (currentCourse.modules.length>0)
        {currentModules = currentCourse.modules
                selectedModule= currentModules[0]
           if (selectedModule.lessons.length>0) {
                currentLessons = selectedModule.lessons
                selectedLesson=currentLessons[0]
            if (selectedLesson.topics.length>0) {
                currentTopics = selectedLesson.topics
                selectedTopic= currentTopics[0]
            }
            }
        }**/
        //console.log(this.state.modules,this.state.selectedModule)
        //console.log(this.state.lessons,
         //   this.state.selectedLesson,this.state.selectedModule
        //, this.state.selectedTopic)
        //console.log(typeof (this.state.lessons === 'undefined'
       //     || this.state.lessons.length < 1))
    }
    selectModule = (module) => {
        console.log(module)
        let setLessons =[]
        let setLesson= []
        let setTopics =[]
        let setTopic = []
        console.log(module.lessons)
        if (typeof module.lessons !== 'undefined')
        {
            if (module.lessons.length > 0)
            {console.log(module.lessons)
            setLessons = module.lessons
            setLesson= setLessons[0]
            console.log(setLesson)
            if (typeof module.lessons[0].topics !== 'undefined'
            && module.lessons[0].topics.length > 0) {
                setTopics = module.lessons[0].topics
                setTopic= setTopics[0]
            }}

        }
        console.log(setLessons,setTopics,setLesson,setTopic)
        this.setState({
                selectedModule: module,
                lessons: setLessons,
                topics: setTopics,
                selectedLesson: setLesson,
                selectedTopic: setTopic
            },
            () =>
            {
                console.log(this.state.topics, this.state.lessons, this.state.selectedLesson, this.state.selectedTopic)
            })
        console.log(this.state.lessons === 'undefined'
            || this.state.lessons.length < 1)
        }
    selectLesson = (lesson) => {
        console.log(module)
        let setTopics =[]
        let setTopic = []
        console.log(lesson.topics)
        if (typeof lesson.topics !== 'undefined') {
            if (lesson.topics.length > 0)
            {
                console.log(lesson.topics)
                setTopics = lesson.topics
                setTopic = setTopics[0]
                console.log(setTopic)
            }
        }
        console.log(setTopics,setTopic)
        this.setState({
                selectedLesson: lesson,
                topics: setTopics,
                selectedTopic: setTopic
            },
            () =>
            {
                console.log(this.state.selectedLesson, this.state.topics, this.state.selectedTopic)
            })
        console.log(this.state.topics === 'undefined'
            || this.state.topics.length < 1)
    }
    selectTopic = (topic) => {
        this.setState({ selectedModule: module})
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
                        {this.state.modules.length > 0 && <ModuleList
                            modules={this.state.modules}
                            selectModule={this.selectModule}
                        />}
                        {this.state.modules.length < 1 && "No Modules was recorded"}
                    </div>
                    <div className="col-8 right">
                        {this.state.lessons.length > 0 && <LessonTabs
                        lessons={this.state.lessons}
                        selectLesson={this.selectLesson}
                        />}
                        {this.state.lessons.length < 1
                         && "No Lessons Were " +
                        "Recorded For The Selected Module"}
                        <br/>
                        <br/>
                        {this.state.topics.length > 0 && <TopicPills
                            topics={this.state.topics}/>}
                        {this.state.topics.length < 1 && "No Topics Were " +
                        "Recorded For The Selected Lesson"}
                        <br/>
                        <WidgetListContainer/>
                    </div>
                </div>
            </div>
                  )
    }
}
