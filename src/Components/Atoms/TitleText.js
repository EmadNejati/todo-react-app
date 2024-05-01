import "./TitleText.css"

function TitleText({newTitle , setNewTitle}){
    return (<div className="title__todo">
        <input type="text" placeholder="Title" id="titleText" value={newTitle} onChange={(e)=>setNewTitle(e.target.value)} />
    </div>)
}

export default TitleText