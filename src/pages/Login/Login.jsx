import React, { useContext } from "react";
import "./login.css";
import { Context } from "../../context/ContextProvider";

const Login = () => {
  const { setEmail, setPassword, handleLogin } = useContext(Context);

  return (
    <section className="login position-center">
      <div className="login__container">
        <h1>Login</h1>
        <form className="login__container__form" onSubmit={handleLogin}>
          <div className="login__container__form__input-container">
            <input
              type="email"
              placeholder="email"
              id="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="login__container__form__input-container">
            <input
              type="password"
              placeholder="password"
              id="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="login__container__form__input-container">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
