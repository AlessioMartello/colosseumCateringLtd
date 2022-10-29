import React from "react";
import "../styles/home.css";
import Button from "../components/button";
import { Link } from "react-router-dom";
import HomeBody from "../components/homepageBody"

function Home() {
  document.body.classList.add("homePage"); //not applying hoepage only
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
  return (
    <><div className="hero heroText">
      <div className="frontPageWrapper">
        COLOSSEUM CATERING EQUIPMENT
        <span className="subText">
          <br />
          Built to last.
        </span>
        <br />
        <Link to={"/projects"}>
          <Button text="Our work" suppliedId="frontPageBtn" />
        </Link>
      </div>

    </div><HomeBody /></>

  );
}

export default Home;
