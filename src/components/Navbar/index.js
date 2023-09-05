import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "simplelightbox/dist/simple-lightbox.min.css";
import "bootstrap/js/dist/collapse"; // Import the Bootstrap Collapse component
import "bootstrap/js/dist/scrollspy"; // Import the Bootstrap ScrollSpy component
import Logo from "../../assets/images/logos/logo1.svg";
import "./style.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  useEffect(() => {
    const navbarShrink = () => {
      const navbarCollapsible = document.getElementById("mainNav");
      if (!navbarCollapsible) {
        return;
      }
      if (window.scrollY === 0) {
        navbarCollapsible.classList.remove("navbar-shrink");
      } else {
        navbarCollapsible.classList.add("navbar-shrink");
      }
    };

    navbarShrink();
    document.addEventListener("scroll", navbarShrink);

    const navbarToggler = document.querySelector(".navbar-toggler");
    const responsiveNavItems = Array.from(
      document.querySelectorAll("#navbarResponsive .nav-link")
    );

    responsiveNavItems.forEach((responsiveNavItem) => {
      responsiveNavItem.addEventListener("click", () => {
        const computedStyle = window.getComputedStyle(navbarToggler);
        if (computedStyle.display !== "none") {
          navbarToggler.click();
        }
      });
    });

    return () => {
      // Cleanup event listeners when component unmounts
      document.removeEventListener("scroll", navbarShrink);
      responsiveNavItems.forEach((responsiveNavItem) => {
        responsiveNavItem.removeEventListener("click", () => {
          const computedStyle = window.getComputedStyle(navbarToggler);
          if (computedStyle.display !== "none") {
            navbarToggler.click();
          }
        });
      });
    };
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top py-2"
      id="mainNav"
    >
      <div className="container px-5 px-lg-5">
        <Link className="navbar-brand" to={"/"}>
          <img src={Logo} alt="Logo Saving Pets" />
        </Link>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto my-2 my-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#about">
                Sobre Nós
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#como-denunciar">
                Como Fazer Denúncias
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#denuncias">
                Denúncias
              </a>
            </li>
            <Link to="/cadastro" style={{textDecoration:"none"}}>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Cadastro
              </a>
            </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
