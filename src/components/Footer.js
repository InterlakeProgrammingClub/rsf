import { React } from "react";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0C2340] py-4 text-white">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div>
          {/* Keep the website made by part */}
          <p>Website made by Interlake Programming Club</p>
          <p>Email: clubname@gmail.com</p>
        </div>
        <div className="items-end">
          <a href="https://instagram.com" className="hover:text-gray-800">
            <FaInstagram size={21} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
