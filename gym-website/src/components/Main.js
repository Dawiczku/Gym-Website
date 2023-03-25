import React from "react";
import Header from "./Header";

export default function Main() {
  return (
    <section className="section--main text-clr--primary">
      <Header />
      <div className="main-content__wrapper">
        <h2 className="quote__main text--upper font--slab accent--clr">
          feel your internal power !
        </h2>
        <p>We offer professional service</p>
        <p>delivered by highly qualified trainers</p>
        <p>to allow everyone achieving their dream physique.</p>
      </div>
      <button className="scroll__button">
        <span className="material-symbols-outlined arrow--upper">
          arrow_downward
        </span>
        <span className="material-symbols-outlined arrow--lower">
          arrow_downward
        </span>
      </button>
    </section>
  );
}
