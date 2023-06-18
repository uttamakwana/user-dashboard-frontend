import "./header.css";
import images from "../../constants/images";

const Header = () => {
  return (
    <header className="header">
      <nav className="header__navbar">
        <div className="header__navbar__logo-container">
          <img
            src={images.Logo}
            alt="Logo"
            id="header__navbar__logo-container__logo"
          />
          <span>Dashboard</span>
        </div>
        <div className="header__navbar__list-container">
          <ul className="header__navbar__list-container__list">
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
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
