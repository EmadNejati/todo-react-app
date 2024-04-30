import TodoList from "../Atoms/TodoList";
import TodoListHeader from "../Atoms/TodoListHeader";

import "./TodoListContainer.css"

function TodoListContainer({taskList}) {
    return (<div className="list__container">
        <TodoListHeader />
        <TodoList taskList={taskList}/>
    </div>)
}

export default TodoListContainer