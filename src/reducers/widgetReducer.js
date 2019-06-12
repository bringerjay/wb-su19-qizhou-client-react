const widgetReducer = (state = {widgets: []}, action) => {
    switch (action.type) {
        case "CREATE_WIDGET":
            return {
                widgets: action.widgets
            };
            case "FIND_ALL_WIDGETS":
            return {
                widgets: action.widgets
            };
        case "DELETE_WIDGET":
            return {
                widgets: action.widgets
            };
        case "UPDATE_WIDGET":
            return {
                widgets: action.widgets
            };
        case "MOVE_UP_WIDGET":
           let widgetsUp = state.widgets
            widgetsUp.splice(action.index-1, 0, widgetsUp.splice(action.index, 1)[0])
            return {
                widgets: widgetsUp.splice(0)
            }
        case "MOVE_DOWN_WIDGET":
            let widgetsDown = state.widgets
            widgetsDown.splice(action.index+1, 0, widgetsDown.splice(action.index, 1)[0])
            return {
                widgets: widgetsDown.splice(0)
            }
        default:
            return state;
    }
}

export default widgetReducer;