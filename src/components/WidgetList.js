import React from 'react'
import WidgetListItem from "./WidgetListItem";
import {faPlusCircle, faToggleOn} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faToggleOff} from "@fortawesome/free-solid-svg-icons/faToggleOff";
export default class WidgetList extends React.Component{
    constructor(props){
        super(props)
        let lw = 50
        this.props.findAllWidgets()
        console.log(lw)
        let previewinit = new Array()
        for (var i=0; i< lw; i++ )
        {
            previewinit.push({
                name: "33init33",
                text: "33init33",
                size: "33init33",
                url:  "33init33",
                list: "33init33",
                type: "33init33"
            })
        }
        console.log(previewinit)
        this.state = {
            view: "preview",
            editing: false,
            preview: previewinit
        }
        console.log(this.state.preview)
    }


    textSaved = (newText,index) => {
        let tracker = this.state.preview
        console.log(tracker)
        tracker[index].text = newText
        this.setState({
            preview: tracker
        })
        console.log(tracker)
    }
    nameSaved = (newName,index) => {
        let tracker = this.state.preview
        console.log(tracker)
        tracker[index].name = newName
        this.setState({
            preview: tracker
        })
        console.log(tracker)
    }
    sizeSaved = (newSize,index) => {
        let tracker = this.state.preview
        console.log(tracker)
        tracker[index].size = newSize
        this.setState({
            preview: tracker
        })
        console.log(tracker)
    }
    urlSaved = (newurl,index) => {
        let tracker = this.state.preview
        console.log(tracker)
        tracker[index].url = newurl
        this.setState({
            preview: tracker
        })
        console.log(tracker)
    }
    typeSaved = (newType,index) => {
        let tracker = this.state.preview
        console.log(tracker)
        tracker[index].type = newType
        this.setState({
            preview: tracker
        })
        console.log(tracker)
    }
    listSaved = (newList,index) => {
        let tracker = this.state.preview
        console.log(tracker)
        tracker[index].list = newList
        this.setState({
            preview: tracker
        })
        console.log(tracker)
    }
    toggleEdition = () => {
        if (this.state.view === "editing")
            this.setState({ view: "preview"})
        else {
            this.setState({ view: "editing" })
        }
        this.setState({ editing: !this.state.editing })
    }
    saveEdition = () => {
        this.props.saveChanges(this.state.preview)
    }
    render(){
        return(
            <div className="container">
                <h1>Widget List {this.props.widgets.length}</h1>
                <span className="float-right">
                    <button type="button" className="btn btn-success"
                            onClick={this.saveEdition}>Save</button>
                    <label htmlFor="save"><h3>{this.state.view}</h3></label>
                    {this.state.editing && <FontAwesomeIcon icon={faToggleOn}
                                                         id="save"
                                                         className="save fa-2x"
                                                         onClick={this.toggleEdition}>
                        {this.state.view}</FontAwesomeIcon>}
                        {!this.state.editing && <FontAwesomeIcon icon={faToggleOff}
                                                              className="save fa-2x"
                                                              onClick={this.toggleEdition}>
                            {this.state.view}</FontAwesomeIcon>}
                <FontAwesomeIcon icon={faPlusCircle} type="button"
                                 className="add fa-2x"
                                 onClick={()=> {this.props.createWidget()}}/>
                </span>
                <br/><br/><br/>
                <div className="row">
                    {this.props.widgets.map(widget =>
                            <WidgetListItem
                            widget={widget}
                            index={this.props.widgets.indexOf(widget)}
                            deleteWidget={this.props.deleteWidget}
                            updateWidget={this.props.updateWidget}
                            moveUp={this.props.moveUp}
                            moveDown={this.props.moveDown}
                            length={this.props.widgets.length}
                            textSaved={this.textSaved}
                            nameSaved={this.nameSaved}
                            sizeSaved={this.sizeSaved}
                            urlSaved={this.urlSaved}
                            typeSaved={this.typeSaved}
                            listSaved={this.listSaved}
                            view={this.state.view}/>
                        )
                    }
            </div>
                <FontAwesomeIcon icon={faPlusCircle} type="button"
                                 className="add fa-5x float-right"
                                 onClick={()=> {this.props.createWidget()}}/>
                </div>
        )
    }
}