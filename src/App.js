import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Login from "./Containers/Login/Login";
import Admin from "./Containers/Admin/Admin";
import Project from "./Containers/Project/Project";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import PublicRoute from "./Components/PublicRoute/PublicRoute";
import AppBar from "./Containers/Header/Header";
function App() {
  return (
    <div>
      <Router>
        <AppBar />

        <Switch>
          <PrivateRoute component={Admin} path="/admin" exact />

          <PublicRoute restricted={true} component={Login} path="/" exact />

          <PrivateRoute component={Project} path="/Project/:id" exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
