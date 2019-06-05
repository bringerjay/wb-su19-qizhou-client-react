import React from "react";
export default class LessonTabList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            active: ' ',
            highlight: 'off',
            lesson: this.props.lesson,
        }
        if (this.props.index === 0)
            this.state.active = "active";}
    highlightLesson = () => {
        if (this.state.highlight === 'off')
            this.setState({highlight: 'on'});
        else this.setState({highlight: 'off'})
        console.log(this.state.title,this.state.highlight)
    }

    render() {
        return(
                <li className={"nav-item"+this.state.highlight} onClick={() => this.highlightLesson()}>
                    <a className={"nav-link "+ this.state.active} href="#">{this.state.lesson.title}</a>
                    <button onClick={() => this.props.updateLesson(this.props.index)}>Edit</button>
                    <button onClick={() => this.props.deleteLesson(this.props.lesson.title)}>Delete</button>
                </li>
        )
    }
}