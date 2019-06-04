import React from 'react'
import button from "bootstrap/js/src/button";

const ModuleItem = ({module, deleteModule,updateModule,index,highlightModule}) =>
    <li className="list-group-item" onClick={() => highlightModule()}>
        {module.title}
        <button onClick={() => updateModule(index)}>Update</button>
        <button onClick={() => deleteModule(module.id)}>Delete</button>
    </li>

export default ModuleItem