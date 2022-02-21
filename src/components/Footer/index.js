import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
            <form action="#">
            <div className="mt-4">
              <input type="text" className="form-control" placeholder="Enter your name"/>
            </div>
            <div className="mt-4">
              <input type="email" className="form-control" placeholder="Enter valid email address"/>
            </div>
            <div className="mt-4">
              <input type="tel" className="form-control" placeholder="Enter your phone number (+91 9876543210)"/>
            </div>
            <div className="mt-4">
              <textarea className="form-control" rows="4"></textarea>
            </div>
            <div className="mt-4 submitButton">
              <button>Submit</button>
            </div>
            </form>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
            <div className="FirstRow">
              <h5>Call us</h5>
              <p>1 (234) 567-891 <br/>
                  1 (234) 987-654</p>
            </div>
            <div className="SecondRow">
              <h5>location</h5>
              <p>121 Rock Sreet, 21 Avenue,New York, NY 92103-9000</p>
            </div>
            <div className="ThirdRow">
              <h5>top services</h5>
              <ul>
                <li>Pre Design</li>
                <li>Pre Design</li>
                <li>Pre Design</li>
                <li>Pre Design</li>
              </ul>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
            <img src="images/Footer.PNG" alt="Footer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
