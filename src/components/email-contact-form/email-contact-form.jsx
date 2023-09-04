import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import arrow from "../../svg/arrow.svg";
import keys from "./keys";

const EmailContactForm = () => {
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
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        keys.SERVICE_ID,
        keys.TEMPLATE_ID,
        form.current,
        keys.API_PUBLIC_KEY
      )
      .then(
        (result) => {
          alert("Сообщение успешно отправлено");
        },
        (error) => {
          alert("Сообщение не отправлено");
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="input">
        <label for="subject">
          Subject<span>*</span>:
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={selectedValue}
          readOnly
        />
        <button type="button" className="dropdown" onClick={toggleDropdown}>
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
      <div className="send">
        <span>* required fields</span>
        <input type="submit" value="SEND" />
      </div>
    </form>
  );
};

export default EmailContactForm;
