import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit, errors } = useForm();
  const [successMessage, setSuccessMessage] = useState("");

  const serviceId = "service_w050uhp";
  const templateId = "service_w050uhp";
  const userId = "user_oeviNePdXLwS02vY3LiAh";

  const onSubmit = (data, r) => {
    sendEmail(
      serviceId,
      templateId,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        description: data.description,
      },
      userId
    );
    r.target.reset();
  };

  function sendEmail(serviceId, templateId, variables, userId) {
    emailjs
      .send(serviceId, templateId, variables, userId)
      .then(() => {
        setSuccessMessage("Form Sent Successfully.");
      })
      .catch((err) => {
        console.error(`Something went wrong ${err}`);
      });
  }

  return (
    <div className="contacts">
      <div className="text-center">
        <h1>contact me</h1>
        <p>
          Please fill out the form and I'll get back to you as soon as possible.
        </p>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
              />
              <div className="line"></div>

              <input
                id="name"
                className="form-control"
                placeholder="Phone Number"
                name="phone"
                type="text"
              />
              <div className="line"></div>

              <input
                id="email"
                className="form-control"
                placeholder="Email"
                name="email"
                type="email"
              />
              <div className="line"></div>

              <input
                id="subject"
                className="form-control"
                placeholder="Subject"
                name="subject"
                type="text"
              />
              <div className="line"></div>
            </div>
            <div className="col-md-6 col-xs-12">
              <textarea
                id="description"
                className="form-control"
                placeholder=""
                name="description"
                type="text"
              ></textarea>
              <div className="line"></div>

              <button className="btn-main-offer contact-btn" type="submit">
                Contact Me
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
