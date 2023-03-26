import { Link, Route, useHistory } from "react-router-dom";
import Navbar from "../Navbar";

const Login = () => {
  const history = useHistory();
  const loggedin = () => {
    localStorage.setItem("logged", true);
    alert("You are Logged in.");
    history.replace("/");
  };
  return (
    <>
      <Navbar />
      <div className="todo_container">
        {localStorage.getItem("logged") ? (
          <>
            You are already logged in!
            <br />
            <br />
            <b
              onClick={() => {
                localStorage.removeItem("logged");
                history.push("/");
              }}
              style={{ color: "red", cursor: "pointer" }}
            >
              Logout
            </b>
          </>
        ) : (
          <>
            <button onClick={loggedin}>Log in</button>
            <br />
            <br />
            <Link to="/login/Info">Nested Route | Logged in Info</Link>
            <br />
            <br />
            <Route path="/login/Info">You Can Log in</Route>
          </>
        )}
      </div>
    </>
  );
};

export default Login;
