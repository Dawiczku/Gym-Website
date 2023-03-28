import React from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
  return (
    <>
      <section
        id="section--contact"
        className="contact-section__wrapper text-clr--primary"
      >
        <div className="contact-heading__container">
          <h6 className="text--upper font--slab accent--clr">Contact Us</h6>
          <p>Got any questions ? Feel free to ask anything !</p>
        </div>

        <div className="contact-info__container">
          <div className="info__wrapper">
            <div className="location-info__container info">
              <span className="material-symbols-outlined font--bold accent--clr">
                location_on
              </span>
              <div className="location--info">
                <p className="font--bold accent--clr info__heading">
                  We're at:
                </p>
                <p>POWER GYM, ul. Podgorna 65</p>
                <p>65-246, Zielona Gora</p>
                <p className="font--bold">Opening hours:</p>
                <p>Monday - Friday</p>
                <p>06:00 - 22:00</p>
                <p>Weekend</p>
                <p>10:00 - 20:00</p>
              </div>
            </div>
            <div className="phone-info__container info">
              <span className="material-symbols-outlined font--bold accent--clr">
                call
              </span>
              <div className="phone--info">
                <p className="font--bold accent--clr info__heading">Phone: </p>
                <p>+48 123 456 789</p>
              </div>
            </div>
            <div className="email-info__container info">
              <span className="material-symbols-outlined font--bold accent--clr">
                mail
              </span>
              <div className="email--info">
                <p className="font--bold accent--clr info__heading">
                  Our Email:
                </p>
                <p>myGym.info@gmail.com</p>
              </div>
            </div>
            <div className="socials-info__container info">
              <span className="material-symbols-outlined font--bold accent--clr">
                public
              </span>
              <div className="socials--info">
                <p className="font--bold accent--clr info__heading">
                  Find us on:
                </p>
                <div className="social-media__container">
                  <div className="social-media__links">
                    <div className="icon icon--facebook">
                      <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon
                          className="social-icon"
                          icon="fa-brands fa-facebook-f"
                        />
                      </a>
                    </div>
                    <div className="icon icon--instagram">
                      <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon
                          className="social-icon"
                          icon="fa-brands fa-instagram"
                        />
                      </a>
                    </div>
                    <div className="icon icon--youtube">
                      <a
                        href="https://www.youtube.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon
                          className="social-icon"
                          icon="fa-brands fa-youtube"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form">
            <input
              type="text"
              name="full-name"
              id="full-name"
              placeholder="Full Name"
              minLength={5}
              maxLength={28}
              required
            ></input>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              minLength={5}
              required
            ></input>
            <input
              type="tel"
              name="phone-number"
              id="phone-number"
              placeholder="Phone (optional)"
              maxLength={9}
            ></input>
            <textarea
              name="message"
              id="message"
              placeholder="Message..."
              minLength={10}
              maxLength={300}
              required
            ></textarea>
            <input
              className="form-submit__button"
              type="submit"
              value="SEND"
            ></input>
          </form>
        </div>

        <footer>
          <p className="font--bold">Designed By:</p>
          <span>
            <FontAwesomeIcon icon="fa-brands fa-github" />
            <a className="github__link" href="https://github.com/Dawiczku">
              {" "}
              Dawiczku
            </a>
          </span>
        </footer>
      </section>
    </>
  );
}
