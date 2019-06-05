import React from 'react'
import LessonTabList from './LessonTabList'

export default class LessonTabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lessonnew: {
                id: -1,
                title: 'New Lesson',
            },
            lessons: this.props.lessons
    }}

    titleChanged = (event) => {
        console.log(event)
        this.setState({
            lessonnew: {
                title: event.target.value,
                id: (new Date()).getTime()
            }
        })
    }
    updateLesson = (index) => {
        console.log('updateLesson ' + index)
        const ls = this.state.lessons
        ls[index].title = this.state.lessonnew.title
        this.setState({
            lessons: ls
        })
    }
    createLesson = () => {
        // this.state.module.push()
        this.state.lessonnew.id = (new Date()).getTime()
        console.log(this.state.lessonnew)
        this.setState({
            lessons: [...this.state.lessons,this.state.lessonnew]
        })
    }
    deleteLesson = (title) => {
        console.log('deleteLesson ' + title)
        this.setState({
            lessons: this.state.lessons.filter(lesson => lesson.title !== title)
        })
    }
    render() {
        return (
            <ul className="nav nav-pills">
                {this.state.lessons.map(lesson =>
                    <LessonTabList
                        lesson={lesson}
                    index={this.state.lessons.indexOf(lesson)}
                        deleteLesson={this.deleteLesson}
                        updateLesson={this.updateLesson}
                    />
                )}
                <li className="list-group-item">
                    <input
                        onChange={this.titleChanged}
                        defaultValue={this.state.lessonnew.title}
                        className="form-control"/>
                </li>
                <li>
                    <button onClick={this.createLesson} className="btn btn-primary btn-block">
                        Add Lesson
                    </button>
                </li>
            </ul>
        )
    }
}