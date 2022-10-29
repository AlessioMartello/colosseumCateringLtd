import React from "react";
import Container from "../components/container";
import '../styles/about.css';
import HomeBody from "../components/homepageBody"


function About() {
  const aboutUsText =
    "We are a London based company established for 20 years, providing great quality service. We specialise in the design, supply and installation of commercial catering outlets including “pizza-al-taglio” shops coffee-bars and commercial kitchens.      Our clients choose us because we’re able to work closely with their development team to help them deliver their projects on budget and on time.      Installations and after-sales service are provided by our  experienced engineers.      We also undertake service work on most electrical, refrigeration and gas appliances.    We work in conjunction with a number of manufacturers and are able to supply a wide range of appliances including :    - Front-of-house display cabinets & bar counter    - Back-of-house refrigeration including walk-in coldrooms &          freezer-rooms    - Pizza-making equipment    - Cooking equipment    - Dishwashers & glasswashers    - Stainless steel fabrication (both standard and bespoke)";
  return (<>
  <Container title="About us" text={aboutUsText} />
  <HomeBody />
  </>);
}

export default About;
