import { useState } from "react";
import Modal from "../Modal/Modal";
import Backdrop from "../Modal/Backdrop";
import ContactForm from "../ContactForm/ContactForm";

import "./Navbar.css";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const contactForm = () => {
    setShowModal(true);
  };

  const hideModal = () => {
    setShowModal(false);
    return;
  };

  const buttonStatus = () => {
    console.log("clicked")
  }

  return (
    <nav className="navbar">
      <div className="brand">Norra Cypern Lyxfastigheter</div>
      <div className={`menu ${menuOpen ? "open" : ""}`}>
        <ul>
          <li onClick={buttonStatus}>Om Norra Cypern</li>
          <li onClick={buttonStatus}>Att göra i Cypern</li>
          <li onClick={contactForm}>Kontakta oss</li>
          <li onClick={buttonStatus}>FAQ</li>
        </ul>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {showModal && (
        <Modal command={hideModal}>
          {" "}
          <ContactForm />
        </Modal>
      )}
      {showModal && <Backdrop show hideModal={hideModal} />}
    </nav>
  );
};

export default Navbar;
