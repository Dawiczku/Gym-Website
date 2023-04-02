import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useInView } from "react-intersection-observer";

export default function Contact() {
  // Animations
  const { ref: contactSectionRef, inView: sectionIsVisible } = useInView({
    triggerOnce: "true",
    threshold: ".75",
  });
  const [headingOpacity, setHeadingOpacity] = useState(0);
  const [headingAnimation, setHeadingAnimation] = useState("");
  const [leftContentOpacity, setLeftContentOpacity] = useState(0);
  const [leftContentAnimation, setLeftContentAnimation] = useState("");
  const [rightContentOpacity, setRightContentOpacity] = useState(0);
  const [rightContentAnimation, setRightContentAnimation] = useState("");
  const [footerOpacity, setFooterOpacity] = useState(0);
  const [footerAnimation, setFooterAnimation] = useState("");

  useEffect(() => {
    if (sectionIsVisible) {
      console.log("now");
      setTimeout(() => {
        setHeadingAnimation(".75s animate_contact-heading");
        setHeadingOpacity(1);
        setFooterAnimation(".75s animate_contact-footer");
        setFooterOpacity(1);
      }, 750);
      setTimeout(() => {
        setRightContentAnimation(".75s animate_contact-content--right");
        setLeftContentAnimation(".75s animate_contact-content--left");
        setRightContentOpacity(1);
        setLeftContentOpacity(1);
      }, 1250);
    }
  }, [sectionIsVisible]);

  return (
    <>
      <section
        ref={contactSectionRef}
        id="section--contact"
        className="contact-section__wrapper text-clr--primary"
      >
        <div
          className="contact-heading__container"
          style={{ animation: headingAnimation, opacity: headingOpacity }}
        >
          <h6 className="text--upper font--slab accent--clr">Contact Us</h6>
          <p>Got any questions ? Feel free to ask anything !</p>
        </div>

        <div className="contact-info__container">
          <div
            className="info__wrapper"
            style={{
              animation: leftContentAnimation,
              opacity: leftContentOpacity,
            }}
          >
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
            <Link
              className="top-scroll-button__link"
              to="section--main"
              spy={true}
              smooth={true}
              duration={500}
            >
              <button className="top-scroll__button text-clr--primary bg-clr--dark">
                Scroll to the top!
              </button>
            </Link>
          </div>

          <form
            className="contact-form"
            style={{
              animation: rightContentAnimation,
              opacity: rightContentOpacity,
            }}
          >
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

        <footer style={{ animation: footerAnimation, opacity: footerOpacity }}>
          <p className="font--bold">Designed By:</p>
          <span>
            <FontAwesomeIcon icon="fa-brands fa-github" />
            <a
              className="github__link"
              href="https://github.com/Dawiczku"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Dawiczku
            </a>
          </span>
        </footer>
      </section>
    </>
  );
}
