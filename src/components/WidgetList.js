import React from 'react'

export default class WidgetList extends React.Component{
    constructor(props){
        super(props)
        this.props.findAllWidgets()
        console.log(this.props.widgets)
    }
    render(){
        return(
            <div>
                <h1>Widget List {this.props.widgets.length}</h1>
                <ul>
                    {
                        this.props.widgets.map(widget =>
                            <li>{widget.name}</li>
                        )
                    }
                    <button onClick={this.props.createWidget}>Create</button>
                </ul>
            </div>

        )
    }
}