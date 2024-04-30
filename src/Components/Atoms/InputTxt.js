import "./InputTxt.css"

function InputTxt({newTask, setNewTask}){
    return (<div className="input__todo">
        <input type="text" placeholder="To Do ..." id="inputTxt" value={newTask} onChange={(e)=>setNewTask(e.target.value)} />
    </div>)
}

export default InputTxt