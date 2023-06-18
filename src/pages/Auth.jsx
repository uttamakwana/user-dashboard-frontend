import React, { useState } from "react";

import Login from "./Login/Login";
import Register from "./Register/Register";

const Auth = () => {
  const [newUser, setNewUser] = useState(false);
  return (
    <section className="auth">{newUser ? <Register /> : <Login />}</section>
  );
};

export default Auth;
