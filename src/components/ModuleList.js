import React from 'react'
import ModuleItem from './ModuleItem'
import mService from "../services/ModuleService"
const moduleService = mService.getInstance()
export default class ModuleList
    extends React.Component {
    constructor(props) {
        super(props);
        let initHighlight = Array(this.props.modules.length).fill(" ")
        initHighlight[0]="active"
        console.log(initHighlight)
        this.state = {
            module: {
                title: 'New Module',
            },
            modules: this.props.modules,
            highlight: initHighlight
        }
    }
    createModule = () => {
        moduleService.createModuleForCourse(this.props.courseId,
            this.state.module)
            .then(() =>
                moduleService
                    .findAllModulesForCourse(this.props.courseId))
            .then((modules) =>
                this.setState({
                    modules: modules
                })
            )
            .then(this.handleHighlight(this.state.modules.length))
    }
    updateModule = (index,id) => {
        console.log('updateModule ' + index +
        "with ID " + id)
        const ms = this.state.modules
        ms[index].title = this.state.module.title
        moduleService
            .findModuleById(id)
            .then(module =>
            module.title = this.state.module.title)
            .then(module =>
                moduleService.updateModule(id,module))
            .then(() =>
                moduleService
                    .findAllModulesForCourse(this.props.courseId))
            .then((modules) =>
                this.setState({
                    modules: modules
                }))
        }

    titleChanged = (event) => {
        console.log(event)
        this.setState({
            module: {
                title: event.target.value,
            }
        })
    }

    deleteModule = (id) => {
        console.log('deleteModule ' + id)
        moduleService.deleteModuleById(id)
            .then(() =>
                moduleService
                .findAllModulesForCourse(this.props.courseId))
            .then((modules) =>
                this.setState({
                    modules: modules
                })
            )
    }
    handleHighlight = (index) => {
        let highlightHelper = Array(this.state.modules.length).fill(" ")
        highlightHelper[index]="active"
        this.setState({highlight: highlightHelper},
            () =>
            {
                console.log(this.state.highlight)
            })
        console.log(highlightHelper)
    }

    render() {
        return(
            <div className="card module-panel">
                <h3>Module List</h3>
                <ul className="list-group">
                    <li className="list-group-item">
                        <input
                            onChange={this.titleChanged}
                            defaultValue={this.state.module.title}
                            className="form-control"/>
                        <button onClick={this.createModule} className="btn btn-primary btn-block">
                            Add Module
                        </button>
                    </li>
                </ul>
                    <ul>
                    {
                        this.state.modules.map(
                            module =>
                                <ModuleItem
                                    updateModule={this.updateModule}
                                    deleteModule={this.deleteModule}
                                    module={module}
                                    index={this.state.modules.indexOf(module)}
                                    selectModule={this.props.selectModule}
                                    highlight={this.state.highlight}
                                    handleHighlight={this.handleHighlight}
                                />
                        )
                    }
                </ul>
            </div>
        )
    }
}