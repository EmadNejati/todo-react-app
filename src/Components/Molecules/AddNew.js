import AddBtn from "../Atoms/AddBtn";
import InputTxt from "../Atoms/InputTxt";
import ColorPicker from "../Atoms/ColorPicker";
import DatePicker from "../Atoms/DatePicker";
import "./AddNew.css";

function AddNew({newTask,setNewTask,submitNewTask}) {

    return (<div className="new__task__container">
        <InputTxt newTask={newTask} setNewTask={setNewTask}/>
        <DatePicker />
        <AddBtn submitNewTask={submitNewTask} />
    </div>)
}

export default AddNew 