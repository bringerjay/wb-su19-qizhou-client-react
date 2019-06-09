import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEdit, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import '../styles/ModuleItem.css'
export default class ModuleItem
    extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
            highlight: this.props.highlight,
            title: this.props.module.title
        }
    }
    highlightModule = () => {
        this.props.cleanHighlight()
        if (this.state.highlight === 'off')
            this.setState({highlight: 'on'});
        else this.setState({highlight: 'off'})
        console.log(this.state.title,this.state.highlight)
    }
    render() {
        return(
            <li className={"list-group-item"+this.state.highlight} onClick={() => this.highlightModule()}>
            {this.props.module.title}
            <div className="float-right">
                <FontAwesomeIcon icon={faEdit} type="button"
                                 onClick={() => this.props.updateModule(this.props.index)}/>
                <FontAwesomeIcon icon={faTrashAlt} type="button" className="icons"
                   onClick={() => this.props.deleteModule(this.props.module.mid)}/>

            </div>
        </li>)

    }
    }
