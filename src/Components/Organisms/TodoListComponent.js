import "./TodoListComponent.css";
import AddNew from "../Molecules/AddNew";
import TodoListContainer from "../Molecules/TodoListContainer";
import AddNewTaskBtn from "../Molecules/AddNewTaskBtn";
import Editpanel from "../Molecules/Editpanel";
import { useState } from "react";

function TodoListComponent() {
  let [newTask, setNewTask] = useState("");
  let [newTitle, setNewTitle] = useState("");
  let [newDate, setNewDate] = useState("");

  let [currentTaskTitle, setCurrentTaskTitle] = useState("");
  let [currentTaskCaption, setCurrentTaskCaption] = useState("");
  let [currentTaskDate, setCurrentTaskDate] = useState("");

  let [taskList, setTaskList] = useState([
    {
      title: "static test 4",
      text: "this static sample number 4",
      date: "2024-11-06",
    },
    {
      title: "static test 3",
      text: "this static sample number 3",
      date: "2025-05-26",
    },
    {
      title: "static test 2",
      text: "this static sample number 2",
      date: "2023-02-10",
    },
    {
      title: "static test 1",
      text: "this static sample number 1",
      date: "2021-07-16",
    },
  ]);
  const submitNewTask = () => {
    const newTaskList = [
      { title: newTitle, text: newTask, date: newDate },
      ...taskList,
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
      <TodoListContainer
        taskList={taskList}
        setTaskList={setTaskList}
        currentTaskTitle={currentTaskTitle}
        currentTaskCaption={currentTaskCaption}
        currentTaskDate={currentTaskDate}
        setCurrentTaskTitle={setCurrentTaskTitle}
        setCurrentTaskCaption={setCurrentTaskCaption}
        setCurrentTaskDate={setCurrentTaskDate}
      />
      <Editpanel
        currentTaskTitle={currentTaskTitle}
        currentTaskCaption={currentTaskCaption}
        currentTaskDate={currentTaskDate}
        setCurrentTaskTitle={setCurrentTaskTitle}
        setCurrentTaskCaption={setCurrentTaskCaption}
        setCurrentTaskDate={setCurrentTaskDate}
      />
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
