import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Login from "./Containers/Login/Login";
import Admin from "./Containers/Admin/Admin";
import Location from "./Containers/Location/Location";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import PublicRoute from "./Components/PublicRoute/PublicRoute";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <PrivateRoute component={Admin} path="/admin" exact />

          <PublicRoute restricted={true} component={Login} path="/" exact />

          <PrivateRoute component={Location} path="/Location/:id" exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
