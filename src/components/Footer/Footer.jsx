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

  const links = [
    { to: "/", label: "Hem" },
    { to: "/about", label: "Om Norra Cypern" },
    { to: "/todo", label: "Att göra i Cypern" },
    { to: "/aboutus", label: "Om oss" },
    { to: "/faq", label: "FAQ" },
  ];

  return (
    <div className="footer">
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <Link
              to={link.to}
              className={`footer-link ${
                location.pathname === link.to ? "active" : ""
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
        <li onClick={contactForm}>Kontakta oss</li>
      </ul>

      {showModal && (
        <Modal command={hideModal}>
          <ContactForm />
        </Modal>
      )}
      {showModal && <Backdrop show hideModal={hideModal} />}
    </div>
  );
};

export default Footer;
