import React from "react";
import me from "../me.jpg";

const AboutMe = () => {
  return (
    <div className="container py-5" id="about">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={me} alt="profile picture" />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">About Me</h1>
          <p>
            My name is Logan Bready, and I'm a Full Stack Web Developer based
            out of Salt Lake City, Utah. I specializes in PostgreSQL, Express,
            React, and Node. My background is primarily in the social working
            industry. While studying Information Technology at Utah Valley
            University, I discovered my passion was in software development.
            After a few months of self-teaching, I took a risk and put my
            traditional education on hold to attend DevMountains full stack
            development course. <br />
            <br />I am passionate about my work and enjoy challenging myself by
            learning new things. Outside of work, you can find me fishing the
            rivers, playing with my dog, or spending time with my wife. I enjoy
            playing a wide variety of video games, and playing the guitar!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
