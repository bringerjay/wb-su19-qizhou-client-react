export default class CourseService {
    static myInstance = null;

    static getInstance() {
        if (CourseService.myInstance == null) {
            CourseService.myInstance =
                new CourseService();
        }
        return this.myInstance;
    }
    createCourse = Course =>

        fetch("http://localhost:8080/api/courses",
            {
                method: 'POST',
                body: JSON.stringify(Course),
                headers: {
                    'content-type': 'application/json'
                }
            })
            .then(function (response) {
                return response.json()
            })

    findAllCourses = () =>
        fetch("http://localhost:8080/api/courses")
            .then(function (response) {
                return response.json()
            })

    deleteCourseById = courseId =>
        fetch(`http://localhost:8080/api/courses/${courseId}`,
            {method: 'DELETE'})
            .then(function (response) {
                return response.json()
            })

    findCourseById = courseId =>
        fetch(`http://localhost:8080/api/courses/${courseId}`)
            .then(function (response) {
                return response.json()
            })

    updateCourse = (id,newcourse) =>
        fetch(`http://localhost:8080/api/courses/${id}`,
            {
                method: 'PUT',
                body: JSON.stringify(newcourse),
                headers: {
                    'content-type': 'application/json'
                }
            }).then(function (response) {
            return response.json()
        })
}