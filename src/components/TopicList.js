import React from "react";
export default class TopicList extends React.Component {
    //how does lower level states interact with higher level ones
    constructor(props) {
        super(props)
        this.state = {
            active: ' ',
            highlight: 'off',
            topic: this.props.topic,
            topics: this.props.topics
            }
        if (this.props.index === 0)
            this.state.active = "active";
        }
    highlightTopic = () => {
        if (this.state.highlight === 'off')
            this.setState({highlight: 'on'});
        else this.setState({highlight: 'off'})
        console.log(this.state.title,this.state.highlight)
    }

    render() {
        return(
            <li className={"nav-item"+this.state.highlight} onClick={() => this.highlightTopic()}>
                <a className={"nav-link "+ this.state.active} href="#">{this.state.topic.title}</a>
                <button onClick={() => this.props.updateTopic(this.props.index)}>Edit</button>
                <button onClick={() => this.props.deleteTopic(this.props.topic.title)}>Delete</button>
            </li>
        )
    }
}