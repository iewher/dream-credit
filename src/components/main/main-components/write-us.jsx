import React from "react";
import EmailContactForm from "../../email-contact-form/email-contact-form";

export default function WriteUs() {
  return (
    <div className="write-us">
      <div className="form">
        <div className="form__header">
          <h2>WRITE US</h2>
        </div>
        <div className="form__inputs">
          <div className="textarea">
            <EmailContactForm />
          </div>
          <div className="about">
            <p>
              All information submitted on this form will remain completely
              confidential.
              <br /> We <span>DO NOT sell</span> names or email addresses to
              third parties.
              <br />
              <br /> Please review our privacy policy for further information.
              <br />
              <br />
              Please note:
              <br /> We <span>DO NOT issue credit cards</span> or have any type
              of personal credit card account information. If you have questions
              pertaining to an existing credit card account, please contact the
              bank that issued the credit card directly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
