import React from "react";
import { NavLink } from "react-router-dom";

export default function Register() {
  return (
    <>
      <section className="section--register section--form text-clr--primary bg-clr--form-section">
        <form className="register__form account__form clr-border--grey bg-clr--dark">
          <NavLink to="/">
            <button
              className="home__button font--bold text-clr--primary"
              type="button"
            >
              <span className="material-symbols-outlined">home</span>
            </button>
          </NavLink>
          <h1 className="font--bold accent--clr">Register !</h1>

          <input
            className="nickname__input text-clr--primary"
            type="text"
            name="nickname"
            placeholder="Nickname"
            maxLength={15}
            required
          ></input>
          <input
            className="email__input text-clr--primary"
            type="email"
            name="email"
            placeholder="E-Mail"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            maxLength={30}
            required
          ></input>
          <input
            className="password__input text-clr--primary"
            type="password"
            name="password"
            placeholder="Password"
            maxLength={15}
            required
          ></input>
          <input
            className="second-password__input text-clr--primary"
            type="password"
            name="second-password"
            placeholder="Repeat Password"
            maxLength={15}
            required
          ></input>

          <NavLink to="/login">
            <p className="account-exist__form font--bold">
              Already have an account ?
            </p>
          </NavLink>
          <input
            className="register__button button--style-second text-clr--primary"
            type="submit"
            value="Sign Up"
          ></input>
        </form>
      </section>
    </>
  );
}
