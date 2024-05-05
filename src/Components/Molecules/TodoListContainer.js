import TodoList from "../Atoms/TodoList";
import TodoListHeader from "../Atoms/TodoListHeader";

import "./TodoListContainer.css"

function TodoListContainer(
    { taskList,
        setTaskList,
        currentTaskTitle,
        currentTaskCaption,
        currentTaskDate,
        setCurrentTaskTitle,
        setCurrentTaskCaption,
        setCurrentTaskDate
    }) {
    return (<div className="list__container">
        <TodoListHeader />
        <TodoList
            taskList={taskList}
            setTaskList={setTaskList}
            currentTaskTitle={currentTaskTitle}
            currentTaskCaption={currentTaskCaption}
            currentTaskDate={currentTaskDate}
            setCurrentTaskTitle={setCurrentTaskTitle}
            setCurrentTaskCaption={setCurrentTaskCaption}
            setCurrentTaskDate={setCurrentTaskDate}
        />
    </div>)
}

export default TodoListContainer