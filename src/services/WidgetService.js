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

        fetch("https://webdev1-qizhou.herokuapp.com/api/widgets",
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
        fetch("https://webdev1-qizhou.herokuapp.com/api/widgets")
            .then(function (response) {
                return response.json()
            })
    findWidget = widgetId =>
        fetch(`https://webdev1-qizhou.herokuapp.com/api/widgets/${widgetId}`)
            .then(function (response) {
                return response.json()
            })
    deleteWidget = widgetId =>
        fetch(`https://webdev1-qizhou.herokuapp.com/api/widgets/${widgetId}`,
            {method: 'DELETE'})
            .then(function (response) {
                return response.json()
            })
    updateWidget = newwidget =>
        fetch(`https://webdev1-qizhou.herokuapp.com/api/widgets/${newwidget.id}`,
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
        fetch(`https://webdev1-qizhou.herokuapp.com/api/widgets`,
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
