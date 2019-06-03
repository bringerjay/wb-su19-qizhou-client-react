import courseService from '../services/CourseService'
const service = courseService.getInstance();
let courses = service.findAllCourses();

const courseReducer = (state, action) => {
    switch (action.type) {
        case "CREATE_COURSE":
        service.createCourse(state.course);
            return state;
        default:
                return state;
    }
}