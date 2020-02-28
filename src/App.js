import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./screens/Login";
import Register from "./screens/Register";
import "popper.js";
import "jquery/src/jquery";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
