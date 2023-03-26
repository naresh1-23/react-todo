import { useHistory } from "react-router-dom";

const Authcheck = () => {
  const history = useHistory();
  if (localStorage.getItem("logged")) {
  } else {
    history.push("/login");
  }
  //!localStorage.getItem("logged") && history.push("/login");
};
export default Authcheck;
