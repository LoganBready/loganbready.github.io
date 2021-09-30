import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className="header-wraper" id="home">
      <div className="main-info">
        <h1>Logan Bready.</h1>
        <Typed
          className="typed-text"
          strings={["PostgreSQL", "Express", "React", "Node"]}
          typeSpeed={55}
          backSpeed={60}
          loop
        />
        <Link smooth={true} to="contacts" offset={-130} className="my-3">
          <a href="" className="btn-main-offer">
            Contact Me
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Header;
