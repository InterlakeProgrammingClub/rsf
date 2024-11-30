import { React } from "react";
import { FaInstagram } from "react-icons/fa";
import data from "../data.json";

const Footer = () => {
  return (
    <footer className="bg-[#0d0a1f] py-4 text-[#a562db]">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div>
          {/* Keep the website made by part */}
          <p>Website made by Interlake Programming Club</p>
          <p>
            Email: <a href={`mailto:${data.email}`}>{data.email}</a>
          </p>
        </div>
        <div className="items-end">
          <a href={data.instagram} className="hover:text-gray-400">
            <FaInstagram size={21} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
