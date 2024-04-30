import TodoList from "../Atoms/TodoList";
import TodoListHeader from "../Atoms/TodoListHeader";

import "./TodoListContainer.css"

function TodoListContainer(props) {
    return (<div className="list__container">
        <TodoListHeader />
        <TodoList />
    </div>)
}

export default TodoListContainer