import React, { useContext } from "react";
import "./contact.css";
import { Context } from "../../context/ContextProvider";
import Display from "./Display/Display";
import Add from "./Add/Add";
const Contact = () => {
  const { activeContactPage, setActiveContactPage } = useContext(Context);

  return (
    <section className="contact">
      {activeContactPage === "Add" ? (
        <button
          className="contact__button"
          onClick={() => {
            setActiveContactPage("Display");
          }}
        >
          Display
        </button>
      ) : (
        ""
      )}
      {activeContactPage === "Display" ? (
        <button
          className="contact__button"
          onClick={() => {
            setActiveContactPage("Add");
          }}
        >
          Add Contact
        </button>
      ) : (
        ""
      )}
      {activeContactPage === "Display" ? <Display /> : <Add />}
    </section>
  );
};

export default Contact;
