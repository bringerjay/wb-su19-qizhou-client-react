import React from "react";
export default class LessonTabList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            lesson: this.props.lesson,
        }}
    toggleHighlight = () =>{
        this.props.handleHighlight(this.props.index)
        this.props.selectLesson(this.props.lesson)
        console.log(this.props.lesson)
        console.log(this.props.index,this.props.highlight)
    }

    render() {
        return(
                <li className={"nav-item "} onClick={() => this.toggleHighlight()}>
                    <a className={"nav-link "+this.props.highlight[this.props.index]} href="#">{this.state.lesson.title}</a>
                    <button onClick={() => this.props.updateLesson(this.props.index)}>Edit</button>
                    <button onClick={() => this.props.deleteLesson(this.props.lesson.title)}>Delete</button>
                </li>
        )
    }
}