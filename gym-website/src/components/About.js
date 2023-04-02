import { Link } from "react-scroll";
import { useInView } from "react-intersection-observer";

export default function About() {
  // Animations
  const { ref: animationRef, inView: sectionIsVisible } = useInView();

  //

  return (
    <section id="section--about" className="about-content__wrapper">
      <div className="about-content__image"></div>
      <div
        ref={animationRef}
        className={
          sectionIsVisible
            ? "section--about text-clr--secondary animate"
            : "section--about text-clr--secondary"
        }
      >
        <h2 className="text--upper font--slab">Who are we ?</h2>

        <div className="about-cards__wrapper">
          <div className="about-card bg-clr--secondary">
            <span className="material-symbols-outlined">health_metrics</span>
            <p>
              People living a healthy lifestyle without sacrificing everyday
              pleasures.
            </p>
          </div>
          <div className="about-card bg-clr--secondary">
            <span className="material-symbols-outlined">groups</span>
            <p>
              Group of friends who started working out together and fell in love
              with training.
            </p>
          </div>
          <div className="about-card bg-clr--secondary">
            <span className="material-symbols-outlined">exercise</span>
            <p>
              Professional trainers with numerous diplomas and many years of
              experience.
            </p>
          </div>
        </div>

        <div className="our-mission__container">
          <div className="mission-heading__container">
            <h3 className="font--slab text--upper">
              Our Goal
              <span className="material-symbols-outlined">flag</span>
            </h3>
          </div>
          <p>
            We want people to fell in love with training and show you how to
            combine living a healthy lifestyle with your everyday
            responsibilities, so you can become the best version of yourself !
          </p>
        </div>
        <Link to="section--plans" spy={true} smooth={true} duration={500}>
          <button className="about__scroll-button">Are you ready ?</button>
        </Link>
      </div>
    </section>
  );
}
