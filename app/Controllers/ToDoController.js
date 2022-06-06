import { todoService } from "../Services/ToDoService.js"
import { Pop } from "../Utils/Pop.js"
import { ProxyState } from "../AppState.js";

function getTime() {
    let date = new Date()
    document.getElementById('current-time').innerText = date.toLocaleTimeString()

}
setInterval(getTime, 1000)

function _drawToDos() {
    let toDos = ProxyState.toDos
    let todoCount = 0
    let todoTotal = 0
    let template = ''
    toDos.forEach(t => {
        template += t.ToDosTemplate
        if (t.completed) {
            todoCount++
        }
        if (t.description) {
            todoTotal++
        }
    })
    document.getElementById('todo-total').innerText = todoTotal
    document.getElementById('todo-list').innerHTML = template
    document.getElementById('todo-count').innerText = todoCount
}



export class ToDoController {
    constructor() {
        // console.log('todo controller');
        // this.getToDo()
        ProxyState.on('toDos', _drawToDos)
        this.getToDos()
        getTime()


    }

    async getToDos() {
        try {
            await todoService.getToDos()
        } catch (error) {
            console.error(error)
            Pop.toast(error.message, 'error')
        }

    }

    async addToDos() {
        window.event.preventDefault()
        let form = window.event.target
        let todoData = {
            description: form.description.value
        }

        todoService.addToDos(todoData)
        form.reset()
    }

    async completeToDo(id) {
        try {
            await todoService.completeToDo(id)
        } catch (error) {
            console.error(error)
            Pop.toast(error.message, 'error')
        }


    }

    deleteToDos(id) {
        if (confirm('Are you sure?')) {
            todoService.deleteToDos(id)
        }

    }

}