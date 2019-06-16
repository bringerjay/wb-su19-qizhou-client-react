const widgetReducer = (state = {widgets: [],previews: []}, action) => {
    switch (action.type) {
        case "CREATE_WIDGET":
            return Object.assign({}, state, {
                widgets: action.widgets,
               previews: action.widgets

    })
            case "FIND_ALL_WIDGETS":
            return Object.assign({}, state, {
                widgets: action.widgets
            })
        case "INIT_COMPONENT":
            return Object.assign({}, state, {
                previews: action.widgets
            })
        case "UPDATE_PREVIEWS":
            return Object.assign({}, state, {
                previews: action.previews
            })
        case "DELETE_WIDGET":
            return Object.assign({}, state, {
                widgets: action.widgets
            })
        case "UPDATE_WIDGETS":
            return Object.assign({}, state, {
                widgets: action.widgets
            })
        case "MOVE_UP_WIDGET":
           let widgetsUp = state.widgets
            widgetsUp.splice(action.index-1, 0, widgetsUp.splice(action.index, 1)[0])
            return Object.assign({}, state, {
                widgets: widgetsUp.splice(0)
            })
        case "MOVE_DOWN_WIDGET":
            let widgetsDown = state.widgets
            widgetsDown.splice(action.index+1, 0, widgetsDown.splice(action.index, 1)[0])
            return Object.assign({}, state, {
                widgets: widgetsDown.splice(0)
            })
        default:
            return state;
    }
}

export default widgetReducer;