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
  let [newStatus , setNewStatus] = useState(false);

  let [currentTaskTitle, setCurrentTaskTitle] = useState("");
  let [currentTaskCaption, setCurrentTaskCaption] = useState("");
  let [currentTaskDate, setCurrentTaskDate] = useState("");
  let [currentTaskId, setCurrentTaskId] = useState();
  let [currentStatus, setCurrentStatus] = useState();

  let [taskList, setTaskList] = useState([
    {
      title: "static test 4",
      text: "this static sample number 4",
      date: "2024-11-06",
      id:4,
      status:false
    },
    {
      title: "static test 3",
      text: "this static sample number 3",
      date: "2025-05-26",
      id:3,
      status:false
    },
    {
      title: "static test 2",
      text: "this static sample number 2",
      date: "2023-02-10",
      id:2,
      status:false
    },
    {
      title: "static test 1",
      text: "this static sample number 1",
      date: "2021-07-16",
      id:1,
      status:false
    },
  ]);
  const submitNewTask = () => {
    const newTaskList = [
      { title: newTitle, text: newTask, date: newDate , id: newId , status: newStatus},
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
        currentStatus={currentStatus}
        setCurrentTaskTitle={setCurrentTaskTitle}
        setCurrentTaskCaption={setCurrentTaskCaption}
        setCurrentTaskDate={setCurrentTaskDate}
        setCurrentTaskId ={setCurrentTaskId}
        setCurrentStatus={setCurrentStatus}
      />
      <Editpanel
        taskList={taskList}
        setTaskList={setTaskList}
        currentTaskTitle={currentTaskTitle}
        currentTaskCaption={currentTaskCaption}
        currentTaskDate={currentTaskDate}
        currentTaskId ={currentTaskId}
        currentStatus = {currentStatus}

        setCurrentTaskTitle={setCurrentTaskTitle}
        setCurrentTaskCaption={setCurrentTaskCaption}
        setCurrentTaskDate={setCurrentTaskDate}
        setCurrentTaskId ={setCurrentTaskId}
        setCurrentStatus={setCurrentStatus}
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
        status={newStatus}
        setStatus={setNewStatus}
      />
    </div>
  );
}

export default TodoListComponent;
