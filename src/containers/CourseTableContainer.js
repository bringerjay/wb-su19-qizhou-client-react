import React from 'react'
import CourserTable from '../components/CourseTable'
import {connect} from 'react-redux'

const stateToPropertyMapper = state => ({
    courses: state.courses,
    course: state.course
})

const CourseTableContainer = connect(
    stateToPropertyMapper
)(CourserTable)

export default CourseTableContainer