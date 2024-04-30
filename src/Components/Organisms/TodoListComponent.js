import "./TodoListComponent.css"
import AddNew from "../Molecules/AddNew"
import TodoListContainer from "../Molecules/TodoListContainer"
import AddNewTaskBtn from "../Molecules/AddNewTaskBtn"


import { useState } from "react"

function TodoListComponent() {
    return (<div className="full_modul__container">
        <TodoListContainer />
        <AddNewTaskBtn  />
        <AddNew />
    </div>)
}

export default TodoListComponent