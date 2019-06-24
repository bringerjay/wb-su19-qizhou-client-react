import React from 'react'
import {Link} from "react-router-dom";
import HeadingWidget from "./HeadingWidget";
import ParagraphWidget from "./ParagraphWidget";
import LinkWidget from "./LinkWidget";
import ImageWidget from "./ImageWidget";
import ListWidget from "./ListWidget";
export default class WidgetListItem extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            preview: {
                text: this.props.widget.text,
                name: this.props.widget.name,
                size: this.props.widget.size,
                url : this.props.widget.url,
                type: this.props.widget.type,
                list: this.props.widget.list,
                ltext: this.props.widget.ltext
            }}
    }

    textChanged = (event) => {
        let tracker = this.state.preview
        tracker.text = event.target.value
        this.setState({
            preview: tracker
        })
        this.props.textSaved(tracker.text,this.props.widget.id)
    }
    textareaChanged = (event) => {
        let tracker = this.state.preview
        let text = event.target.value
        let lines = text.split('\n');
        console.log(text,lines)
        tracker.ltext = lines
        this.setState({
            preview: tracker
        })
        this.props.ltextSaved(tracker.ltext,this.props.widget.id)
    }
    nameChanged = (event) => {
        let tracker = this.state.preview
        tracker.name = event.target.value
        this.setState({
            preview: tracker
        })
        this.props.nameSaved(tracker.name,this.props.widget.id)
    }
    sizeChanged = (event) => {
        let tracker = this.state.preview
        tracker.size = event.target.value
        this.setState({
            preview: tracker
        })
        this.props.sizeSaved(tracker.size,this.props.widget.id)
    }
    urlChanged = (event) => {
        let tracker = this.state.preview
        tracker.url = event.target.value
        this.setState({
            preview: tracker
        })
        this.props.urlSaved(tracker.url,this.props.widget.id)
    }
    listChanged = (event) => {
        let tracker = this.state.preview
        tracker.list = event.target.value
        this.setState({
            preview: tracker
        })
        this.props.urlSaved(tracker.url,this.props.widget.id)
    }
    typeChanged = (event) => {
        let tracker = this.state.preview
        tracker.type = event.target.value
        this.setState({
            preview: tracker
        })
        this.props.typeSaved(tracker.type,this.props.widget.id)
    }

    render() {
        return(
            <div className="card col-lg-8 col-md-8 col-sm-8">
                <div className="card-body">
                    {this.props.widget.type === "Heading" &&
                    <HeadingWidget
                        length={this.props.length}
                        view={this.props.view}
                        widget={this.props.widget}
                        index={this.props.index}
                        deleteWidget={this.props.deleteWidget}
                        updateWidget={this.props.updateWidget}
                        moveUp={this.props.moveUp}
                        moveDown={this.props.moveDown}
                        nameChanged={this.nameChanged}
                        textChanged={this.textChanged}
                        sizeChanged={this.sizeChanged}
                        typeChanged={this.typeChanged}
                        preview={this.state.preview}
                        tId={this.props.tId}
                    />}
                    {this.props.widget.type === "Paragraph" &&
                    <ParagraphWidget
                        length={this.props.length}
                        view={this.props.view}
                        widget={this.props.widget}
                        index={this.props.index}
                        deleteWidget={this.props.deleteWidget}
                        updateWidget={this.props.updateWidget}
                        moveUp={this.props.moveUp}
                        moveDown={this.props.moveDown}
                        nameChanged={this.nameChanged}
                        textChanged={this.textChanged}
                        typeChanged={this.typeChanged}
                        preview={this.state.preview}
                        tId={this.props.tId}
                    />}
                    {this.props.widget.type === "List" &&
                    <ListWidget
                        length={this.props.length}
                        view={this.props.view}
                        widget={this.props.widget}
                        index={this.props.index}
                        deleteWidget={this.props.deleteWidget}
                        updateWidget={this.props.updateWidget}
                        moveUp={this.props.moveUp}
                        moveDown={this.props.moveDown}
                        nameChanged={this.nameChanged}
                        textareaChanged={this.textareaChanged}
                        typeChanged={this.typeChanged}
                        listChanged={this.listChanged}
                        preview={this.state.preview}
                        tId={this.props.tId}
                    />}
                    {this.props.widget.type === "Image" &&
                    <ImageWidget
                        length={this.props.length}
                        view={this.props.view}
                        widget={this.props.widget}
                        index={this.props.index}
                        nameChanged={this.nameChanged}
                        deleteWidget={this.props.deleteWidget}
                        updateWidget={this.props.updateWidget}
                        moveUp={this.props.moveUp}
                        moveDown={this.props.moveDown}
                        nameChanged={this.nameChanged}
                        textChanged={this.textChanged}
                        urlChanged={this.urlChanged}
                        preview={this.state.preview}
                        typeChanged={this.typeChanged}
                        tId={this.props.tId}
                    />}
                    {this.props.widget.type === "Link" &&
                    <LinkWidget
                        length={this.props.length}
                        view={this.props.view}
                        widget={this.props.widget}
                        index={this.props.index}
                        deleteWidget={this.props.deleteWidget}
                        updateWidget={this.props.updateWidget}
                        moveUp={this.props.moveUp}
                        moveDown={this.props.moveDown}
                        nameChanged={this.nameChanged}
                        textChanged={this.textChanged}
                        urlChanged={this.urlChanged}
                        preview={this.state.preview}
                        typeChanged={this.typeChanged}
                        tId={this.props.tId}
                    />}
                </div>
            </div>)
            }
            }