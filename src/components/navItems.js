import "../styles/navbar.css";
import { Link } from "react-router-dom";
import Button from "./button";
import React, { useState, useEffect } from "react";



export default function NavbarItems() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  
    const toggleNav = () => {
      setToggleMenu(!toggleMenu);
    };
  
    useEffect(() => {
      const changeWidth = () => {
        setScreenWidth(window.innerWidth);
      };
  
      window.addEventListener("resize", changeWidth);
    }, []);



  return (
    <nav id="myNav">
      {(toggleMenu || screenWidth > 500) && (
        <ul className="list">
          <li className="items">
            <Link to={"/"}>
              <Button text="Home" />
            </Link>
          </li>
          <li className="items">
            <Link to={"/about"}>
              <Button text="About" />
            </Link>
          </li>
          <li className="items">
            <Link to={"/projects"}>
              <Button text="Projects" />
            </Link>
          </li>
          <li className="items">
            <span onClick={() => window.location = 'mailto:fabio@colosseumcatering.com'}><Button text="Contact" /></span>

          </li>
        </ul>
      )}
      <button onClick={toggleNav} className="btn">
        BTN
      </button>
    </nav>
  );
}
