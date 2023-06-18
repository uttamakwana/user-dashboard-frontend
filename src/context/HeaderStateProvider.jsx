import React, { createContext } from "react";

export const HeaderContext = createContext();

const HeaderStateProvider = ({ children }) => {
  return (
    <HeaderContext.Provider
      value={{  }}
    >
      {children}
    </HeaderContext.Provider>
  );
};

export default HeaderStateProvider;
