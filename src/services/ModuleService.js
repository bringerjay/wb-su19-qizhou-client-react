export default class ModuleService {
    static myInstance = null;

    static getInstance() {
        if (ModuleService.myInstance == null) {
            ModuleService.myInstance =
                new ModuleService();
        }
        return this.myInstance;
    }
    createModuleForCourse = (cId,newModule) =>

        fetch(`http://localhost:8080/api/courses/${cId}/modules`,
            {
                method: 'POST',
                body: JSON.stringify(newModule),
                headers: {
                    'content-type': 'application/json'
                }
            })
            .then(function (response) {
                return response.json()
            })

    findAllModulesForCourse = cId =>
        fetch(`http://localhost:8080/api/courses/${cId}/modules`)
            .then(function (response) {
                return response.json()
            })

    deleteModuleById = mId =>
        fetch(`http://localhost:8080/api/modules/${mId}`,
            {method: 'DELETE'})

    findModuleById = mId =>
        fetch(`http://localhost:8080/api/modules/${mId}`)
            .then(function (response) {
                return response.json()
            })

    updateModule = (mId,newModule) =>
        fetch(`http://localhost:8080/api/modules/${mId}`,
            {
                method: 'PUT',
                body: JSON.stringify(newModule),
                headers: {
                    'content-type': 'application/json'
                }
            }).then(function (response) {
            return response.json()
        })
}