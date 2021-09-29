import React from "react";
import Ecom from "../images/ecom-f.PNG";
import Weather from "../images/theweatherapp.PNG";
import Portfolio from "../images/portfolio.PNG";
import Points from "../images/pppoints.PNG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";

const MyPortfolio = () => {
  return (
    <div className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">Portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">
          <div
            className="portfolio-image-box"
            onClick={() => window.open("https://github.com/LoganBready/ecom-f")}
          >
            <img
              className="portfolio-image"
              src={Ecom}
              alt="Ecommerce project..."
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>

          <div
            className="portfolio-image-box"
            onClick={() => window.open("https://github.com/LoganBready")}
          >
            <img
              className="portfolio-image"
              src={Weather}
              alt="Weather App project..."
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>

          <div
            className="portfolio-image-box"
            onClick={() => window.open("www.loganbready.com")}
          >
            <img
              className="portfolio-image"
              src={Portfolio}
              alt="My portfolio project..."
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>

          <div
            className="portfolio-image-box"
            onClick={() =>
              window.open("https://github.com/LoganBready/pp-points")
            }
          >
            <img
              className="portfolio-image"
              src={Points}
              alt="My Paired Programing project..."
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
