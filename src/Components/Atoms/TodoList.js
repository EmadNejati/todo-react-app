import { RiDeleteBin6Line } from "react-icons/ri";
import { RiEdit2Line } from "react-icons/ri";
import "./TodoList.css";

function TodoList({
  taskList,
  setTaskList,
  currentTaskTitle,
  currentTaskCaption,
  currentTaskDate,
  currentTaskId,
  setCurrentTaskTitle,
  setCurrentTaskCaption,
  setCurrentTaskDate,
  setCurrentTaskId
}) {
  const doneTask = (e) => {
    console.log(e);
  };
  function delListItem(index) {
    const newListItem = taskList.filter((item, currentIndex) => currentIndex !== index);
    setTaskList(newListItem);
  }
  function editlistItem(index) {
    const currentItem = taskList[index]
    setCurrentTaskTitle(taskList[index].title)
    setCurrentTaskCaption(taskList[index].text)
    setCurrentTaskDate(taskList[index].date)
    setCurrentTaskId(taskList[index].id)
    console.log(currentItem);
  }
  const oddTitleStyle = {
    backgroundColor: "red ",
    width: "100%",
    color: "white",
    backgroundColor: "rgb(2 203 203)",
    fontWeight: "bolder",
  };
  const evenTitleStyle = {
    color: "white",
    backgroundColor: "#9e9e9e",
    width: "100%",
    fontWeight: "bolder",
  };
  return (
    <div className="todo__list">
      <ol id="taskList">
        {taskList.map((item, index) => (
          <li key={index} onDoubleClick={(e) => doneTask(e)}>
            <div style={index % 2 === 0 ? evenTitleStyle : oddTitleStyle}>
              {item.title}
            </div>
            <div>{item.text}</div>
            <div>{item.date}</div>
            {<RiDeleteBin6Line onClick={(e) => delListItem(index)} />}
            {<RiEdit2Line onClick={(e) => editlistItem(index)} />}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default TodoList;
