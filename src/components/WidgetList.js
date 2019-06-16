import React from 'react'
import {faPlusCircle, faToggleOn} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faToggleOff} from "@fortawesome/free-solid-svg-icons/faToggleOff";
import WidgetListItem from "./WidgetListItem";
export default class WidgetList extends React.Component{
    constructor(props){
        super(props)
        this.props.findAllWidgets()
        this.props.initComponent()
        this.state = {
            view: "preview",
            editing: false,
        }
    }
    textSaved = (newText,widgetId) => {
        console.log("widget state")
        console.log(this.props.widgets)
        console.log("previews state")
        console.log(this.props.previews)
        let tracker = this.props.previews
        console.log(tracker)
        const preview = this.props.previews.
        find(preview => preview.id === parseInt(widgetId))
        const index = this.props.previews.indexOf(preview)
        tracker[index].text = newText
        this.props.updatePreviews(tracker)
        console.log("updating" + tracker)
    }
    ltextSaved = (newText,widgetId) => {
        console.log("widget state")
        console.log(this.props.widgets)
        console.log("previews state")
        console.log(this.props.previews)
        let tracker = this.props.previews
        console.log(tracker)
        const preview = this.props.previews.
        find(preview => preview.id === parseInt(widgetId))
        const index = this.props.previews.indexOf(preview)
        tracker[index].ltext = newText
        this.props.updatePreviews(tracker)
        console.log("updating" + tracker)
    }
    nameSaved = (newName,widgetId) => {
        console.log("widget state")
        console.log(this.props.widgets)
        console.log("previews state")
        console.log(this.props.previews)
        let tracker = this.props.previews
        console.log(tracker)
        const preview = this.props.previews.
        find(preview => preview.id === parseInt(widgetId))
        const index = this.props.previews.indexOf(preview)
        tracker[index].name = newName
        this.props.updatePreviews(tracker)
        console.log("updating" + tracker)
    }
    sizeSaved = (newSize,widgetId) => {
        console.log("widget state")
        console.log(this.props.widgets)
        console.log("previews state")
        console.log(this.props.previews)
        let tracker = this.props.previews
        console.log(tracker)
        const preview = this.props.previews.
        find(preview => preview.id === parseInt(widgetId))
        const index = this.props.previews.indexOf(preview)
        tracker[index].size = newSize
        this.props.updatePreviews(tracker)
        console.log("updating" + tracker)
    }
    urlSaved = (newUrl,widgetId) => {
        console.log("widget state")
        console.log(this.props.widgets)
        console.log("previews state")
        console.log(this.props.previews)
        let tracker = this.props.previews
        console.log(tracker)
        const preview = this.props.previews.
        find(preview => preview.id === parseInt(widgetId))
        const index = this.props.previews.indexOf(preview)
        tracker[index].url = newUrl
        this.props.updatePreviews(tracker)
        console.log("updating" + tracker)
    }
    typeSaved = (newType,widgetId) => {
        console.log("widget state")
        console.log(this.props.widgets)
        console.log("previews state")
        console.log(this.props.previews)
        let tracker = this.props.previews
        console.log(tracker)
        const preview = this.props.previews.
        find(preview => preview.id === parseInt(widgetId))
        const index = this.props.previews.indexOf(preview)
        tracker[index].type = newType
        this.props.updatePreviews(tracker)
        console.log("updating" + tracker)
    }
    listSaved = (newList,widgetId) => {
        console.log("widget state")
        console.log(this.props.widgets)
        console.log("previews state")
        console.log(this.props.previews)
        let tracker = this.props.previews
        console.log(tracker)
        const preview = this.props.previews.
        find(preview => preview.id === parseInt(widgetId))
        const index = this.props.previews.indexOf(preview)
        tracker[index].list = newList
        this.props.updatePreviews(tracker)
        console.log("updating" + tracker)
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
        this.props.updateWidgets(this.props.previews)
            .then(this.props.initComponent)
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
                            ltextSaved={this.ltextSaved}
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