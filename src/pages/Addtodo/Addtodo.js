import { useRef } from "react";
import { useHistory } from "react-router-dom";
import Authcheck from "../../middleware/authcheck";
import Navbar from "../Navbar";
const AddToDo = () => {
  const todoText = useRef();
  const history = useHistory();
  Authcheck();
  const addtodo = (e) => {
    e.preventDefault();
    const todoitem = todoText.current.value;
    const initialTodo = localStorage.getItem("todo")
      ? JSON.parse(localStorage.getItem("todo"))
      : [];
    initialTodo.push(todoitem);
    localStorage.setItem("todo", JSON.stringify(initialTodo));
    history.push("/");
  };
  return (
    <>
      <Navbar />
      <div className="todo_container">
        <h1>Add to-do</h1> <br />
        <form onSubmit={addtodo}>
          <input type="text" ref={todoText} />
          <button>Save to-do</button>
        </form>
      </div>
    </>
  );
};

export default AddToDo;
