import { React, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";
import data from "../data.json";

const Header = () => {
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-[#0C2340] text-white">
      <div className="container mx-auto flex items-center justify-between px-3 py-3">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="mr-2 h-12 w-12 rounded-md" />
          <span className="text-2xl font-bold drop-shadow-md">{data.name}</span>
        </Link>
        <nav className="hidden space-x-4 md:flex">
          <Link
            to="/"
            className={`hover:underline ${location.pathname === "/" && "underline drop-shadow-md"}`}
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`hover:underline ${location.pathname === "/about" && "underline drop-shadow-md"}`}
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`hover:underline ${location.pathname === "/contact" && "underline drop-shadow-md"}`}
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            Contact
          </Link>
        </nav>
        <button className="md:hidden" onClick={toggleDrawer}>
          <FaBars />
        </button>
      </div>
      {drawerOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-75 md:hidden">
          <div className="absolute right-0 top-0 p-4">
            <button onClick={toggleDrawer}>
              <FaTimes className="text-white" />
            </button>
          </div>
          <div className="flex h-full flex-col items-center justify-center space-y-4 text-white">
            <Link
              to="/"
              onClick={toggleDrawer}
              className={`text-xl ${location.pathname === "/" && "underline"}`}
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={toggleDrawer}
              className={`text-xl ${location.pathname === "/about" && "underline"}`}
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
            >
              About
            </Link>
            <Link
              to="/contact"
              onClick={toggleDrawer}
              className={`text-xl ${location.pathname === "/contact" && "underline"}`}
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
