import React from "react";
import { FaEnvelope, FaCalendarAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import headerimg from "../assets/headerimg.jpg";
import { FaShareNodes } from "react-icons/fa6";
import data from "../data.json";

const Contact = () => {
  const images = [headerimg];
  const bgNum = Math.floor(Math.random() * 1);
  const bgImage = images[bgNum];

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Club Website",
          text: "Come to our meetings!",
          url: window.location.href
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      alert("Web Share API is not supported in your browser.");
    }
  };

  return (
    <div className="text-center">
      <motion.div
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-center">
          <h1 className="mb-4 mt-12 text-4xl font-bold text-white">
            Contact Us
          </h1>
          <motion.div
            whileHover={{
              scale: 1.1,
              translateZ: 50,
              perspective: 1000,
              boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.4)",
              transition: { duration: 0.2 }
            }}
            className="mb-4 inline-block"
          >
            <a
              href="mailto:club@gmail.com"
              className="rounded bg-[#0C2340] px-4 py-2 font-bold text-white"
            >
              <span>email or action button</span>
            </a>
          </motion.div>
        </div>
      </motion.div>
      <div className="container mx-auto px-4 py-8">
        <h2 className="mb-4 text-2xl font-bold underline underline-offset-2">
          Contact Us:
        </h2>
        <div className="mb-8 flex flex-col items-center space-y-4">
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
          >
            <FaShareNodes
              className="text-[#0C2340]"
              style={{ verticalAlign: "middle" }}
            />
            <a
              href="#"
              onClick={handleShare}
              className="flex items-center space-x-2 rounded bg-[#0C2340] px-4 py-2 font-bold text-white"
              style={{ perspective: "500px" }}
            >
              Share our Website
            </a>
          </motion.div>
          <div className="flex items-center space-x-2">
            <FaCalendarAlt
              className="text-[#0C2340]"
              style={{ verticalAlign: "middle" }}
            />
            <p className="text-lg font-bold">Meeting info goes here</p>
          </div>
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
          >
            <FaEnvelope
              className="text-[#0C2340]"
              style={{ verticalAlign: "middle" }}
            />
            <a
              href="mailto:club@gmail.com"
              className="flex items-center space-x-2 rounded bg-[#0C2340] px-4 py-2 font-bold text-white"
              style={{ perspective: "500px" }}
            >
              email
            </a>
          </motion.div>
        </div>
        <div className="mb-0 flex flex-col items-center space-y-4">
          <h2 className="text-2xl font-bold underline underline-offset-2">
            Extra
          </h2>
          <a
            href={data.instagram}
            className="text-lg underline hover:text-gray-500"
          >
            Instagram
          </a>
          <a
            href={data.discord}
            className="text-lg underline hover:text-gray-500"
          >
            Discord
          </a>
          <a
            href={data.linktree}
            className="text-lg underline hover:text-gray-500"
          >
            LinkTree
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
