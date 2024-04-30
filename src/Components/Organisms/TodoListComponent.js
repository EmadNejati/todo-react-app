import "./TodoListComponent.css"
import AddNew from "../Molecules/AddNew"
import TodoListContainer from "../Molecules/TodoListContainer"
import AddNewTaskBtn from "../Molecules/AddNewTaskBtn"
import { useState } from "react"

function TodoListComponent() {
    let [newTask,setNewTask]=useState("")
    let [taskList,setTaskList]=useState([{text:"this is first sample"},{text:"this is second sample"}])
    const submitNewTask = () => {
        const newTaskList=[...taskList,{text:newTask}]
        setTaskList(newTaskList)
    }
    return (<div className="full_modul__container">
        <TodoListContainer taskList={taskList}  />
        {/* <AddNewTaskBtn  /> */}
        <AddNew newTask={newTask} setNewTask={setNewTask} submitNewTask={submitNewTask}/>
    </div>)
}

export default TodoListComponent