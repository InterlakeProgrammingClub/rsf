import React from "react";
import { motion } from "framer-motion";
import img3 from "../assets/img3.png";
import img4 from "../assets/img2.png";
import data from "../data.json";
import { SiLinktree } from "react-icons/si";
import { CgProfile } from "react-icons/cg";
import logo from "../assets/logo.png";

const Home = () => {
  return (
    <div className="text-center" style={{ fontFamily: "Poppins" }}>
      <motion.div
        className="relative min-h-[1100px] sm:h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${img3})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center sm:items-start sm:py-20 sm:pl-14 sm:pr-10 bg-black bg-opacity-70">
          <img
            src={logo}
            alt="Logo"
            className="mr-2 sm:mt-20 mt-28 h-40 w-40 rounded-md sm:hidden"
          />
          <h1
            className="mr-2 px-3 pb-2 pt-4 text-center text-5xl font-bold sm:text-left"
            style={{
              background: "linear-gradient(to right, #6e92d9, #a562db)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {data.name}
          </h1>
          <h3
            className="mb-4 px-4 text-center text-2xl sm:text-left"
            style={{
              background: "linear-gradient(to right, #6e92d9, #a562db)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {data.description}
          </h3>

          <motion.div
            whileHover={{
              scale: 1.1,
              translateZ: 50,
              perspective: 1000,
              boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.4)",
              transition: { duration: 0.2 },
            }}
            className="mb-4 inline-flex pb-8 text-center sm:text-left"
          >
            <a
              href="https://linktr.ee/interlakeRSF"
              className="flex items-center space-x-1 rounded bg-[#a562db] px-4 py-2 text-xl font-bold text-[#0d0a1f]"
            >
              <span className="flex items-center justify-between">
                View our Linktree
              </span>
              <SiLinktree />
            </a>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="relative h-96 bg-cover bg-center"
        style={{
          backgroundImage: `url(${img4})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60 pb-6">
          <h3
            className="mt-8 px-4 text-center text-2xl sm:text-3xl font-bold text-[#a562db] underline underline-offset-2"
            style={{
              background: "linear-gradient(to right, #6e92d9, #a562db)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Our leadership team:
          </h3>
          <ul
            style={{
              background: "linear-gradient(to right, #6e92d9, #a562db)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {Object.keys(data.leadership).map((role) => (
              <>
                {Array.isArray(data.leadership[role]) ? (
                  data.leadership[role].map((name, i) => (
                    <li
                      className="mt-4 px-4 text-center text-lg font-bold text-[#a562db]"
                      key={i}
                    >
                      {role}: {name}
                    </li>
                  ))
                ) : (
                  <li className="mt-4 px-4 text-center text-lg font-bold text-[#a562db]">
                    {role}: {data.leadership[role]}
                  </li>
                )}
              </>
            ))}
          </ul>
          <motion.div
            whileHover={{
              scale: 1.1,
              translateZ: 50,
              perspective: 1000,
              boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.4)",
              transition: { duration: 0.2 },
            }}
            className="mx-4 inline-flex text-center pt-2 sm:text-left"
          >
            <a
              href="/about"
              className="mt-0 flex items-center space-x-1 rounded bg-[#a562db] px-3 py-2 text-lg font-bold text-[#0d0a1f]"
            >
              <span>About Us</span>
              <CgProfile />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
