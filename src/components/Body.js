import React from "react";
import "./styles/index.css";
import Header from "./Header";
import {  Redirect, Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import SearchView from "./SearchView";
import Mysongs from "./Mysongs"

function Body({ spotify }) {



  return (
    <div className="body">
      <Header />

      {/* <HomePage /> */}

      <Switch>
      <Route  exact path="/home">
          <Redirect to="/home/homepage" />
        </Route>
        <Route  path="/home/homepage" component={HomePage} />
        <Route  path="/home/search" component={SearchView} />
        <Route  path = '/home/mysongs' component={Mysongs} />
      </Switch>
    </div>
  );
}

export default Body;
