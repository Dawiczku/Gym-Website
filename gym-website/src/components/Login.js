import React, { useEffect, useState, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const userRef = useRef();
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errMessage, setErrMessage] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    if (!success) return;
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }, [success]);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/login`, {
        userName: userName,
        password: password,
      })
      .then((response) => {
        if (response.data.errMessage) {
          setErrMessage(response.data.errMessage);
          setSuccess(false);
        } else {
          setSuccessMessage(response.data.message);
          setSuccess(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <section className="section--login section--form text-clr--primary bg-clr--form-section">
        <form
          onSubmit={handleSubmit}
          className="login__form account__form clr-border--grey bg-clr--dark"
        >
          <NavLink to="/">
            <button
              className="home__button font--bold text-clr--primary"
              type="button"
            >
              <span className="material-symbols-outlined">home</span>
            </button>
          </NavLink>
          <h1 className="font--bold accent--clr">Login !</h1>
          {success ? (
            <p className="form--success">{successMessage}</p>
          ) : errMessage ? (
            <p className="form--fail">{errMessage}.</p>
          ) : null}
          <input
            ref={userRef}
            onChange={(e) => setUserName(e.target.value)}
            className="nickname__input text-clr--primary"
            type="text"
            name="nickname"
            placeholder="Nickname"
            maxLength={15}
            required
          ></input>
          <input
            onChange={(e) => setPassword(e.target.value)}
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
