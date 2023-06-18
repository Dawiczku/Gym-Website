import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import React from "react";

export default function Dashboard() {
  return (
    <section className="bg-clr--dark">
      <header>
        <div className="dashboard__header">
          <div className="accent--clr dashboard__links">
            <div className="dashboard__logo">
              <span className="logo material-symbols-outlined">swords</span>
              <span className="dashboard__link font--righteous">POWER.</span>
            </div>
            <Link to="/">
              <span className="dashboard__link">HOME</span>
            </Link>
          </div>
          <div className="user__icon text-clr--primary">
            <FontAwesomeIcon icon="fa-solid fa-user" />
          </div>
        </div>
      </header>
      <div className="dashboard__greetings text-clr--primary">
        <h1>Hello ! How are you doing today ?</h1>
      </div>
      <div className="dashboard__content">
        <div>
          <p className="accent--clr">
            Name: <span className="text-clr--primary">Bartosz</span>
          </p>
          <p className="accent--clr">
            Last Name: <span className="text-clr--primary">Kurek</span>
          </p>
          <p className="accent--clr">
            Phone Number: <span className="text-clr--primary">123 456 789</span>
          </p>
          <p className="accent--clr">
            Your plan: <span className="text-clr--primary">None</span>
          </p>
          <p className="accent--clr">
            Expire: <span className="text-clr--primary">2023-06-30</span>
          </p>
          <p className="accent--clr">
            Trainer: <span className="text-clr--primary">Marek Witek</span>
          </p>
        </div>
        <div className="dashboard__image">
          <img src={require("../images/main-muscle.jpeg")}></img>
        </div>
      </div>
    </section>
  );
}
