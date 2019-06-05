import React from 'react'
import button from "bootstrap/js/src/button";
export default class ModuleList
    extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
            highlight: 'off',
            title: this.props.module.title
        }
    }
    highlightModule = () => {
        if (this.state.highlight === 'off')
            this.setState({highlight: 'on'});
        else this.setState({highlight: 'off'})
        console.log(this.state.title,this.state.highlight)
    }
    render() {
        return(
            <li className={"list-group-item "+this.state.highlight} onClick={() => this.highlightModule()}>
            {this.props.module.title + this.state.highlight}
            <button onClick={() => this.props.updateModule(this.props.index)}>Update</button>
            <button onClick={() => this.props.deleteModule(this.props.module.id)}>Delete</button>
        </li>)

    }
    }

    /**const ModuleItem = ({module,deleteModule,updateModule,index,highlightModule,highlight}) =>


export default ModuleItem
**/