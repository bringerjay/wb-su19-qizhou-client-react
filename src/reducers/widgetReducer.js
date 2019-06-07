import widgetService from '../services/WidgetService'
const service = widgetService.getInstance();

const widgetReducer = (state = {widgets: []}, action) => {
    switch (action.type) {
        case "CREATE_WIDGET":
            return {
                widgets: action.widgets
            };        case "FIND_ALL_WIDGETS":
            return {
                widgets: action.widgets
            };
        case "DELETE_WIDGET":
            break;
        default:
            return state;
    }
}

export default widgetReducer;