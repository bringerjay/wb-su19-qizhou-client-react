import React from 'react'
import WidgetListItem from "./WidgetListItem";

export default class WidgetList extends React.Component{
    constructor(props){
        super(props)
      this.props.findAllWidgets()}
    state = {
        editing: false
    }
    render(){
        return(
            <div className="container">
                <h1>Widget List {this.props.widgets.length}</h1>
                <div className="row">
                    {
                        this.props.widgets.map(widget =>
                            <WidgetListItem
                            widget={widget}
                            deleteWidget={this.props.deleteWidget}
                            updateWidget={this.props.updateWidget}
                             />
                        )
                    }
            </div>
            <button onClick={()=> {this.props.createWidget()}}>Create a New Widget</button>
                </div>

        )
    }
}