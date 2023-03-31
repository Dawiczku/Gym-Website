import React from "react";

export default function Login() {
  return (
    <>
      <section className="section--login section--form text-clr--primary bg-clr--form-section">
        <form className="login__form account__form clr-border--grey bg-clr--dark">
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
          <p className="forgot-password__link font--bold">Forgot Password ?</p>
          <input
            className="login__button button--style-second text-clr--primary"
            type="submit"
            value="Sign In"
          ></input>
          <p className="signup__link font--bold">Not a member ? Sign up!</p>
        </form>
      </section>
    </>
  );
}
