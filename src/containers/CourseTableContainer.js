import {connect} from 'react-redux'
import CourseTable from '../components/CourseTable'
import service from "../services/CourseService";
const courseService = service.getInstance();
const stateToPropertyMapper = state => ({
    courses: state.courses
    //course: state.course
})

const dispatchToPropertyMapper = dispatch => ({
    findAllCourses: () =>
    {
        let courses1=courseService.findAllCourses()
        dispatch({type: 'FIND_ALL_COURSES',
            courses: courses1})
    }
        ,
    deleteCourse: (courseId) => dispatch({type: 'DELETE_COURSE', courseId: courseId}),
    createCourse: (course) =>
    {   let courses2=courseService.createCourse(course)
        dispatch({type: 'CREATE_COURSE', courses: courses2})}
        ,
    updateCourse: (course) => dispatch({type: 'UPDATE_COURSE', course: course}),
    findCourseById: (courseId) =>courses => dispatch({type: 'FIND_COURSE', courseId: courseId})
})

const CourseTableContainer = connect(
    stateToPropertyMapper,dispatchToPropertyMapper
)(CourseTable)

export default CourseTableContainer