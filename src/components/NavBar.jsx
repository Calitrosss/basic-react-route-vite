import { Link } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  // const [ToggleBurguer, setToggleBurguer] = useState(false);
  const [NavBarMenuClass, setNavBarMenuClass] = useState("navbar-menu");
  const [NavBarBurguerClass, setNavBarBurguerClass] = useState("navbar-burger");

  const toggleNavBar = (e) => {
    if (e.target.classList.length < 2) {
      setNavBarMenuClass("navbar-menu is-active");
      setNavBarBurguerClass("navbar-burger is-active");
    } else {
      setNavBarMenuClass("navbar-menu");
      setNavBarBurguerClass("navbar-burger");
    }
  };

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkDn1xub04jy9-4RbjltA486WMhmRcS0i7Hg&usqp=CAU"
            width="112"
            height="28"
          />
        </a>

        <a
          role="button"
          className={NavBarBurguerClass}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={toggleNavBar}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className={NavBarMenuClass}>
        <div className="navbar-start">
          <Link to={"/"} className="navbar-item">
            Home
          </Link>
          <Link className="navbar-item" to={"/galeria"}>
            Galería
          </Link>
          <Link className="navbar-item" to={"/productos"}>
            Productos
          </Link>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">More</a>

            <div className="navbar-dropdown">
              <a className="navbar-item">About</a>
              <a className="navbar-item">Jobs</a>
              <a className="navbar-item">Contact</a>
              <hr className="navbar-divider" />
              <a className="navbar-item">Report an issue</a>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a className="button is-light">Log in</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
