import jcourses from '../components/courses.json'
var courses = jcourses;
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
        //courses = courses.add
        console.log(courses )
        return courses
    }
    findAllCourses = () => courses

    deleteCourseById = courseId =>{
        courses = courses.filter(course => course.id !== courseId)
        console.log("data"+courses )
    }
    findCourseById = courseId =>{
        return courses.find(course => course.id === courseId)
    }
    updateCourse = (id,newcourse) => {
        courses = courses.map(course=>
        {
            if (course.id !== id)
                return course;
            else
                return newcourse;
        })
    }
}