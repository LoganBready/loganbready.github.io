import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faFileCode } from "@fortawesome/free-solid-svg-icons";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";

const Services = () => {
  return (
    <div className="services ">
      <h1 className="py-5">My Services</h1>
      <div className="container ">
        <div className="row justify-content-center">
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon icon={faDesktop} size="2x" className="icon" />
              </div>
              <h3>Web Design</h3>
              <p>
                I create aesthetically appeasing websites while focusing on the
                needs of the customer.
              </p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon icon={faFileCode} size="2x" className="icon" />
              </div>
              <h3>Web Development</h3>
              <p>I'll create custom websites with the latest technologies.</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon
                  icon={faSearchengin}
                  size="2x"
                  className="icon"
                />
              </div>
              <h3>SEO</h3>
              <p>I'll optimize your websites to increase your visibility.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
