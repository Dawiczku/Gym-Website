import React from "react";
import Header from "./Header";
import { Link } from "react-scroll";

export default function Main() {
  return (
    <section id="section--main" className="section--main text-clr--primary">
      <Header />
      <div className="main-content__wrapper">
        <h2 className="quote__main text--upper font--slab accent--clr">
          feel your internal power !
        </h2>
        <p>We offer professional service</p>
        <p>delivered by highly qualified trainers</p>
        <p>to allow everyone achieving their dream physique.</p>
      </div>
      <Link
        className="scroll-button__link"
        to="section--about"
        spy={true}
        smooth={true}
        duration={500}
      >
        <button className="scroll__button">
          <span className="material-symbols-outlined arrow--upper">
            arrow_downward
          </span>
          <span className="material-symbols-outlined arrow--lower">
            arrow_downward
          </span>
        </button>
      </Link>
    </section>
  );
}
