import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowAltCircleDown, faArrowAltCircleUp, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
export default class LinkWidget extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div>
                {this.props.view === "preview" && <div>
                    <h1>{this.props.widget.type} widget ID {this.props.widget.id}</h1>
                    <span className="widget-operations float-right">
                   {this.props.index > 0 && <FontAwesomeIcon
                       icon={faArrowAltCircleUp} type="button"
                       id="go-up" className="fa-2x position" aria-hidden="true"
                       onClick={() => {
                           console.log("moving up " + this.props.index)
                           this.props.moveUp(this.props.index)
                       }}/>}
                        {this.props.index < this.props.length - 1 && <FontAwesomeIcon
                            icon={faArrowAltCircleDown} type="button"
                            id="go-down" className="fa-2x position" aria-hidden="true"
                            onClick={() => this.props.moveDown(this.props.index)}/>}
                        <select defaultValue={this.props.widget.type}
                                onChange={this.props.typeChanged}>
                        <option value="Heading">Heading</option>
                        <option value="Paragraph">Paragraph</option>
                        <option value="Image">Image</option>
                        <option value="List">List</option>
                    </select>
                        <FontAwesomeIcon icon={faTrashAlt} type="button"
                                         className="icons fa-2x"
                                         onClick={() =>
                                             this.props.deleteWidget(this.props.widget.id)}/>
					</span><br/>
                    <div>
                        <label htmlFor="heading-text">
                            <h3>{this.props.widget.type} Text Input</h3></label>
                        <input id="heading-text" className="form-control"
                               placeholder={this.props.widget.text}
                               onChange={this.props.textChanged}/></div>
                    <br/>
                    <div>
                        <label htmlFor="heading-text">URL</label>
                        <input id="heading-text" className="form-control" placeholder={this.props.widget.url}
                               onChange={this.props.urlChanged}/></div>
                    <label htmlFor="widget-name"><h3>Widget Name</h3></label>
                    <br/>
                    <input id="widget-name" className="form-control"
                           placeholder={this.props.widget.name}
                           onChange={this.props.nameChanged}/>
                </div>
                }
                <h2>Preview</h2>
                <h4>Name: {this.props.preview.name}</h4>
                <a href={this.props.preview.url}>{this.props.preview.text}</a>
            </div>
        )
    }
}