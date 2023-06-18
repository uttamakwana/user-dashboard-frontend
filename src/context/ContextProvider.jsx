import React, { createContext } from "react";
import HeaderStateProvider from "./HeaderStateProvider";

export const Context = createContext();
const ContextProvider = ({ children }) => {
  return (
    <Context.Provider value={{}}>
      <HeaderStateProvider>{children}</HeaderStateProvider>
    </Context.Provider>
  );
};

export default ContextProvider;
