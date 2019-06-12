import React from 'react'
import {Link} from "react-router-dom";
import {faArrowAltCircleDown, faArrowAltCircleUp, faPlusCircle, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import LinkWidget from "./LinkWidget";

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
                list: this.props.widget.list
            }}
    }

    textChanged = (event) => {
        let tracker = this.state.preview
        tracker.text = event.target.value
        this.setState({
            preview: tracker
        })
        this.props.textSaved(tracker.text,this.props.index)
    }
    nameChanged = (event) => {
        let tracker = this.state.preview
        tracker.name = event.target.value
        this.setState({
            preview: tracker
        })
        this.props.nameSaved(tracker.name,this.props.index)
    }
    sizeChanged = (event) => {
        let tracker = this.state.preview
        tracker.size = event.target.value
        this.setState({
            preview: tracker
        })
        this.props.sizeSaved(tracker.size,this.props.index)
    }
    urlChanged = (event) => {
        let tracker = this.state.preview
        tracker.url = event.target.value
        this.setState({
            preview: tracker
        })
        this.props.urlSaved(tracker.url,this.props.index)
    }
    listChanged = (event) => {
        let tracker = this.state.preview
        tracker.url = event.target.value
        this.setState({
            preview: tracker
        })
        this.props.urlSaved(tracker.url,this.props.index)
    }
    typeChanged = (event) => {
        let tracker = this.state.preview
        tracker.type = event.target.value
        this.setState({
            preview: tracker
        })
        this.props.typeSaved(tracker.type,this.props.index)
    }

    render() {
        return(
            <div className="card col-lg-8 col-md-8 col-sm-8">
                <div className="card-body">
                    {this.props.view==="preview" && <div>
                    <h1>{this.props.widget.type} widget</h1>
                    <span className="widget-operations float-right">
                   {this.props.index > 0 && <FontAwesomeIcon icon={faArrowAltCircleUp} type="button"
                                    id="go-up" className="fa-2x position" aria-hidden="true"
                                    onClick={() =>
                                    {console.log("moving up "+ this.props.index)
                                        this.props.moveUp(this.props.index)}}/>}
                                        {this.props.index < this.props.length-1 &&<FontAwesomeIcon icon={faArrowAltCircleDown} type="button"
                                                     id="go-down" className="fa-2x position" aria-hidden="true"
                                                     onClick={() =>
                                                         this.props.moveDown(this.props.index)}/>}
                    <select value={this.props.widget.type}
                            onClick={() => this.typeChanged()}>
                        <option value="Heading">Heading</option>
                        <option value="Paragraph">Paragraph</option>
                        <option value="Image">Image</option>
                        <option value="List">List</option>
                    </select>
                        <FontAwesomeIcon icon={faTrashAlt} type="button"
                                         className="icons fa-2x"
                                         onClick={() =>
                                             this.props.deleteWidget(this.props.widget.id)}/>
               <button onClick={() =>
                   this.props.updateWidget({
                       id:this.props.widget.id,
                       name: "hello",
                       type: "kitty"
                   })
               }>Update</button>
					</span><br/>
                    {
                        ["Heading","Paragraph","List","Link"].includes(this.props.widget.type)
                        &&
                            <div>
                        <label htmlFor="heading-text"><h3>{this.props.widget.type} Text Input</h3></label>
                        <input id="heading-text" className="form-control" placeholder={this.props.widget.text}
                onChange={this.textChanged}/></div>}
                    {["Image","Link"].includes(this.props.widget.type) &&
                    <div>
                        <label htmlFor="heading-text">URL</label>
                        <input id="heading-text" className="form-control" placeholder={this.props.widget.url}
                               onChange={this.urlChanged}/></div>}
                <br/>
                    {this.props.widget.type === "Heading" &&
                    <select className="form-control col-3"
                        value={this.props.widget.size}
                            onChange={this.sizeChanged}>
                    <option value="h1">heading 1</option>
                    <option value="h2">heading 2</option>
                    <option value="h3">heading 3</option>
                </select>}
                    {this.props.widget.type === "List" &&
                    <select value={this.props.widget.list}
                            onClick={() => this.listChanged()}>
                        <option value="ul">Unordered list</option>
                        <option value="ol">Ordered list</option>
                    </select>}<br/>
                    <label htmlFor="widget-name"><h3>Widget Name</h3></label>
                <br/>
                <input id="widget-name" className="form-control" placeholder={this.props.widget.name}
                onChange={this.nameChanged}/>
                    </div>}
                        <h2>Preview</h2>
                        {this.props.widget.type === "Heading" &&
                        <this.state.preview.size>Text: {this.state.preview.text}</this.state.preview.size>}
                    {["Paragraph"].includes(this.props.widget.type) &&
                    <this.state.preview.size>Text: {this.state.preview.text}</this.state.preview.size>}
                        {this.props.widget.type === "List" &&
                        <this.props.widget.list>Text: {this.state.preview.text}</this.props.widget.list>}
                    {this.props.widget.type === "Image" &&
                        <img className="card-img-top"
                          src={this.props.widget.url}/>}
                    {this.props.widget.type === "Link" &&
                    <LinkWidget
                    text={this.state.preview.text}
                    url={this.state.preview.url}/>}
                    </div>
            </div>
        )
    }

}