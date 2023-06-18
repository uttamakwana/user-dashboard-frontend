import React, { createContext, useState, useEffect } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [activeToggle, setActiveToggle] = useState(false);
  return (
    <Context.Provider value={{ activeToggle, setActiveToggle }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
