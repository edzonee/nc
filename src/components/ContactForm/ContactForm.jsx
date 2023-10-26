import Button from "../Button/Button";
/* import emailjs from "emailjs-com"; */
import "./ContactForm.css"
import { useState } from "react";

import React, { useRef, useEffect } from "react";

const ContactForm = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef(null);

  const handleScroll = () => {
    const containerTop = containerRef.current.getBoundingClientRect().top;
    const windowBottom = window.innerHeight;

    if (containerTop < windowBottom) {
      setIsInView(true);
      window.removeEventListener("scroll", handleScroll);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      containerRef.current.classList.add("fade-in");
    }
  }, [isInView]);

  /* delete when everything works */
  const buttonStatus = () => {
    console.log("clicked")
  }

  /* const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        `${process.env.REACT_APP_SERVICE_KEY}`,
        `${process.env.REACT_APP_TEMPLATE_KEY}`,
        e.target,
        `${process.env.REACT_APP_PUBLIC_KEY}`
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      ); 
  };*/

  return (
    <div className="contact-container" ref={containerRef}>
      <div className="contact-box">
        <form ref={form} onSubmit={buttonStatus}>
          <h2>Kontakta oss!</h2>

          <div className="input-container">
            <input
              required
              className={`input-form ${name ? "filled" : ""}`}
              type="text"
              name="name"
              placeholder="Namn"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              required
              className={`input-form ${email ? "filled" : ""}`}
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              required
              className={`user-form ${message ? "filled" : ""}`}
              name="message"
              placeholder="Meddelande"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button class="default-btn" command={buttonStatus}>Skicka</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;