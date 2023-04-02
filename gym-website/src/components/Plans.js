import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { useInView } from "react-intersection-observer";

export default function Plans() {
  // Animations
  const { ref: plansSectionRef, inView: sectionIsVisible } = useInView();
  // Animation for every element except cards
  const [opacity, setOpacity] = useState(0);
  const [animation, setAnimation] = useState("");
  // Animation for cards
  const [card1Opacity, setCard1Opacity] = useState(0);
  const [card1Animation, setCard1Animation] = useState("");
  const [card2Opacity, setCard2Opacity] = useState(0);
  const [card2Animation, setCard2Animation] = useState("");
  const [card3Opacity, setCard3Opacity] = useState(0);
  const [card3Animation, setCard3Animation] = useState("");
  const [didAnimate, setDidAnimate] = useState(false);

  useEffect(() => {
    if (!didAnimate) {
      if (!sectionIsVisible) {
        setOpacity(0);
        setAnimation("");
      } else {
        setTimeout(() => {
          setAnimation(".75s animate_plans");
          setOpacity(1);
        }, 250);
        setTimeout(() => {
          setCard1Animation(".5s animate_plans");
          setCard1Opacity(1);
        }, 2000);
        setTimeout(() => {
          setCard2Animation(".5s animate_plans");
          setCard2Opacity(1);
        }, 1500);
        setTimeout(() => {
          setCard3Animation(".5s animate_plans");
          setCard3Opacity(1);
        }, 1000);
        setDidAnimate(true);
      }
    }
  }, [sectionIsVisible, didAnimate]);

  return (
    <section id="section--plans" className="section--plans text-clr--primary">
      <div
        ref={plansSectionRef}
        className="plans-heading__container"
        style={{ animation: animation, opacity: opacity }}
      >
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
        <div
          className="plans__card"
          style={{ animation: card1Animation, opacity: card1Opacity }}
        >
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

        <div
          className="plans__card"
          style={{ animation: card2Animation, opacity: card2Opacity }}
        >
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

        <div
          className="plans__card"
          style={{ animation: card3Animation, opacity: card3Opacity }}
        >
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
        <button
          ref={plansSectionRef}
          className="plans__scroll-button text-clr--primary font--bold"
          style={{ animation: animation, opacity: opacity }}
        >
          Got questions ?
        </button>
      </Link>
    </section>
  );
}
