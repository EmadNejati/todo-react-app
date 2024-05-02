import TodoList from "../Atoms/TodoList";
import TodoListHeader from "../Atoms/TodoListHeader";

import "./TodoListContainer.css"

function TodoListContainer({taskList , setTaskList}) {
    return (<div className="list__container">
        <TodoListHeader />
        <TodoList taskList={taskList} setTaskList={setTaskList}/>
    </div>)
}

export default TodoListContainer