import React, { useEffect } from "react";
import "./App.css";
import Login from "./Pages/Login";
import Player from "./Pages/Player";
import { useProvider } from "./context/Provider";
import { BrowserRouter as Router, Route, Switch , Redirect } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import AuthRoute from "./utill/AuthRoute";
import { checkToken } from "./context/actions";


function App() {
  const [ {} , dispatch] = useProvider();

  useEffect(() => {
    checkToken(dispatch);
  },[]);
  return (
    <Router>
      <Switch>
        <Route  exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route  path="/home" component={Player} />
        <AuthRoute exact path="/login" component={Login} />
        <AuthRoute exact path="/register" component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
