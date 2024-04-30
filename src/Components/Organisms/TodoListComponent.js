import "./TodoListComponent.css"
import AddNew from "../Molecules/AddNew"
import TodoListContainer from "../Molecules/TodoListContainer"
import AddNewTaskBtn from "../Molecules/AddNewTaskBtn"
import { useState } from "react"

function TodoListComponent() {
    let [newTask,setNewTask]=useState("")
    let [newDate,setNewDate]=useState("")
    let [taskList,setTaskList]=useState([{text:"this first static sample",date:"2024/02/16"}])
    const submitNewTask = () => {
        const newTaskList=[...taskList,{text:newTask , date:newDate}]
        setTaskList(newTaskList)
    }
    return (<div className="full_modul__container">
        <TodoListContainer taskList={taskList}  />
        {/* <AddNewTaskBtn  /> */}
        <AddNew newTask={newTask}  setNewTask={setNewTask} submitNewTask={submitNewTask} newDate={newDate} setNewDate={setNewDate}/>
    </div>)
}

export default TodoListComponent