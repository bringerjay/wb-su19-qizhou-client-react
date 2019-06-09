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
            <div>
                <h1>Widget List {this.props.widgets.length}</h1>
                <ul>
                    {
                        this.props.widgets.map(widget =>
                            <WidgetListItem
                            widget={widget}
                            deleteWidget={this.props.deleteWidget}
                            updateWidget={this.props.updateWidget}
                             />
                        )
                    }
                    <button onClick={()=> {this.props.createWidget()}}>Create</button>
                </ul>
            </div>

        )
    }
}