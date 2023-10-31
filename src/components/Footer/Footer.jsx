import { useState } from "react";
import Modal from "../Modal/Modal";
import Backdrop from "../Modal/Backdrop";
import ContactForm from "../ContactForm/ContactForm";
import "./Footer.css";
import {useLocation, Link } from "react-router-dom";

const Footer = () => {
    const location = useLocation();
  const [showModal, setShowModal] = useState(false);

  const contactForm = () => {
    setShowModal(true);
  };

  const hideModal = () => {
    setShowModal(false);
  };


  return (
    <div className="footer">
      <ul>
          <li>
            <Link
              to="/"
              className={`footer-link ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              Hem
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`footer-link ${
                location.pathname === "/about" ? "active" : ""
              }`}
            >
              Om Norra Cypern
            </Link>
          </li>
          <li>
            <Link
              to="/todo"
              className={`footer-link ${
                location.pathname === "/todo" ? "active" : ""
              }`}
            >
              Att göra i Cypern
            </Link>
          </li>
          <li onClick={contactForm}>Kontakta oss</li>
          <li>
            <Link
              to="/faq"
              className={`footer-link ${
                location.pathname === "/faq" ? "active" : ""
              }`}
            >
              FAQ
            </Link>
          </li>
          <li>
            <Link
              to="/aboutus"
              className={`footer-link ${
                location.pathname === "/aboutus" ? "active" : ""
              }`}
            >
              Om oss
            </Link>
          </li>
        </ul>
      {showModal && (
        <Modal command={hideModal}>
          {" "}
          <ContactForm />
        </Modal>
      )}
      {showModal && <Backdrop show hideModal={hideModal} />}
    </div>
  );
};

export default Footer;
