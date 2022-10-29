import React from "react";
import "../styles/home.css";
import CountUp from 'react-countup';


function HomeBody() {
  const conmpanyAge = new Date().getFullYear() - 2002;

  return (<div className="wrapper">
  <div className="box1">Selling & fitting commercial kitchen equipment in London for {conmpanyAge} years.</div>
  <div className="box2">Bespoke kitchen design & installation.</div>
  <div className="box3">After-sales servicing.</div>
  <div className="box4">Electrical, refrigeration & gas appliance fitting and servicing.</div>    

  <div className="box5"><CountUp
          start={0}
          end={conmpanyAge}
          duration={2.5}
          enableScrollSpy= {true}

        /> years of service
        </div>
  <div className="box6">Six</div>
  <div className="box7">Seven</div>

</div>
  );
}

export default HomeBody;
