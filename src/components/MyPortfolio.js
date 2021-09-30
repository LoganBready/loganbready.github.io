import React from "react";
import Ecom from "../images/ecom-f.PNG";
import Weather from "../images/theweatherapp.PNG";
import Portfolio from "../images/portfolio.PNG";
import Points from "../images/pppoints.PNG";

const MyPortfolio = () => {
  return (
    <div className="portfolio-wrapper" id="portfolio">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>
        <div
          className="image-box-wrapper row justify-content-center"
          onClick={() => window.open("https://github.com/LoganBready/ecom-f")}
        >
          <div className="portfolio-image-box"></div>
          <h3 className="image-heading">The Fishing Store</h3>
          <img
            className="portfolio-image"
            src={Ecom}
            alt="Ecommerce project..."
          />
          <div className="overflow"></div>
        </div>
        {/* - */}
        <div
          className="image-box-wrapper row justify-content-center"
          onClick={() =>
            window.open(
              "https://github.com/LoganBready/theweatherapp.github.io"
            )
          }
        >
          <h3 className="image-heading">The Weather App</h3>
          <img
            className="portfolio-image"
            src={Weather}
            alt="Weather App Project"
          />
          <div className="overflow"></div>
        </div>
        {/* - */}
        <div
          className="image-box-wrapper row justify-content-center"
          onClick={() =>
            window.open("https://github.com/LoganBready/pp-points")
          }
        >
          <h3 className="image-heading">Paired Programming Tracker</h3>
          <img
            className="portfolio-image"
            src={Points}
            alt="Programming Points Tracker Project..."
          />
          <div className="overflow"></div>
        </div>
        {/* - */}
        <div className="image-box-wrapper row justify-content-center">
          <h3 className="image-heading">Portfolio Website</h3>
          <img
            className="portfolio-image"
            src={Portfolio}
            alt="Portfolio Website Project..."
          />
          <div className="overflow"></div>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
