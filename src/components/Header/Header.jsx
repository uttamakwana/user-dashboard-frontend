import "./header.css";
import images from "../../constants/images";
import { useContext } from "react";
import { Context } from "../../context/ContextProvider";

const Header = () => {
  const { activeToggle, setActiveToggle } = useContext(Context);
  return (
    <header className="header">
      <nav className="header__navbar flex-center">
        <div className="header__navbar__logo-container flex-center">
          <img
            src={images.Logo}
            alt="Logo"
            id="header__navbar__logo-container__logo"
          />
          <span>Dashboard</span>
        </div>
        <div className="header__navbar__list-container">
          <ul className="header__navbar__list-container__list flex-center">
            <li className="header__navbar__list-container-list-item">
              <a
                href="#home"
                className="header__navbar__list-container__list__item__link"
              >
                <img src={images.Profile} alt="Profile img" />
              </a>
            </li>
            <li className="header__navbar__list-container-list-item">
              <a
                href="#home"
                className="header__navbar__list-container__list__item__link"
              >
                <img src={images.LogOut} alt="Profile img" />
              </a>
            </li>
            <li
              className="header__navbar__list-container-list-item"
              id="toogle-menu"
              onClick={() => {
                setActiveToggle(!activeToggle);
              }}
            >
              <a
                href="#home"
                className="header__navbar__list-container__list__item__link"
              >
                <img src={images.Menu} alt="Profile img" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
