import React from "react";
import { NavLink } from "react-router-dom";

export default function Login() {
  return (
    <>
      <section className="section--login section--form text-clr--primary bg-clr--form-section">
        <form className="login__form account__form clr-border--grey bg-clr--dark">
          <NavLink to="/">
            <button
              className="home__button font--bold text-clr--primary"
              type="button"
            >
              <span className="material-symbols-outlined">home</span>
            </button>
          </NavLink>
          <h1 className="font--bold accent--clr">Login !</h1>
          <input
            className="nickname__input text-clr--primary"
            type="text"
            name="nickname"
            placeholder="Nickname"
            maxLength={15}
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
          <NavLink to="/forgot-password">
            <p className="forgot-password__link font--bold">
              Forgot Password ?
            </p>
          </NavLink>
          <input
            className="login__button button--style-second text-clr--primary"
            type="submit"
            value="Sign In"
          ></input>
          <NavLink to="/register">
            <p className="signup__link font--bold">Not a member ? Sign up!</p>
          </NavLink>
        </form>
      </section>
    </>
  );
}
