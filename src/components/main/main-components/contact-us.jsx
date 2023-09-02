import React from "react";
import bracket from "../../../svg/bracket.svg";

export default function ContactUs() {
  return (
    <div className="contact-us">
      <div className="contact-us__text">
        <div className="url">
          <p>Best credit offers {">"}</p>
          <p>Contact Us {">"}</p>
        </div>
        <div className="contact">
          <h1>CONTACT US</h1>
          <img src={bracket} />
          <p>
            We welcome your comments, questions, or any request you may have! If
            you would like to contact our staff, please complete the form below.
            <br />
            <br />
            We will respond to your inquiries ASAP!
          </p>
        </div>
      </div>
    </div>
  );
}
