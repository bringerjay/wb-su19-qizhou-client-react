const courseReducer = (state = {courses: [], course: []}, action) => {
    switch (action.type) {
        case "CREATE_COURSE":
            return Object.assign({}, state, {
                courses: action.courses,
                course: action.course
            })
        case "FIND_ALL_COURSES":
                return Object.assign({}, state, {
                    courses: action.courses
                })
        case "DELETE_COURSE":
            return Object.assign({}, state, {
                courses: action.courses
            })
        case "UPDATE_COURSE":
            return Object.assign({}, state, {
                courses: action.courses
            })
        case "FIND_COURSE":
            return Object.assign({}, state, {
                course: action.course
            })
        default:
            return state;
    }
}
export default courseReducer