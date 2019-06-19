import {connect} from 'react-redux'
import CourseTable from '../components/CourseTable'
import service from "../services/CourseService";
const courseService = service.getInstance();
const stateToPropertyMapper = state => ({
    courses: state.courseReducer.courses,
    course: state.courseReducer.course
})

const dispatchToPropertyMapper = dispatch => ({
    findAllCourses: () =>
        courseService.findAllCourses()
            .then(courses => dispatch({
                type: 'FIND_ALL_COURSES',
                courses: courses
            }))
    ,
    deleteCourse: (courseId) =>
        courseService.deleteCourseById(courseId)
            .then(courses => dispatch({
                type: 'DELETE_COURSE',
                courses: courses
            }))
    ,
    createCourse: (course) =>
        courseService.createCourse(course)
            .then(courses => dispatch({
                type: 'CREATE_COURSE',
                courses: courses
            }))
    ,
    updateCourse: (id,newcourse) =>
        courseService.updateCourse(id,newcourse)
            .then(courses => dispatch({
                type: 'UPDATE_COURSE',
                courses: courses
            }))
    ,
    findCourseById: (courseId) =>
        courseService.findCourseById(courseId)
            .then(course => dispatch({
                type: 'FIND_COURSE',
                course: course
            }))
})
const CourseTableContainer = connect(
    stateToPropertyMapper,dispatchToPropertyMapper
)(CourseTable)

export default CourseTableContainer