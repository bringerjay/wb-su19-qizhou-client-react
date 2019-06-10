import React from 'react'
import {Link} from "react-router-dom";

export default class WidgetListItem extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        return(
            <div className="card col-lg-8 col-md-8 col-sm-8">
                <div className="card-body">
                    <h1>{this.props.widget.name}</h1>
                    <span className="widget-operations">
                    <i id="go-up" className="fa-2x fa fa-arrow-circle-up" aria-hidden="true"></i>
                    <i id="go-down" className="fa-2x fa fa-arrow-circle-down" aria-hidden="true"></i>
                    <select>
                        <option>Header</option>
                        <option>Paragraph</option>
                        <option>Image</option>
                    </select>
					<button onClick={() =>
                        this.props.deleteWidget(this.props.widget.id)
                    }>Delete</button>
               <button onClick={() =>
                   this.props.updateWidget({
                       id:this.props.widget.id,
                       name: "hello",
                       type: "kitty"
                   })
               }>Update</button>
					</span>
                <input className="form-control" placeholder="header"></input>
                <select className="form-control col-3">
                    <option>heading 1</option>
                    <option>heading 2</option>
                    <option>heading 3</option>
                </select>
                <input className="form-control" placeholder="widget name"/>
                <p>Preview</p>
                <p>Heading Text</p>
                </div>
            </div>
        )
    }

}