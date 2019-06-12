import WidgetList from '../components/WidgetList'
import {connect} from 'react-redux'
import service from '../services/WidgetService'
const widgetService = service.getInstance();

const stateToPropertyMapper = state => ({
    widgets: state.widgets,
    length: state.widgets.length
})

const propertyToDispatchMapper = dispatch => ({
    createWidget: () =>
    widgetService
        .createWidget({
            id: 1,
            name: 'New Widget',
            type: 'HEADING',
            size: 'h1',
            text: 'hello world',
            list: 'ul',
            url:  'www.amazon.com'
            }).then(widgets =>
        dispatch({
            type: 'CREATE_WIDGET',
            widgets: widgets
        })
    )
    ,
        moveUp: (index) =>
                        dispatch({type: 'MOVE_UP_WIDGET',
                            index: index})
    ,
        moveDown: (index) =>
        dispatch({type: 'MOVE_DOWN_WIDGET',
        index: index})
        ,
    updateWidget: (newWidget) =>
        widgetService
            .updateWidget(newWidget).then(widgets =>
            dispatch({
                type: 'UPDATE_WIDGET',
                widgets: widgets
            })
        )
    ,
        saveChanges: (preview) =>
            widgetService
            .saveChanges(preview).then(widgets =>
                dispatch({
                    type: 'SAVE_CHANGES',
                    widgets: widgets
                })
            )
        ,
    deleteWidget: (widgetId) =>
        widgetService.deleteWidget(widgetId)
            .then(widgets =>
                dispatch({type: 'DELETE_WIDGET',
                    widgets: widgets}))
    ,
    findAllWidgets: () =>
        widgetService
            .findAllWidgets()
            .then(widgets =>
        dispatch({type: 'FIND_ALL_WIDGETS',
        widgets: widgets}))
})

const WidgetListContainer = connect(
    stateToPropertyMapper,
    propertyToDispatchMapper
)(WidgetList)

export default WidgetListContainer