import { React } from "react";
import { FaEnvelope, FaInstagram } from "react-icons/fa";
import data from "../data.json";
import { SiLinktree } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-[#0d0a1f] py-4 text-[#a562db]">
      <div className="container mx-auto flex flex-col items-center justify-between px-4 sm:flex-row">
        <div className="mb-4 sm:mb-0">
          <p className="text-center sm:text-left">
            Website made by Interlake Programming Club
          </p>
        </div>
        <div className="flex items-center justify-center space-x-4 sm:justify-end sm:space-x-6">
          <a href={data.instagram} className="hover:text-white">
            <FaInstagram size={21} />
          </a>
          <a href={data.email} className="hover:text-white">
            <FaEnvelope size={21} />
          </a>
          <a href={data.linktree} className="hover:text-white">
            <SiLinktree size={21} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
