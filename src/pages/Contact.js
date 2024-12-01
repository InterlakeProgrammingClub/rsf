import React from "react";
import { FaEnvelope, FaCalendarAlt, FaInstagram, FaDiscord } from "react-icons/fa";
import { motion } from "framer-motion";
import bgimg from "../assets/img1.png";
import { FaShareNodes } from "react-icons/fa6";
import data from "../data.json";
import { SiLinktree } from "react-icons/si";

const Contact = () => {

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Interlake RSF",
          text: "Come to Interlake RSF!",
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
    <div className="text-center ">
      <motion.div
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgimg})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-center">
          <h1
            className="mb-4 mt-12 text-4xl font-bold text-[#a562db]"
            style={{
              background: "linear-gradient(to right, #6e92d9, #a562db)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >
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
              href="https://linktr.ee/interlakeRSF"
              className="flex items-center space-x-1 rounded bg-[#0d0a1f] px-4 py-2 text-md font-bold text-[#a562db]"
            >
              <span className="flex items-center justify-between">
                View our Linktree
              </span>
              <SiLinktree />
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
              className="text-[#0d0a1f]"
              style={{ verticalAlign: "middle" }}
            />
            <a
              href="#"
              onClick={handleShare}
              className="flex items-center space-x-2 rounded bg-[#0d0a1f] px-4 py-2 font-bold text-[#a562db]"
              style={{ perspective: "500px" }}
            >
              Share our Website
            </a>
          </motion.div>
          <div className="flex items-center space-x-2">
            <p className="text-lg font-bold">We meet at {data.location} from {data.time}</p>
          </div>
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
          >
            <FaEnvelope
              className="text-[#0d0a1f]"
              style={{ verticalAlign: "middle" }}
            />
            <a
              href={`mailto:${data.email}`}
              className="flex items-center space-x-2 rounded bg-[#0d0a1f] px-4 py-2 font-bold text-[#a562db]"
              style={{ perspective: "500px" }}
            >
              Email Us for Questions
            </a>
          </motion.div>
        </div>
        <div className="mb-0 flex flex-col items-center space-y-4">
          <h2 className="text-2xl font-bold underline underline-offset-2">
            Extra Links
          </h2>
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
          >
            <FaInstagram
              className="text-[#0d0a1f]"
              style={{ verticalAlign: "middle" }}
            />
            <a
              href={data.instagram}
              className="flex items-center space-x-2 rounded bg-[#0d0a1f] px-4 py-2 font-bold text-[#a562db]"
              style={{ perspective: "500px" }}
            >
              Instagram
            </a>
          </motion.div>
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
          >
            <FaDiscord
              className="text-[#0d0a1f]"
              style={{ verticalAlign: "middle" }}
            />
            <a
              href={data.discord}
              className="flex items-center space-x-2 rounded bg-[#0d0a1f] px-4 py-2 font-bold text-[#a562db]"
              style={{ perspective: "500px" }}
            >
              Discord
            </a>
          </motion.div>
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
          >
            <SiLinktree
              className="text-[#0d0a1f]"
              style={{ verticalAlign: "middle" }}
            />
            <a
              href={data.linktree}
              className="flex items-center space-x-2 rounded bg-[#0d0a1f] px-4 py-2 font-bold text-[#a562db]"
              style={{ perspective: "500px" }}
            >
              Linktree
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
