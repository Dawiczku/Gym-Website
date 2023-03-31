import React from "react";

export default function ForgotPassword() {
  return (
    <>
      <section className="section--forgot-pass section--form text-clr--primary bg-clr--form-section">
        <form className="forgot-pass__form account__form clr-border--grey bg-clr--dark">
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
