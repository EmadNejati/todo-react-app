import AddBtn from "../Atoms/AddBtn";
import InputTxt from "../Atoms/InputTxt";
import ColorPicker from "../Atoms/ColorPicker";
import DatePicker from "../Atoms/DatePicker";
import TitleText from "../Atoms/TitleText";

import "./AddNew.css";
import { useState } from "react";

function AddNew({
  newTask,
  setNewTask,
  submitNewTask,
  newDate,
  setNewDate,
  newTitle,
  setNewTitle,
}) {

  return (
    <div className="new__task__container">
      <TitleText
        
        newTitle={newTitle}
        setNewTitle={setNewTitle}
      />
      <InputTxt newTask={newTask} setNewTask={setNewTask} />
      <DatePicker newDate={newDate} setNewDate={setNewDate} />
      <AddBtn submitNewTask={submitNewTask} />
    </div>
  );
}

export default AddNew;
