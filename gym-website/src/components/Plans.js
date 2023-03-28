import React from "react";
import { Link } from "react-scroll";

export default function Plans() {
  return (
    <section id="section--plans" className="section--plans text-clr--primary">
      <div className="plans-heading__container">
        <div className="plans-heading accent--clr">
          <h4 className="font--slim text--upper font--slab">
            Choose your plan !
          </h4>
        </div>
        <div className="plans-icons__container font--bold">
          <div className="plans__icon">
            <span className="material-symbols-outlined font--bold  accent--clr">
              fitness_center
            </span>
            <p>Powerlifting</p>
          </div>
          <div className="plans__icon">
            <span className="material-symbols-outlined font--bold  accent--clr">
              weight
            </span>
            <p>Weightlifting</p>
          </div>
          <div className="plans__icon">
            <span className="material-symbols-outlined font--bold  accent--clr">
              sprint
            </span>
            <p>Cardio</p>
          </div>
        </div>
      </div>

      <div className="plans-cards__container">
        <div className="plans__card">
          <h5 className="font--bold bg-clr--secondary">Basic</h5>
          <div className="price accent--clr">
            <p className="price--integer font--bold">60.</p>
            <p className="price--decimal">00$ / Month</p>
          </div>
          <div className="plan__info">
            <p>
              Workouts <span className="font--bold accent--clr">8</span>
            </p>
            <p>
              Entries <span className="font--bold accent--clr">Unlimited</span>
            </p>
            <p>
              Online consults <span className="font--bold accent--clr">1</span>
            </p>
            <p>
              Body measures <span className="font--bold accent--clr">1</span>
            </p>
          </div>
        </div>

        <div className="plans__card">
          <h5 className="font--bold bg-clr--secondary">Mid</h5>
          <div className="price accent--clr">
            <p className="price--integer font--bold">80.</p>
            <p className="price--decimal">00$ / Month</p>
          </div>
          <div className="plan__info">
            <p>
              Workouts <span className="font--bold accent--clr">12</span>
            </p>
            <p>
              Entries <span className="font--bold accent--clr">Unlimited</span>
            </p>
            <p>
              Online consults <span className="font--bold accent--clr">2</span>
            </p>
            <p>
              Body measures <span className="font--bold accent--clr">2</span>
            </p>
          </div>
        </div>

        <div className="plans__card">
          <h5 className="font--bold bg-clr--secondary">Pro</h5>
          <div className="price accent--clr">
            <p className="price--integer font--bold">100.</p>
            <p className="price--decimal">00$ / Month</p>
          </div>
          <div className="plan__info">
            <p>
              Workouts <span className="font--bold accent--clr">16</span>
            </p>
            <p>
              Entries <span className="font--bold accent--clr">Unlimited</span>
            </p>
            <p>
              Online consults <span className="font--bold accent--clr">4</span>
            </p>
            <p>
              Body measures <span className="font--bold accent--clr">3</span>
            </p>
          </div>
        </div>
      </div>
      <Link to="section--contact" spy={true} smooth={true} duration={500}>
        <button className="plans__scroll-button text-clr--primary font--bold">
          Got questions ?
        </button>
      </Link>
    </section>
  );
}
