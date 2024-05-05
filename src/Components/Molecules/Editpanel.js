import "./Editpanel.css"
import "../Atoms/AddBtn.css"
function Editpanel({ taskList, setTaskList, currentTaskTitle, currentTaskCaption, currentTaskDate, currentTaskId, setCurrentTaskTitle, setCurrentTaskCaption, setCurrentTaskDate, setCurrentTaskId }) {
    function editTitleHandler(value) {
        setCurrentTaskTitle(value)
        console.log(value);
    }
    function editCaptionHandler(value) {
        setCurrentTaskCaption(value)
        console.log(value);
    }
    function editDateHandler(value) {
        setCurrentTaskDate(value)
        console.log(value);
    }
    function submitEditedTask() {
        console.log(currentTaskId);
        let newlist=[...taskList]
        console.log(newlist);
        newlist.map((item, index) => {
            if (item.id === currentTaskId) {
                const editedItem =
                    { title: currentTaskTitle, text: currentTaskCaption, date: currentTaskDate, id: currentTaskId }
                    newlist[index]=editedItem 
            }
            setTaskList(newlist)
            setCurrentTaskCaption("")
            setCurrentTaskDate("")
            setCurrentTaskTitle("")

        })
    }
    return (
        <div className="edit__pannel">
            <div className="form__container">
                <input className="input__style" type="text" placeholder="Title" value={currentTaskTitle} onChange={(e) => editTitleHandler(e.target.value)} />
                <input className="input__style" type="text" placeholder="Caption" value={currentTaskCaption} onChange={(e) => editCaptionHandler(e.target.value)} />
                <input className="input__style" type="date" value={currentTaskDate} onChange={(e) => editDateHandler(e.target.value)} />
                <button className="add__btn" onClick={submitEditedTask}>Edit</button>
            </div>
        </div>
    )
}

export default Editpanel