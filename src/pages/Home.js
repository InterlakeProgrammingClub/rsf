import React from "react";
import { motion } from "framer-motion";
import headerimg from "../assets/headerimg.jpg";
import bg2 from "../assets/headerimg.jpg";
import data from "../data.json";

const Home = () => {
  return (
    <div className="text-center" style={{ fontFamily: "Poppins" }}>
      <motion.div
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${headerimg})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 sm:items-start sm:py-20 sm:pl-14 sm:pr-10">
          <h1 className="mr-2 px-3 pb-2 text-center text-6xl font-bold text-white sm:text-left">
            {data.name}
          </h1>
          <h3 className="mb-4 pr-2 text-center text-2xl text-white sm:text-left">
            {data.description}
          </h3>
          <motion.div
            whileHover={{
              scale: 1.1,
              translateZ: 50,
              perspective: 1000,
              boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.4)",
              transition: { duration: 0.2 }
            }}
            className="mb-4 inline-block text-center sm:text-left"
          >
            <a
              href=""
              className="flex items-center space-x-1 rounded bg-white px-4 py-2 text-xl font-bold text-[#0C2340]"
            >
              <span>An action button for your club</span>
            </a>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="relative h-96 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bg2})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 pb-6">
          <h3 className="mt-8 px-4 text-center text-3xl font-bold text-white underline underline-offset-2">
            Our leadership team:
          </h3>
          <ul>
            {Object.keys(data.leadership).map((role) => (
              <>
                {Array.isArray(data.leadership[role]) ? (
                  data.leadership[role].map((name, i) => (
                    <li
                      className="mt-4 px-4 text-center text-lg font-bold text-white"
                      key={i}
                    >
                      {role}: {name}
                    </li>
                  ))
                ) : (
                  <li className="mt-4 px-4 text-center text-lg font-bold text-white">
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
              transition: { duration: 0.2 }
            }}
            className="mb-4 inline-block text-center sm:text-left"
          >
            <a
              href=""
              className="mt-0 flex items-center space-x-1 rounded bg-white px-3 py-2 text-lg font-bold text-[#0C2340]"
            >
              <span>Another action button</span>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
