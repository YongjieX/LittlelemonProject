import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Make sure to import Link
import "./Header.scss";
import DefaultLogo from "../../assets/images/logos/logoDefault.png";
import Cart from "../../assets/icons/cart.svg";
import Menu from "../../assets/icons/menu.svg";
import classNames from "classnames";
import { Modal } from "../Modals/Modal";


const Header = () => {
  const [active, setActive] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const isActive = (e) => {
    window.scrollY >= 50 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  });

  return (
    <header
      className={classNames({
        "active-header": active,
      })}
    >
      {showModal && <Modal showModal={showModal} setShowModal={setShowModal} />}

      <div className="container">
        <div className="logo">
          <img src={DefaultLogo} alt="default-logo" />
        </div>
        <div className="menu">
          <nav>
            <ul>
              <li>About Us</li>
              <li><a
                className="hover-effect"
                href={require("../../assets/menu.webp")} // Make sure the path is correct
                target="_blank"
                rel="noopener noreferrer" // Updated for security reasons
              >
                <h1>Menu</h1>
              </a></li>
              <li>Reviews</li>
              <li>Blog</li>
              <li>Contacts</li>
            </ul>
          </nav>
          <div className="buttons">
            <button className="button-secondary">
              <img src={Cart} alt="" />
            </button>
            <button className="button-menu">
              <img src={Menu} alt="" />
            </button>
            <button className="button-primary" onClick={() => setShowModal(true)}>
              Reserve Table
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
