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
            {
                method: 'POST',
                body: JSON.stringify(widget),
                headers: {
                    'content-type': 'application/json'
                }
            })
            .then(function (response) {
                return response.json()
            })


    findAllWidgets = () =>
        fetch("http://localhost:8080/api/widgets")
            .then(function (response) {
                return response.json()
            })

    //findWidgetById = widgetId => {
    //return widgets.find(widget => widget.id == widgetId)
    //}
    deleteWidget = widgetId =>
        fetch(`http://localhost:8080/api/widgets/${widgetId}`,
            {method: 'DELETE'})
            .then(function (response) {
                return response.json()
            })
    updateWidget = newwidget =>
        fetch(`http://localhost:8080/api/widgets/${newwidget.id}`,
            {
                method: 'PUT',
                body: JSON.stringify(newwidget),
                headers: {
                    'content-type': 'application/json'
                }
            })
            .then(function (response) {
                return response.json()
            })
    saveChanges = preview =>
        fetch(`http://localhost:8080/api/widgets`,
            {
                method: 'PUT',
                body: JSON.stringify(preview),
                headers: {
                    'content-type': 'application/json'
                }
            })
            .then(function (response) {
                return response.json()
            })

}
