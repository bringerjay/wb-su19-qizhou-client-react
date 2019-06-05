import React from 'react'
import TopicList from "./TopicList";

export default class LessonTabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            topicnew: {
                id: -1,
                title: 'New Topic',
            },
            topics: this.props.topics
        }
    }
    titleChanged = (event) => {
        console.log(event)
        this.setState({
            topicnew: {
                title: event.target.value,
                id: (new Date()).getTime()
            }
        })
    }
    updateTopic = (index) => {
        console.log('updateTopic ' + index)
        const ts = this.state.topics
        ts[index].title = this.state.topicnew.title
        this.setState({
            topics: ts
        })
    }
    createTopic = () => {
        // this.state.module.push()
        this.state.topicnew.id = (new Date()).getTime()
        console.log(this.state.topicnew)
        this.setState({
            topics: [...this.state.topics,this.state.topicnew]
        })
    }
    deleteTopic = (title) => {
        console.log('deleteModule ' + title)
        this.setState({
            topics: this.state.topics.filter(topic => topic.title !== title)
        })
    }
    render() {
        return (
            <ul className="nav nav-pills">
                {this.state.topics.map(topic =>
                    <TopicList
                        topics={this.state.topics}
                        topic={topic}
                        index={this.state.topics.indexOf(topic)}
                        updateTopic={this.updateTopic}
                    deleteTopic={this.deleteTopic}/>
                )}
                <li className="list-group-item">
                    <input
                        onChange={this.titleChanged}
                        defaultValue={this.state.topicnew.title}
                        className="form-control"/>
                </li>
                <li>
                    <button onClick={this.createTopic} className="btn btn-primary btn-block">
                        Add Topic
                    </button>
                </li>
            </ul>
        )
    }
}