import TodoList from "../Atoms/TodoList";
import TodoListHeader from "../Atoms/TodoListHeader";

import "./TodoListContainer.css"

function TodoListContainer(
    { 
        taskList,
        setTaskList,

        currentTaskTitle,
        currentTaskCaption,
        currentTaskDate,
        currentTaskId,

        
        setCurrentTaskTitle,
        setCurrentTaskCaption,
        setCurrentTaskDate,
        setCurrentTaskId,
    }) {
    return (<div className="list__container">
        <TodoListHeader />
        <TodoList
            taskList={taskList}
            setTaskList={setTaskList}

            currentTaskTitle={currentTaskTitle}
            currentTaskCaption={currentTaskCaption}
            currentTaskDate={currentTaskDate}
            currentTaskId = {currentTaskId}

            setCurrentTaskTitle={setCurrentTaskTitle}
            setCurrentTaskCaption={setCurrentTaskCaption}
            setCurrentTaskDate={setCurrentTaskDate}
            setCurrentTaskId = {setCurrentTaskId}
        />
    </div>)
}

export default TodoListContainer