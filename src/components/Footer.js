import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-g col-sm-6">
            <div className="d-flex">
              <a
                href="https://www.linkedin.com/in/logan-bready/"
                target="_blank"
              >
                <p>LinkedIn</p>
              </a>
            </div>
            <div className="d-flex">
              <a href="https://github.com/LoganBready" target="_blank">
                <p>Github</p>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <Link smooth={true} to="home">
                  <a className="footer-nav">Home</a>
                </Link>
                <br />
                <Link smooth={true} to="about" offset={-130}>
                  <a className="footer-nav">About Me</a>
                </Link>
                <br />
                <Link smooth={true} to="services" offset={-130}>
                  <a className="footer-nav">Services</a>
                </Link>
              </div>
              <div className="col">
                <Link smooth={true} to="experience" offset={-130}>
                  <a className="footer-nav">Experience</a>
                </Link>
                <br />
                <Link smooth={true} to="portfolio" offset={-130}>
                  <a className="footer-nav">Portfolio</a>
                </Link>
                <br />
                <Link smooth={true} to="contacts" offset={-130}>
                  <a className="footer-nav">Contact</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 mt-3 align-items-center">
            <div className="d-flex justify-content-center">
              <FacebookShareButton url={"www.loganbready.com"}>
                <FacebookIcon className="mx-3" size={36} />
              </FacebookShareButton>

              <TwitterShareButton url={"www.loganbready.com"}>
                <TwitterIcon className="mx-3" size={36} />
              </TwitterShareButton>

              <LinkedinShareButton url={"www.loganbready.com"}>
                <LinkedinIcon className="mx-3" size={36} />
              </LinkedinShareButton>
            </div>
            <p className="pt-3 text-center">
              Copryright&copy; {new Date().getFullYear}&nbsp;Logan Bready | All
              Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
