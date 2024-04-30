import "./AddBtn.css"

function AddBtn({submitNewTask}) {
    return (<button className="btn add__btn" onClick={submitNewTask} >Add</button>)
}

export default AddBtn