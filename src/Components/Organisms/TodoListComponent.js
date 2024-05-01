import "./TodoListComponent.css";
import AddNew from "../Molecules/AddNew";
import TodoListContainer from "../Molecules/TodoListContainer";
import AddNewTaskBtn from "../Molecules/AddNewTaskBtn";
import { useState } from "react";

function TodoListComponent() {
  let [newTask, setNewTask] = useState("");
  let [newTitle, setNewTitle] = useState("");
  let [newDate, setNewDate] = useState("");
  let [taskList, setTaskList] = useState([
    { title: "example", text: "this first static sample", date: "2024/02/16" },
  ]);
  const submitNewTask = () => {
    const newTaskList = [
      ...taskList,
      { title: newTitle, text: newTask, date: newDate },
    ];
    if (newTitle && newTask && newDate) {
      setTaskList(newTaskList);
      setNewDate("");
      setNewTask("");
      setNewTitle("");
    } else return;
  };
  return (
    <div className="full_modul__container">
      <TodoListContainer taskList={taskList} />
      {/* <AddNewTaskBtn  /> */}
      <AddNew
        newTask={newTask}
        setNewTask={setNewTask}
        submitNewTask={submitNewTask}
        newDate={newDate}
        setNewDate={setNewDate}
        newTitle={newTitle}
        setNewTitle={setNewTitle}
      />
    </div>
  );
}

export default TodoListComponent;
