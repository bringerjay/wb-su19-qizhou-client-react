import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEdit, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
export default class ModuleItem
    extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
            title: this.props.module.title
        }
        console.log(this.props.index,this.props.highlight)
    }
    toggleHighlight = () =>{
        this.props.handleHighlight(this.props.index)
        this.props.selectModule(this.props.module)
        console.log(this.props.module)
        console.log(this.props.index,this.props.highlight)
    }
    render() {
        return(
            <li className={"list-group-item "+this.props.highlight[this.props.index]}
                onClick={() => this.toggleHighlight()}>
            {this.props.module.title+this.props.highlight[this.props.index]}
            <div className="float-right">
                <FontAwesomeIcon icon={faEdit} type="button"
                                 onClick={() => this.props.updateModule(this.props.index)}/>
                <FontAwesomeIcon icon={faTrashAlt} type="button" className="icons"
                   onClick={() => this.props.deleteModule(this.props.module.mid)}/>

            </div>
        </li>)

    }
    }
