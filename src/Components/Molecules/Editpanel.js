import "./Editpanel.css"
import "../Atoms/AddBtn.css"
function Editpanel({ currentTaskTitle, currentTaskCaption, currentTaskDate }) {

    return (
        <div className="edit__pannel">
            <div className="form__container">
                <input className="input__style" type="text" placeholder="Title" value={currentTaskTitle} />
                <input className="input__style" type="text" placeholder="Caption" value={currentTaskCaption} />
                <input className="input__style" type="date" value={currentTaskDate} />
                <button className="add__btn">Edit</button>
            </div>
        </div>
    )
}

export default Editpanel