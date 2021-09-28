import React from "react";

const Experience = () => {
  return (
    <div className="experience">
      <div className="d-flex justify-content-center my-5"></div>
      <h1 className="mb-5">Experience</h1>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2012-2016</h3>
            <h4>Utah State Developmental Center</h4>
            <p>
              Supervised 5-8 employees as a Program Lead and performed monthly
              and quarterly training. Monitored and assisted mental health
              patients in psychiatric units for the state of Utah. Coordinated
              with staff in assisting patients in therapy, and vital health
              checks. Utilized patient tracking software to monitor patient
              progress.
            </p>
          </div>
        </div>
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2016-2021</h3>
            <h4>Affinity Services</h4>
            <p>
              Managed and arranged staff and clients to ensure timely completion
              of appointments and activities. Oversaw morning standups with
              supervised staff to track progress and daily duties. Decreased
              violent behaviors by 25% by implementing monthly meetings with
              Behavior Specialists.
            </p>
          </div>
        </div>
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2021-Current</h3>
            <h4>DevMountain Student Developers</h4>
            <p>
              Developed an ecommerce site using React and Node to provide a
              simple user experience for various fishing equipment. Provided
              authentication and user credentials using Bcrypt and JSON Web
              Token to ensure a secure shopping experience. Integrated React
              Bootstrap for styling to ensure seamless UI for users.
              <br /> Formulated a platform to keep track of “programming points”
              for students at DevMountain. Worked in a team of three using
              Github Teams and Trello in a remote environment. Integrated an
              admin login and dashboard utilizing Firebase.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
