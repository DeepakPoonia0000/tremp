import React, { useState } from "react";
// import "../Styles/Navbar.css"; // Optional: add your own CSS for styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import Logo from '../assets/CompanyImage/Logo.png'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
   const closeNav = () => {
     setIsOpen(false);
   };
  if (isOpen) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }

  return (
    <div>
      <div className="navBar align-items-center">
        <div style={{ height: "55px" }}>
          <FontAwesomeIcon
            icon={isOpen ? faXmark : faBars}
            className="navIcons cursor_pointer trans_03"
            onClick={toggleNav}
          />
        </div>
        <div className="company">
          <span className="zoom-out"><img src={Logo} alt="Logo" className="zoom-out"/></span>
        </div>
        
        <div className="options" style={{ color: "white" }}>
          <svg
            className="icon icon-cart-empty cursor_pointer"
            style={{ width: "3rem" }}
            aria-hidden="true"
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 40 40"
            fill="none"
          >
            <path
              d="m15.75 11.8h-3.16l-.77 11.6a5 5 0 0 0 4.99 5.34h7.38a5 5 0 0 0 4.99-5.33l-.78-11.61zm0 1h-2.22l-.71 10.67a4 4 0 0 0 3.99 4.27h7.38a4 4 0 0 0 4-4.27l-.72-10.67h-2.22v.63a4.75 4.75 0 1 1 -9.5 0zm8.5 0h-7.5v.63a3.75 3.75 0 1 0 7.5 0z"
              fill="currentColor"
              fillRule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
      <div className={`navbarrr ${isOpen ? 'open' : ''}`} style={{}}>
        <ul className='navLinks'>
          <li><Link onClick={closeNav} to="/" className='text-black d-block text-start'>Home</Link></li>
        <li>  <Link onClick={closeNav} className="text-black d-block text-start" to="/men">
              Men
            </Link>
          </li>
          <li><Link onClick={closeNav} to="/women" className='text-black d-block text-start'>Women</Link></li>
          <li><Link onClick={closeNav} to="/children" className='text-black d-block text-start'>Children</Link></li>
          <li><Link onClick={closeNav} to="/allProducts" className='text-black d-block text-start'>All Products</Link></li>
        </ul>
        <div
          className="links pos-bottom"
          style={{
            background: "rgba(0, 0, 0, 0.04)",
            padding: "20px 0px 20px 20px",
          }}
        >
          <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
              className="icon icon-account"
              fill="none"
              viewBox="0 0 18 19"
              style={{ width: "1.8rem", marginTop: "-5px" }}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 4.5a3 3 0 116 0 3 3 0 01-6 0zm3-4a4 4 0 100 8 4 4 0 000-8zm5.58 12.15c1.12.82 1.83 2.24 1.91 4.85H1.51c.08-2.6.79-4.03 1.9-4.85C4.66 11.75 6.5 11.5 9 11.5s4.35.26 5.58 1.15zM9 10.5c-2.5 0-4.65.24-6.17 1.35C1.27 12.98.5 14.93.5 18v.5h17V18c0-3.07-.77-5.02-2.33-6.15-1.52-1.1-3.67-1.35-6.17-1.35z"
                fill="currentColor"
              />
            </svg>
            <div style={{ marginTop: "10px" }}>Log in</div>
          </div>
          <div style={{ display: "flex", gap: "15px" }}>
            <a href="">
              {" "}
              <svg
                aria-hidden="true"
                focusable="false"
                className="icon icon-twitter icon_hover trans_03 cursor_pointer"
                viewBox="0 0 20 20"
                style={{ width: "2.2rem" }}
              >
                <path
                  fill="currentColor"
                  d="M18.608 4.967a7.364 7.364 0 0 1-1.758 1.828c0 .05 0 .13.02.23l.02.232a10.014 10.014 0 0 1-1.697 5.565 11.023 11.023 0 0 1-2.029 2.29 9.13 9.13 0 0 1-2.832 1.607 10.273 10.273 0 0 1-8.94-.985c.342.02.613.04.834.04 1.647 0 3.114-.502 4.4-1.506a3.616 3.616 0 0 1-3.315-2.46c.528.128 1.08.107 1.597-.061a3.485 3.485 0 0 1-2.029-1.216 3.385 3.385 0 0 1-.803-2.23v-.03c.462.242.984.372 1.587.402A3.465 3.465 0 0 1 2.116 5.76c0-.612.14-1.205.452-1.798a9.723 9.723 0 0 0 3.214 2.612A10.044 10.044 0 0 0 9.88 7.649a3.013 3.013 0 0 1-.13-.804c0-.974.34-1.808 1.034-2.49a3.466 3.466 0 0 1 2.561-1.035 3.505 3.505 0 0 1 2.551 1.104 6.812 6.812 0 0 0 2.24-.853 3.415 3.415 0 0 1-1.547 1.948 7.732 7.732 0 0 0 2.02-.542v-.01Z"
                ></path>
              </svg>
            </a>
            <svg
              aria-hidden="true"
              focusable="false"
              className="icon cursor_pointer icon_hover trans_03 icon-facebook"
              viewBox="0 0 20 20"
              style={{ width: "2.2rem" }}
            >
              <path
                fill="currentColor"
                d="M18 10.049C18 5.603 14.419 2 10 2c-4.419 0-8 3.603-8 8.049C2 14.067 4.925 17.396 8.75 18v-5.624H6.719v-2.328h2.03V8.275c0-2.017 1.195-3.132 3.023-3.132.874 0 1.79.158 1.79.158v1.98h-1.009c-.994 0-1.303.621-1.303 1.258v1.51h2.219l-.355 2.326H11.25V18c3.825-.604 6.75-3.933 6.75-7.951Z"
              ></path>
            </svg>
            <svg
              aria-hidden="true"
              focusable="false"
              className="icon cursor_pointer icon_hover trans_03 icon-instagram"
              viewBox="0 0 20 20"
              style={{ width: "2.2rem" }}
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M13.23 3.492c-.84-.037-1.096-.046-3.23-.046-2.144 0-2.39.01-3.238.055-.776.027-1.195.164-1.487.273a2.43 2.43 0 0 0-.912.593 2.486 2.486 0 0 0-.602.922c-.11.282-.238.702-.274 1.486-.046.84-.046 1.095-.046 3.23 0 2.134.01 2.39.046 3.229.004.51.097 1.016.274 1.495.145.365.319.639.602.913.282.282.538.456.92.602.474.176.974.268 1.479.273.848.046 1.103.046 3.238.046 2.134 0 2.39-.01 3.23-.046.784-.036 1.203-.164 1.486-.273.374-.146.648-.329.921-.602.283-.283.447-.548.602-.922.177-.476.27-.979.274-1.486.037-.84.046-1.095.046-3.23 0-2.134-.01-2.39-.055-3.229-.027-.784-.164-1.204-.274-1.495a2.43 2.43 0 0 0-.593-.913 2.604 2.604 0 0 0-.92-.602c-.284-.11-.703-.237-1.488-.273ZM6.697 2.05c.857-.036 1.131-.045 3.302-.045 1.1-.014 2.202.001 3.302.045.664.014 1.321.14 1.943.374a3.968 3.968 0 0 1 1.414.922c.41.397.728.88.93 1.414.23.622.354 1.279.365 1.942C18 7.56 18 7.824 18 10.005c0 2.17-.01 2.444-.046 3.292-.036.858-.173 1.442-.374 1.943-.2.53-.474.976-.92 1.423a3.896 3.896 0 0 1-1.415.922c-.51.191-1.095.337-1.943.374-.857.036-1.122.045-3.302.045-2.171 0-2.445-.009-3.302-.055-.849-.027-1.432-.164-1.943-.364a4.152 4.152 0 0 1-1.414-.922 4.128 4.128 0 0 1-.93-1.423c-.183-.51-.329-1.085-.365-1.943C2.009 12.45 2 12.167 2 10.004c0-2.161 0-2.435.055-3.302.027-.848.164-1.432.365-1.942a4.44 4.44 0 0 1 .92-1.414 4.18 4.18 0 0 1 1.415-.93c.51-.183 1.094-.33 1.943-.366Zm.427 4.806a4.105 4.105 0 1 1 5.805 5.805 4.105 4.105 0 0 1-5.805-5.805Zm1.882 5.371a2.668 2.668 0 1 0 2.042-4.93 2.668 2.668 0 0 0-2.042 4.93Zm5.922-5.942a.958.958 0 1 1-1.355-1.355.958.958 0 0 1 1.355 1.355Z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
