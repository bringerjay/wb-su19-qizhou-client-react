export default class WidgetService {
    static myInstance = null;

    static getInstance() {
        if (WidgetService.myInstance == null) {
            WidgetService.myInstance =
                new WidgetService();
        }
        return this.myInstance;
    }

    createWidgetForTopic = (tId,newWidget) =>

        fetch(`http://localhost:8080/api/topics/${tId}/widgets`,
            {
                method: 'POST',
                body: JSON.stringify(newWidget),
                headers: {
                    'content-type': 'application/json'
                }
            })
            .then(function (response) {
                return response.json()
            })


    findAllWidgetsForTopic = (tId) =>
        fetch(`http://localhost:8080/api/topics/${tId}/widgets`)
            .then(function (response) {
                return response.json()
            })
    findWidget = widgetId =>
        fetch(`http://localhost:8080/api/widgets/${widgetId}`)
            .then(function (response) {
                return response.json()
            })
    deleteWidget = widgetId =>
        fetch(`http://localhost:8080/api/widgets/${widgetId}`,
            {method: 'DELETE'})
    updateWidget = newWidget =>
        fetch(`http://localhost:8080/api/widgets/${newWidget.id}`,
            {
                method: 'PUT',
                body: JSON.stringify(newWidget),
                headers: {
                    'content-type': 'application/json'
                }
            })
            .then(function (response) {
                return response.json()
            })
    saveChanges = (tId,preview) =>
        fetch(`http://localhost:8080/api/topics/${tId}/widgets`,
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
