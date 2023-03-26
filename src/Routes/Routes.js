import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import AddToDo from "../pages/Addtodo/Addtodo";
import Login from "../pages/Login/Login";
import MainPage from "../pages/Mainpage/Mainpage";
import Notfound from "../pages/notfound/Notfound";
import Viewpage from "../pages/ViewPage/Viewpage";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home"></Redirect>
        </Route>
        <Route path="/home" component={MainPage} exact></Route>
        <Route path="/addtodo" component={AddToDo} exact>
          <AddToDo />
        </Route>
        <Route path="/login" component={Login}>
          <Login />
        </Route>
        {/* <Route path="/view/:id" component={Viewpage} exact></Route> */}
        <Route path="/view" component={Viewpage} exact></Route>
        <Route path="*">
          <Notfound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
