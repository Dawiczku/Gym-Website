import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const USER_REGEX = /^[A-z][A-z0-9-_]{3,15}$/;
  const PASSWORD_REGEX =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
  const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const userRef = useRef();

  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userName, setUserName] = useState("");
  const [validUserName, setValidUserName] = useState(false);
  const [userNameFocus, setUserNameFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [matchingPassword, setMatchingPassword] = useState("");
  const [validMatchingPassword, setValidMatchingPassword] = useState(true);
  const [matchingPasswordFocus, setMatchingPasswordFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [success, setSuccess] = useState(false);
  const [err, setErr] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(userName);
    setValidUserName(result);
  }, [userName]);

  useEffect(() => {
    const result = PASSWORD_REGEX.test(password);
    setValidPassword(result);
    const match = password === matchingPassword;
    setValidMatchingPassword(match);
  }, [password, matchingPassword]);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    setErr("");
  }, [userName, password, email]);

  useEffect(() => {
    if (!success) return;
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  }, [success]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const validUser = USER_REGEX.test(userName);
    const validPass = PASSWORD_REGEX.test(password);
    const validMail = EMAIL_REGEX.test(email);

    if (!validUser || !validPass || !validMail) {
      setErr("Invalid data! Try again.");
      return;
    }

    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/register`, {
        userName: userName,
        firstName: firstName,
        lastName: lastName,
        phone: phoneNumber,
        password: password,
        email: email,
      })
      .then((response) => {
        if (!response.data.errMessage) {
          setSuccess(response.data.message);
        } else {
          setErr(response.data.errMessage);
          setSuccess(false);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <section className="section--register section--form text-clr--primary bg-clr--form-section">
        <form
          onSubmit={handleSubmit}
          className="register__form account__form clr-border--grey bg-clr--dark"
        >
          <NavLink to="/">
            <button
              className="home__button font--bold text-clr--primary"
              type="button"
            >
              <span className="material-symbols-outlined">home</span>
            </button>
          </NavLink>
          <h1 className="font--bold accent--clr">Register !</h1>
          {success ? (
            <p className="form--success">{success}</p>
          ) : err ? (
            <p className="form--fail">{err}.</p>
          ) : null}

          <div className="form__inputs">
            <input
              className="nickname__input text-clr--primary"
              ref={userRef}
              type="text"
              name="nickname"
              autoComplete="off"
              onFocus={() => setUserNameFocus(true)}
              onBlur={() => setUserNameFocus(false)}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Nickname"
              maxLength={15}
              required
            ></input>
            <div
              className={
                validUserName || !userNameFocus
                  ? "requirements hidden"
                  : "requirements"
              }
            >
              <p>
                <FontAwesomeIcon
                  icon="fa-solid fa-circle-info"
                  className="icon--info"
                />
                Must start with a letter,
              </p>
              <p>Numbers and 3-23 characters allowed.</p>
            </div>
            <input
              className="firstName__input text-clr--primary"
              type="text"
              name="firstName"
              autoComplete="off"
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              maxLength={30}
              required
            ></input>
            <input
              className="lastName__input text-clr--primary"
              type="text"
              name="lastName"
              autoComplete="off"
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
              maxLength={30}
              required
            ></input>
            <input
              className="phone__input text-clr--primary"
              type="text"
              name="phone"
              autoComplete="off"
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Phone Number"
              maxLength={9}
              required
            ></input>
            <input
              className="email__input text-clr--primary"
              type="email"
              name="email"
              autoComplete="off"
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-Mail"
              maxLength={30}
              required
            ></input>
            <div
              className={
                validEmail || !emailFocus
                  ? "requirements hidden"
                  : "requirements"
              }
            >
              <p>
                <FontAwesomeIcon
                  icon="fa-solid fa-circle-info"
                  className="icon--info"
                />
                Email template:
              </p>
              <p>example@example.example</p>
            </div>

            <input
              className="password__input text-clr--primary"
              type="password"
              name="password"
              onFocus={() => setPasswordFocus(true)}
              onBlur={() => setPasswordFocus(false)}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              maxLength={24}
              required
            ></input>
            <div
              className={
                validPassword || !passwordFocus
                  ? "requirements hidden"
                  : "requirements"
              }
            >
              <p>
                <FontAwesomeIcon
                  icon="fa-solid fa-circle-info"
                  className="icon--info"
                />
                Atleast 1 uppercase, number and symbol
              </p>
              <p>Must contain atleast 8 characters</p>
            </div>

            <input
              className="second-password__input text-clr--primary"
              type="password"
              name="second-password"
              onFocus={() => setMatchingPasswordFocus(true)}
              onBlur={() => setMatchingPasswordFocus(false)}
              onChange={(e) => setMatchingPassword(e.target.value)}
              placeholder="Repeat Password"
              maxLength={24}
              required
            ></input>
            <div
              className={
                !matchingPasswordFocus || validMatchingPassword
                  ? "requirements hidden"
                  : "requirements"
              }
            >
              <p>
                <FontAwesomeIcon
                  icon="fa-solid fa-circle-info"
                  className="icon--info"
                />
                You need to match the previous
              </p>
            </div>
          </div>

          <NavLink to="/login">
            <p className="account-exist__form font--bold">
              Already have an account ?
            </p>
          </NavLink>
          <button
            className="register__button button--style-second text-clr--primary"
            type="submit"
            disabled={
              !validEmail ||
              !validUserName ||
              !validPassword ||
              !validMatchingPassword
                ? true
                : false
            }
          >
            Sign Up
          </button>
        </form>
      </section>
    </>
  );
}
