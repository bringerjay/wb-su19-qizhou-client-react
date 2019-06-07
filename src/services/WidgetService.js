export default class WidgetService {
    static myInstance = null;
    static getInstance() {
        if (WidgetService.myInstance == null) {
            WidgetService.myInstance =
                new WidgetService();
        }
        return this.myInstance;
    }

    createWidget = widget =>
        fetch("http://localhost:8080/api/widgets",
            {method: 'POST',
            body: JSON.stringify(widget),
            headers: {
                'content-type': 'application/json'
            }})
            .then(function(response) {return response.json()})

    findAllWidgets = () =>
        fetch("http://localhost:8080/api/widgets")
            .then(function(response) {return response.json()})
        //widgets

    /**findWidgetById = widgetId => {
        return widgets.find(widget => widget.id == widgetId)
    }
    deleteWidget = widgetId => {
        widgets = widgets.filter(widget => widget.id !== widgetId)
    }
    udpateWidget = (widgetId, newwidget) => {
        widgets = widgets.map(widget => {
            if(widget.id != widgetId)
                return widget;
            else
                return newwidget;
        })
    }**/
}
