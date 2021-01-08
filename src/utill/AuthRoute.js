import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useProvider } from "../context/Provider";

// IF THE USER IS IN AND AUTHENTICATED THEN HE CANNOT ACCES
// LOGIN OR LOGOUT ROUTE ONLY HOME

// ELSE THEN HE CAN ACCSE THEN ALL
function AuthRoute({ component: Component, rest }) {
  const [{ user } ] = useProvider();


  return (
    <Route
      {...rest}
      render={(props) =>
        user.Authenticated ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
}

export default AuthRoute;
