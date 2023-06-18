import React from "react";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar__container">
        <ul className="sidebar__container-list">
          <li className="sidebar__container__list__item">
            <a href="#home" className="sidebar__container__list__link__item">
              Profile
            </a>
          </li>
          <li className="sidebar__container__list__item">
            <a href="#home" className="sidebar__container__list__link__item">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
