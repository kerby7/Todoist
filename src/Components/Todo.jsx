import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const Todo = ({ task, toggleDone, deleteTodo, updateTodo}) => {
  return (
    <div className="Todo">
      <p
        onClick={() => {
          toggleDone(task.id);
        }}
        className={`${task.completed ? "completed" : ""}`}
      >
        {task.task}
      </p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)}></FontAwesomeIcon>
      </div>
    </div>
  );
};

