import { Link, useHistory, useLocation } from "react-router-dom";
import Authcheckboolean from "../../middleware/authcheckboolean";
import Navbar from "../Navbar";

const Viewpage = () => {
  const history = useHistory();
  // using params
  // const params = useParams();
  // const getid = params.id;
  const lists = localStorage.getItem("todo")
    ? JSON.parse(localStorage.getItem("todo"))
    : [];
  const getlocation = useLocation();
  const urlparams = new URLSearchParams(getlocation.search);
  const getid = urlparams.get("id");
  const data = lists[getid];
  const deletetodo = () => {
    lists.splice(getid, 1);
    localStorage.setItem("todo", JSON.stringify(lists));
    history.replace("/");
  };
  return (
    <>
      <Navbar />
      <div className="todo_container">
        <button
          onClick={() => {
            history.push("/");
          }}
          style={{ background: "#e7e7e7", color: "#666" }}
        >
          Go back
        </button>
        <div
          style={{
            background: "#e7e7e7",
            padding: "20px",
            fontSize: "20px",
            margin: "20px",
          }}
        >
          {data}
        </div>
        {Authcheckboolean() ? (
          <>
            <button style={{ background: "red" }} onClick={deletetodo}>
              Delete to-do
            </button>
          </>
        ) : (
          <>
            <p>
              Please Login to see more option{" "}
              <Link to="/login">Login now!</Link>
            </p>
          </>
        )}
      </div>
    </>
  );
};

export default Viewpage;
