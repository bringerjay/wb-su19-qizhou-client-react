import React from 'react'
import ModuleItem from './ModuleItem'
export default class ModuleList
    extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            module: {
                id: -1,
                title: 'New Module',
            },
            modules: this.props.modules
        }
    }
    createModule = () => {
        // this.state.module.push()
        this.state.module.id = (new Date()).getTime()
        this.setState({
            modules: [...this.state.modules,this.state.module]
        })
    }
    updateModule = (index) => {
        console.log('updateModule ' + index)
        const ms = this.state.modules
        ms[index].title = this.state.module.title
        this.setState({
            modules: ms
        })
    }

    titleChanged = (event) => {
        //console.log(event.target.value)
        console.log(event)
        this.setState({
            module: {
                title: event.target.value,
                id: (new Date()).getTime()
            }
        })
    }

    deleteModule = (id) => {
        console.log('deleteModule ' + id)
        this.setState({
            modules: this.state.modules.filter(module => module.mid !== id)
        })
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
                                    toggleHighlight={this.toggleHighlight}
                                    module={module}
                                    index={this.state.modules.indexOf(module)}
                                />
                        )
                    }
                </ul>
            </div>
        )
    }
}