import React from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="text-clr--primary">
      <div className="logo__container accent--clr">
        <span className="logo material-symbols-outlined">swords</span>
        <h1 className="logo__name font--righteous text--upper">Power gym.</h1>
      </div>
      <ul className="links">
        <li className="about__link">
          <Link to="section--about" spy={true} smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="plans__link">
          <Link to="section--plans" spy={true} smooth={true} duration={500}>
            Plans
          </Link>
        </li>
        <li className="contact__link">
          <Link to="section--contact" spy={true} smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        <NavLink to="/login">
          <li className="login__link">Login</li>
        </NavLink>
      </ul>
    </header>
  );
}
