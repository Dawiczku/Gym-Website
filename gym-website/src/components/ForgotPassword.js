import React from "react";
import { NavLink } from "react-router-dom";

export default function ForgotPassword() {
  return (
    <>
      <section className="section--forgot-pass section--form text-clr--primary bg-clr--form-section">
        <form className="forgot-pass__form account__form clr-border--grey bg-clr--dark">
          <NavLink to="/">
            <button
              className="home__button font--bold text-clr--primary"
              type="button"
            >
              <span className="material-symbols-outlined">home</span>
            </button>
          </NavLink>
          <h1 className="font--bold accent--clr">Forgot password ?</h1>
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
            className="forgot-pass__button button--style-second text-clr--primary"
            type="submit"
            value="Send Code"
          ></input>
        </form>
      </section>
    </>
  );
}
