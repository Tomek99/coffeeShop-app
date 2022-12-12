import React from "react";
import "./HomeSection.scss";

function HomeSection() {
  return (
    <div className="HomeSection" id="homeSection">
      <div className="textAreaHome">
        <header>
          fresh coffee in <br />
          the morning
        </header>
        <p>
          Lorem ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Sit,
          <br /> Consequuntur? Et Veritatis Velit Nesciunt Odio!
        </p>
        <a href="#menuSection">Get It Now</a>
      </div>
    </div>
  );
}

export default HomeSection;
