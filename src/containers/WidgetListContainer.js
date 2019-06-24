import WidgetList from '../components/WidgetList'
import {connect} from 'react-redux'
import service from '../services/WidgetService'
const widgetService = service.getInstance();
const stateToPropertyMapper = (state,ownProps) => ({
    tId: ownProps.tId,
    widgets: state.widgetReducer.widgets,
    previews: state.widgetReducer.previews
})

const propertyToDispatchMapper = dispatch => ({
    createWidget: (tId) =>
    widgetService
        .createWidgetForTopic(tId,{
            name: 'New Widget',
            type: 'Heading',
            size: 'h1',
            text: 'hello world',
            list: 'ul',
            url:  'https://www.amazon.com',
            ltext: ["Hello","World"]
            })
        .then(() =>
            widgetService
                .findAllWidgetsForTopic(tId))
        .then(widgets =>
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

    updateWidgets: (previews,tId) =>
            widgetService
            .saveChanges(previews,tId)
                .then(widgets =>
                dispatch({
                    type: 'UPDATE_WIDGETS',
                    widgets: widgets
                })
            )
        ,
    deleteWidget: (widgetId,tId) =>
        widgetService.deleteWidget(widgetId)
            .then(() =>
                widgetService
                    .findAllWidgetsForTopic(tId))
            .then(widgets =>
                dispatch({type: 'DELETE_WIDGET',
                    widgets: widgets}))
    ,
    findAllWidgets: (tId) =>
        widgetService
            .findAllWidgetsForTopic(tId)
            .then(widgets =>
        dispatch({type: 'FIND_ALL_WIDGETS',
        widgets: widgets})),
    initComponent: (tId) =>
        widgetService
            .findAllWidgetsForTopic(tId)
            .then(widgets =>
                dispatch(
                    {type: 'INIT_COMPONENT',
                    widgets: widgets})),
    updatePreviews: (newPreviews) =>
    dispatch({type: 'UPDATE_PREVIEWS',
    previews: newPreviews})
    ,
    findWidget: (widgetId) =>
        widgetService.findWidget(widgetId)
            .then(widget =>
                dispatch({type: 'FIND_WIDGET',
                    widget: widget})
        )
    ,
})

const WidgetListContainer = connect(
    stateToPropertyMapper,
    propertyToDispatchMapper
)(WidgetList)

export default WidgetListContainer