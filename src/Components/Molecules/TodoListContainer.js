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
        currentStatus,
        
        setCurrentTaskTitle,
        setCurrentTaskCaption,
        setCurrentTaskDate,
        setCurrentTaskId,
        setCurrentStatus
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
            currentStatus ={currentStatus}

            setCurrentTaskTitle={setCurrentTaskTitle}
            setCurrentTaskCaption={setCurrentTaskCaption}
            setCurrentTaskDate={setCurrentTaskDate}
            setCurrentTaskId = {setCurrentTaskId}
            setCurrentStatus={setCurrentStatus}
        />
    </div>)
}

export default TodoListContainer