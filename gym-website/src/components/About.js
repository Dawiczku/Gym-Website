import React from "react";

export default function About() {
  return (
    <section className="about-content__wrapper">
      <div className="about-content__image"></div>
      <div className="section--about text-clr--secondary">
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
            <p>Professionals with numerous diplomas and years of experience.</p>
          </div>
        </div>

        <div className="our-mission__container">
          <div className="mission-heading__container">
            <h3 className="font--slab text--upper">Our Mission</h3>
            <span className="material-symbols-outlined">flag</span>
          </div>
          <p>
            We want people to fell in love with training and show you how to
            combine living a healthy lifestyle with your everyday
            responsibilities, so you can become the best version of yourself !
          </p>
        </div>
        <button className="about__scroll-button">Are you ready ?</button>
      </div>
    </section>
  );
}
