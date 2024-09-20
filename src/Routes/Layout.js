import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import HomeIcon from "../Icons/homeIcon.svg";

const Layout = () => {
  return (
    <div className="Main-Layout-Container">
      <nav>
        <ul>
          <li>
            <NavLink to="/" element={<Home />}>
              <img src={HomeIcon} alt="homeicon" />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="Contact" element={<Contact />}>
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink to="About" element={<About />}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="Payment" element={<Home />}>
              Payment
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
