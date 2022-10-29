import "../styles/footer.css";
import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="myFooter">
      <div class="row">
        <div class="column">
          <div className="footerHeader">Our Services</div>
          <ul>
            <li>Sales</li>
            <li>Remote Refrigeration Systems</li>
            <li>Repairs & Maintenance</li>
          </ul>
        </div>
        <div class="column">
          <div className="footerHeader">Location</div>
          <ul>
            <li>Colosseum Caterimg Equipment Ltd</li>
            <li>Unit 12 Liongate Enterprise Park,</li>
            <li>80 Morden Rd,</li>
            <li>Mitcham – Surrey CR4 4NY</li>
            <li>Company Reg. N. 4586354</li>
          </ul>
        </div>
        <div class="column">
          <div className="footerHeader">Contact us</div>
          <ul>
            <li>Phone - 020 8395 3940</li>
            <li>Mobile - 07932 062301</li>
            <li>
              <a href="mailto:fabio@colosseumcatering.com">
                fabio@colosseumcatering.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div id="copyright">{`© ${year} Colosseum Catering`}</div>
    </div>
  );
};

export default Footer;
