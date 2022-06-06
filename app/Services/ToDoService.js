import { ProxyState } from "../AppState.js"
import { ToDo } from "../Models/ToDo.js"

const sandboxApi = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/'

})

class ToDoService {

    async getToDos() {
        // console.log('service reached');
        const res = await sandboxApi.get('seth/toDos')
        // console.log('getting todo', res.data);
        ProxyState.toDos = res.data.map(t => new ToDo(t))

    }

    async addToDos(todoData) {
        const res = await sandboxApi.post('seth/toDos', todoData)
        console.log('create todo', res.data);
        ProxyState.toDos = [...ProxyState.toDos, new ToDo(res.data)]
        ProxyState.toDos = ProxyState.toDos

    }

    async completeToDo(id) {
        // console.log('complete todo');
        let toDo = ProxyState.toDos.find(t => t.id == id)
        // console.log(toDo);
        toDo.completed = !toDo.completed
        const res = await sandboxApi.put('seth/toDos/' + toDo.id, toDo)
        ProxyState.toDos = ProxyState.toDos
        // console.log(res);


    }

    async deleteToDos(id) {
        const res = await sandboxApi.delete('seth/toDos/' + id)
        console.log('deleting todo', res);
        ProxyState.toDos = ProxyState.toDos.filter(t => t.id != id)
        ProxyState.toDos = ProxyState.toDos
    }
}


export const todoService = new ToDoService()