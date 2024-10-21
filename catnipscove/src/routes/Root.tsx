import { Outlet } from "react-router-dom";
import { useAuth } from "../AuthContext";
import React, { useState } from "react";

export default function Root() {
  const { isAuthenticated } = useAuth();
  const { logout } = useAuth();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // render "add and manage" if the user is logged in

  return (
    <>
      <section id="wrapper">
        <header>
          <figure>
            <img src="src/Images/Logo.svg" alt="Catnips Logo" />
          </figure>

          <nav className={isMobileMenuOpen ? "nav-open" : ""}>
            <a href="/home">-Home-</a>
            <a href="/gallery">-Our Cats-</a>
            <a href="/login">-Staff Login-</a>
            {isAuthenticated && <a href="/add">-Add new Cat-</a>}
            {isAuthenticated && <a href="/manage">-Manage cats-</a>}
            {isAuthenticated && <a onClick={logout}>Logout</a>}
          </nav>

          <div className="hamburger-icon" onClick={toggleMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </header>

        <section id="content">
          <Outlet />
        </section>

        <footer>
          <section id ="contact">
            <h3> Contact us</h3>
            <h3> 099-999999</h3>
            <h3> catnip@cmail.com</h3>
          </section>
          <section id = "social-media">
            <figure>
              <img src="src/Images/logo-linkedin.svg" alt="Linkedin"/>
            </figure>
            <figure>
              <img src="src/Images/Instagram.svg" alt="Instagram"/>
            </figure>
            <figure>
              <img src="src/Images/Facebook.svg" alt="Facebook"/>
            </figure>
          </section>
          
        </footer>
      </section>
    </>
  );
}
