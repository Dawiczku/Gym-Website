import React from "react";

export default function Plans() {
  return (
    <section className="section--plans text-clr--primary">
      <div className="plans-content__wrapper">
        <div className="plans-desc__container">
          <div className="plans-heading__container">
            <div className="plans-heading">
              <h4 className="font--slim text--upper font--slab">
                Choose your plan
              </h4>
              <div className="arrows">
                <div className="arrow">
                  <span className="material-symbols-outlined font--bold">
                    chevron_right
                  </span>
                </div>
                <div className="arrow">
                  <span className="material-symbols-outlined font--bold">
                    chevron_right
                  </span>
                </div>
                <div className="arrow">
                  <span className="material-symbols-outlined font--bold">
                    chevron_right
                  </span>
                </div>
              </div>
            </div>
            <div className="plans-icons__container">
              <div className="plans__icon">
                <span className="material-symbols-outlined">
                  fitness_center
                </span>
                <p>Powerlifting</p>
              </div>
              <div className="plans__icon">
                <span className="material-symbols-outlined">weight</span>
                <p>Weightlifting</p>
              </div>
              <div className="plans__icon">
                <span className="material-symbols-outlined">sprint</span>
                <p>Cardio</p>
              </div>
            </div>
          </div>
        </div>

        <div className="plans-cards__container">
          <div className="plans__card">
            <h5>Basic</h5>
            <div className="price">
              <p className="price--integer">60.</p>
              <p className="price--decimal">00$</p>
            </div>
            <div className="plan__info">
              <p>Sessions</p>
              <p>Entries</p>
              <p>Online consults</p>
              <p>Body measures</p>
            </div>
          </div>
        </div>

        <div className="plans-cards__container">
          <div className="plans__card">
            <h5>Medium</h5>
            <div className="price">
              <p className="price--integer">80.</p>
              <p className="price--decimal">00$</p>
            </div>
            <div className="plan__info">
              <p>Sessions</p>
              <p>Entries</p>
              <p>Online consults</p>
              <p>Body measures</p>
            </div>
          </div>
        </div>

        <div className="plans-cards__container">
          <div className="plans__card">
            <h5>Pro</h5>
            <div className="price">
              <p className="price--integer">100.</p>
              <p className="price--decimal">00$</p>
            </div>
            <div className="plan__info">
              <p>Sessions</p>
              <p>Entries</p>
              <p>Online consults</p>
              <p>Body measures</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
