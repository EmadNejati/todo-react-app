import { useState } from "react"
import "./TodoList.css"

function TodoList({ taskList }) {
    const doneTask=(e)=>{
        console.log(e);
    }
    return (<div className="todo__list">
        <ol id="taskList">
            {taskList.map((item, index) =>
                <li
                    key={index}
                    onDoubleClick={(e)=>doneTask(e)}
                >
                    <div>{item.title}</div>
                    <div>{item.text }</div>
                    <div>{item.date}</div>
                </li>
            )}
        </ol>
    </div>)
}

export default TodoList