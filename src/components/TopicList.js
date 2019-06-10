import React from "react";
export default class TopicList extends React.Component {
    //how does lower level states interact with higher level ones
    constructor(props) {
        super(props)
}

    highlightTopic = () => {
        this.props.handleHighlight(this.props.index)
    }

    render() {
        return(
            <li className={"nav-item"} onClick={() => this.highlightTopic()}>
                <a className={"nav-link "+this.props.highlight[this.props.index]}
                   href="#">{this.props.topic.title}</a>
                <button onClick={() => this.props.updateTopic(this.props.index)}>Edit</button>
                <button onClick={() => this.props.deleteTopic(this.props.topic.title)}>Delete</button>
            </li>
        )
    }
}