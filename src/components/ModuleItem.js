import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEdit, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import '../styles/ModuleItem.css'
export default class ModuleItem
    extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
            highlight: " ",
            title: this.props.module.title
        }
    }
    toggleHighlight = () =>{
        if (this.state.highlight === " ")
            this.setState({ highlight: "active"})
        else {
            this.setState({ highlight: " " })
        }
    }
    render() {
        return(
            <li className={"list-group-item "+this.state.highlight}
                onClick={() => this.toggleHighlight()}>
            {this.props.module.title+this.state.highlight}
            <div className="float-right">
                <FontAwesomeIcon icon={faEdit} type="button"
                                 onClick={() => this.props.updateModule(this.props.index)}/>
                <FontAwesomeIcon icon={faTrashAlt} type="button" className="icons"
                   onClick={() => this.props.deleteModule(this.props.module.mid)}/>

            </div>
        </li>)

    }
    }
