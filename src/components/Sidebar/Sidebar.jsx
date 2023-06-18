import React, { useEffect, useState } from "react";
import "./sidebar.css";

const Sidebar = () => {
  const [headerHeight, setHeaderHeight] = useState(
    document.querySelector(".header")
      ? document.querySelector(".header").offsetHeight
      : 0
  );
  const [sidebarHeight, setSidebarHeight] = useState(0);
  useEffect(() => {
    const handleSidebarHeight = () => {
      setHeaderHeight(document.querySelector(".header").offsetHeight);
      console.log("Screen size", window.innerHeight);
      console.log("Header size", headerHeight);
      let screenHeight = window.innerHeight;
      setSidebarHeight(screenHeight - headerHeight);
    };

    handleSidebarHeight();

    window.addEventListener("resize", handleSidebarHeight);

    return () => {
      window.removeEventListener("resize", handleSidebarHeight);
    };
  }, []);

  console.log(sidebarHeight);
  console.log(headerHeight);
  return (
    <aside
      className="sidebar flex-center"
      style={{
        height: sidebarHeight,
        top: headerHeight,
      }}
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
