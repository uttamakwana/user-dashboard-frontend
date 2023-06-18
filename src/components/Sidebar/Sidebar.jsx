import React, { useContext } from "react";
import "./sidebar.css";
import { Context } from "../../context/ContextProvider";

const Sidebar = () => {
  const { activeToggle } = useContext(Context);
  return (
    <aside
      className={`sidebar flex-center ${activeToggle ? "active" : ""}`}
    >
      <div className="sidebar__container flex-center">
        <ul className="sidebar__container__list">
          <li className="sidebar__container__list__item">
            <a href="#home" className="sidebar__container__list__item__link">
              👤Profile
            </a>
          </li>
          <li className="sidebar__container__list__item">
            <a href="#home" className="sidebar__container__list__item__link">
              📃Contact
            </a>
          </li>
          <li className="sidebar__container__list__item">
            <a href="#home" className="sidebar__container__list__item__link">
              🛞 Settings
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
