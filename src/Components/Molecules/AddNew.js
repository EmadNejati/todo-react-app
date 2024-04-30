import AddBtn from "../Atoms/AddBtn";
import InputTxt from "../Atoms/InputTxt";
import ColorPicker from "../Atoms/ColorPicker";
import DatePicker from "../Atoms/DatePicker";
import "./AddNew.css";

function AddNew(props) {
    const submitNewTask = () => {

    }
    return (<div className="new__task__container">
        <InputTxt />
        <DatePicker />
        <AddBtn onClick={submitNewTask} />
    </div>)
}

export default AddNew 