import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "./context/Provider";
import reducer, { initialState } from "./context/reducer";

ReactDOM.render(
  <React.StrictMode>
    <Provider initialState={initialState} reducer={reducer}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
