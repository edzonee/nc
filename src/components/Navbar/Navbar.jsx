import { useState } from "react";
import Modal from "../Modal/Modal";
import Backdrop from "../Modal/Backdrop";
import ContactForm from "../ContactForm/ContactForm";
import { useLocation, Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
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
  };

  return (
    <nav className="navbar">
      <div className="brand">Norra Cypern Lyxfastigheter</div>
      <div className={`menu ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link
              to="/"
              className={`nav-link ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              Hem
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`nav-link ${
                location.pathname === "/about" ? "active" : ""
              }`}
            >
              Om Norra Cypern
            </Link>
          </li>
          <li>
            <Link
              to="/todo"
              className={`nav-link ${
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
              className={`nav-link ${
                location.pathname === "/faq" ? "active" : ""
              }`}
            >
              FAQ
            </Link>
          </li>
          <li>
            <Link
              to="/aboutus"
              className={`nav-link ${
                location.pathname === "/aboutus" ? "active" : ""
              }`}
            >
              Om oss
            </Link>
          </li>
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
