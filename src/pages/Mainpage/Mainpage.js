import Navbar from "../Navbar";
import { FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";
const MainPage = () => {
  const lists = localStorage.getItem("todo")
    ? JSON.parse(localStorage.getItem("todo"))
    : [];

  return (
    <>
      <Navbar />
      <div className="todo_container">
        <h3>Your To-do:</h3>
        {lists && lists.length > 0 ? (
          <>
            {lists.map((list, index) => (
              <>
                <div className="single_todo">
                  {list}
                  <Link to={`/view?id=${index}`}>
                    <FaRegEye size="20px" />
                  </Link>
                </div>
              </>
            ))}
          </>
        ) : (
          <>
            <p>
              Please add list first <Link to="/addtodo">Add</Link>
            </p>
          </>
        )}
      </div>
    </>
  );
};
export default MainPage;
