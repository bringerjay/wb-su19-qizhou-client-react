import React from 'react'

export default class WidgetListItem extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        return(
            <li>{this.props.widget.name}
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
            </li>
        )
    }

}