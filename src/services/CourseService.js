import jcourses from '../components/courses.json'
let courses = jcourses
export default class CourseService {
    static myInstance = null;

    static getInstance() {
        if (CourseService.myInstance == null) {
            CourseService.myInstance =
                new CourseService();
        }
        return this.myInstance;
    }

    createCourse = course => {
        console.log(courses)
        courses.push(course)
        console.log(courses )
        return course
    }
    findAllCourses = () =>
        courses

    deleteCourseById = courseId =>{
        console.log(courseId)
        courses= courses.filter(course => course.id !== courseId)
        return courses
    }
    findCourseById = courseId =>{
        const course = courses.find(course => course.id === parseInt(courseId))
        return course
    }
    updateCourse = (id,newtitle) => {
        courses = courses.map(course=>
        {
            if (course.id !== id)
                return course;
            else
            { course.title = newtitle;
                return course;}})
        return courses
    }
}