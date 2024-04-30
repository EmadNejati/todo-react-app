import "./DatePicker.css"

function DatePicker({newDate,setNewDate}){
    return(<div className="date__picker">
        <input type="date" value={newDate} onChange={(e)=>setNewDate(e.target.value)}/>
    </div>)
}

export default DatePicker