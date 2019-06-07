import React from 'react'
import WidgetList from '../components/WidgetList'
import {connect} from 'react-redux'
import service from '../services/WidgetService'
const widgetService = service.getInstance();

const stateToPropertyMapper = state => ({
    widgets: state.widgets
})

const propertyToDispatchMapper = dispatch => ({
    createWidgets: () =>
    widgetService
        .createWidget({
            name: 'New Widget',
            type: 'HEADING'
            }).then(widgets =>
        dispatch({
            type: 'CREATE_WIDGET',
            widgets: widgets
        })
    )
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