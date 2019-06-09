import service from '../services/CourseService'
const courseService = service.getInstance();
const courseReducer = (state = {courses: []}, action) => {
    switch (action.type) {
        case "CREATE_COURSE":
            return {
                courses: action.courses
            };
            case "FIND_ALL_COURSES":
            return {
                courses: action.courses
                //courses: courseService.findAllCourses()
                };
        case "DELETE_COURSE":
            return {
                courses: courseService.deleteCourseById(action.courseId)  };
        case "UPDATE_COURSE":

            return {
                courses: courseService.updateCourse(action.course)};
        case "FIND_COURSE":

            return {
                courses: courseService.findCourseById(action.courseId)};
        default:
            return state;
    }
}
export default courseReducer