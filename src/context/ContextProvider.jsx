import React, { createContext, useState, useEffect } from "react";
export const Context = createContext();
import api from './api'

const ContextProvider = ({ children }) => {
  // to toggle the menu bar in header
  const [activeToggle, setActiveToggle] = useState(false);

  // to display add contact page / display contact page
  const [activeContactPage, setActiveContactPage] = useState("Display");

  // to display the content
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("hello");

    try {
      const user = await api.post("/users/login", {
        email,
        password,
      });

      const { accessToken } = user.data;
      console.log("usedata:", user.data);
      console.log(accessToken);

      localStorage.setItem("accessToken", accessToken);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Context.Provider
      value={{
        activeToggle,
        setActiveToggle,
        activeContactPage,
        setActiveContactPage,
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
