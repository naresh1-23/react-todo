const Authcheckboolean = () => {
  let loggedin = false;
  if (localStorage.getItem("logged")) {
    loggedin = true;
  }
  return loggedin;
};
export default Authcheckboolean;
