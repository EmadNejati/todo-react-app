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
  currentStatus,
  setCurrentTaskTitle,
  setCurrentTaskCaption,
  setCurrentTaskDate,
  setCurrentTaskId,
  setCurrentStatus
}) {
  const doneTask = (index) => {
    const tempCurrentList = taskList
    tempCurrentList[index].status= !tempCurrentList[index].status
    setTaskList(tempCurrentList)
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
  const doneTaskStyle={
    backgroundColor:"red",
  }
  return (
    <div className="todo__list">
      <ol id="taskList">
        {taskList.map((item, index) => (
          <li key={index} style={item.status === true ? doneTaskStyle:{}} onDoubleClick={() => doneTask(index)}>
            <div style={index % 2 === 0 ? evenTitleStyle : oddTitleStyle}>
              {item.title}
            </div>
            <div>{item.text}</div>
            <div>{item.date}</div>
            {<RiDeleteBin6Line onClick={() => delListItem(index)} />}
            {<RiEdit2Line onClick={() => editlistItem(index)} />}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default TodoList;
