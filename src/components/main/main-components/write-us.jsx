import React, { useState } from "react";
import arrow from "../../../svg/arrow.svg";
import axios from "axios";

export default function WriteUs() {
  const [formData, setFormData] = useState({
    // subject: "",
    email: "",
    name: "",
    phone: "",
    questions: "",
  });
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Select Subject");
  const options = [
    "Choosing Credit Card",
    "Credit Card Application Problems",
    "Earning and Redeeming Rewards3",
    "Building Credit with Credit Card",
    "Balance Transfer Issues",
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedValue(option);
    setIsOpen(false);
  };

  return (
    <div className="write-us">
      <div className="form">
        <div className="form__header">
          <h2>WRITE US</h2>
        </div>
        <div className="form__inputs">
          <div className="textarea">
            <div className="input">
              <label htmlFor="subject">
                Subject<span>*</span>:
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={selectedValue}
                readOnly
              />
              <button className="dropdown" onClick={toggleDropdown}>
                <img src={arrow} alt="Dropdown Arrow" />
              </button>
              {isOpen && (
                <ul className="dropdown-list">
                  {options.map((option, index) => (
                    <li key={index} onClick={() => handleOptionClick(option)}>
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="input">
              <label for="email">
                E-mail<span>*</span>:
              </label>
              <input type="text" id="email" name="email" />
            </div>
            <div className="input">
              <label for="name">
                Name<span>*</span>:
              </label>
              <input type="text" id="name" name="name" />
            </div>
            <div className="input">
              <label for="phone">Phone number:</label>
              <input type="text" id="phone" name="phone" />
            </div>
            <div className="input">
              <label for="questions">
                Question<span>*</span>:
              </label>
              <input
                type="text"
                id="questions"
                className="questions"
                name="questions"
              />
            </div>
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
        <div className="send">
          <span>* required fields</span>
          <input type="submit" value="SEND" />
        </div>
      </div>
    </div>
  );
}
