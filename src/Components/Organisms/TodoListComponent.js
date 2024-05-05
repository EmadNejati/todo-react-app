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
  let [newId , setNewId]= useState(5);

  let [currentTaskTitle, setCurrentTaskTitle] = useState("");
  let [currentTaskCaption, setCurrentTaskCaption] = useState("");
  let [currentTaskDate, setCurrentTaskDate] = useState("");
  let [currentTaskId, setCurrentTaskId] = useState();

  let [taskList, setTaskList] = useState([
    {
      title: "static test 4",
      text: "this static sample number 4",
      date: "2024-11-06",
      id:4
    },
    {
      title: "static test 3",
      text: "this static sample number 3",
      date: "2025-05-26",
      id:3
    },
    {
      title: "static test 2",
      text: "this static sample number 2",
      date: "2023-02-10",
      id:2
    },
    {
      title: "static test 1",
      text: "this static sample number 1",
      date: "2021-07-16",
      id:1
    },
  ]);
  const submitNewTask = () => {
    const newTaskList = [
      { title: newTitle, text: newTask, date: newDate , id: newId },
      ...taskList,
    ];
    if (newTitle && newTask && newDate) {
      setTaskList(newTaskList);
      setNewId(newId+1)
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
        currentTaskId ={currentTaskId}
        setCurrentTaskTitle={setCurrentTaskTitle}
        setCurrentTaskCaption={setCurrentTaskCaption}
        setCurrentTaskDate={setCurrentTaskDate}
        setCurrentTaskId ={setCurrentTaskId}
      />
      <Editpanel
        taskList={taskList}
        setTaskList={setTaskList}
        currentTaskTitle={currentTaskTitle}
        currentTaskCaption={currentTaskCaption}
        currentTaskDate={currentTaskDate}
        currentTaskId ={currentTaskId}
        setCurrentTaskTitle={setCurrentTaskTitle}
        setCurrentTaskCaption={setCurrentTaskCaption}
        setCurrentTaskDate={setCurrentTaskDate}
        setCurrentTaskId ={setCurrentTaskId}
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
