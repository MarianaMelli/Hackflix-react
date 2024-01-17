import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        if (window.scrollY > 100) {
          handleShow(true);
        } else handleShow(false);
      });
    };
  }, []);

  return (
    <>
      <nav className={`nav ${show && "nav-black"}`}>
        <div className="nav-list">
          <div>
            <NavLink to="/" className="nav-logo">
              Hackflix
            </NavLink>
          </div>
          <ul className="nav-sublist">
            <li>
              <NavLink to="/search" className="navLink">
                <i className="fa-solid fa-magnifying-glass"></i>
              </NavLink>
            </li>
            <li>
              <NavLink to="/about-us" className="navLink">
                ABOUT 
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="navLink">
                CONTACT
              </NavLink>
            </li>
            
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
