import React from "react";

export default function Header() {
  return (
    <header className="text-clr--primary">
      <div className="logo__container accent--clr">
        <span className="logo material-symbols-outlined">swords</span>
        <h1 className="logo__name font--righteous text--upper">Power gym.</h1>
      </div>
      <ul className="links">
        <li className="about__link">About</li>
        <li className="plans__link">Plans</li>
        <li className="contact__link">Contact</li>
        <li className="login__link">Login</li>
      </ul>
    </header>
  );
}
