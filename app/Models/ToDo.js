import { generateId } from "../Utils/generateId.js"

export class ToDo {
    constructor(todoData) {
        this.id = todoData.id
        this.description = todoData.description
        this.completed = todoData.completed
    }


    get ToDosTemplate() {
        return `
        <div class="d-flex justify-content-between align-items-center">
        <input class="selectable" type="checkbox" ${this.completed ? 'checked' : ''} onclick="app.todoController.completeToDo('${this.id}')">
        <p class="m-0 p-2 ">${this.description}</p>
    <i class="mdi mdi-delete-alert selectable" onclick="app.todoController.deleteToDos('${this.id}')"></i>
    </div>
`
    }





}
