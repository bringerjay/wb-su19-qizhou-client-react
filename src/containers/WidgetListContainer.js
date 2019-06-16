import WidgetList from '../components/WidgetList'
import {connect} from 'react-redux'
import service from '../services/WidgetService'
const widgetService = service.getInstance();
const stateToPropertyMapper = state => ({
    widgets: state.widgets,
    previews: state.previews
})

const propertyToDispatchMapper = dispatch => ({
    createWidget: () =>
    widgetService
        .createWidget({
            id: 1,
            name: 'New Widget',
            type: 'Heading',
            size: 'h1',
            text: 'hello world',
            list: 'ul',
            url:  'www.amazon.com',
            ltext: ["Hello","World"]
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

    updateWidgets: (preview) =>
            widgetService
            .saveChanges(preview).then(widgets =>
                dispatch({
                    type: 'UPDATE_WIDGETS',
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
        widgets: widgets})),
    initComponent: () =>
        widgetService
            .findAllWidgets()
            .then(widgets =>
                dispatch({type: 'INIT_COMPONENT',
                    widgets: widgets})),
    updatePreviews: (newPreviews) =>
    dispatch({type: 'UPDATE_PREVIEWS',
    previews: newPreviews})
    ,
})

const WidgetListContainer = connect(
    stateToPropertyMapper,
    propertyToDispatchMapper
)(WidgetList)

export default WidgetListContainer