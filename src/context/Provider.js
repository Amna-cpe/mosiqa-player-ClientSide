import React, { createContext, useContext, useReducer } from "react";

export const contextProvider = createContext();

export const Provider = ({ initialState, reducer, children }) => (
  <contextProvider.Provider value={useReducer(reducer, initialState)}>
    {children}
  </contextProvider.Provider>
);

export const useProvider = () => useContext(contextProvider);
