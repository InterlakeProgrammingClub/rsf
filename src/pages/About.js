import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import headerimg from "../assets/headerimg.jpg";

const About = () => {
  const [expanded, setExpanded] = useState(null);

  const handleToggle = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const meetings = [
    {
      date: "#/#/#",
      details: (
        <>
          <p>Talk about what you did in the meeting</p>
        </>
      ),
      image: headerimg
    },
    {
      date: "#/#/#",
      details: (
        <>
          <p>Talk about what you did in the meeting</p>
        </>
      ),
      image: headerimg
    },
    {
      date: "#/#/#",
      details: (
        <>
          <p>Talk about what you did in the meeting</p>
        </>
      ),
      image: headerimg
    },
    {
      date: "#/#/#",
      details: (
        <>
          <p>Talk about what you did in the meeting</p>
        </>
      ),
      image: headerimg
    }
  ];

  return (
    <div className="text-center">
      <motion.div
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${headerimg})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-center">
          <h1 className="mb-4 mt-12 text-4xl font-bold text-white">About Us</h1>
          <motion.div
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2, ease: "easeInOut" }
            }}
            className="mb-4 inline-block"
          >
            <a
              href="mailto:club@gmail.com"
              className="rounded bg-[#0C2340] px-4 py-2 font-bold text-white"
            >
              <span>Email or action button</span>
            </a>
          </motion.div>
        </div>
      </motion.div>
      <div className="container mx-auto px-4 py-8">
        <h2 className="mb-4 text-2xl font-bold underline underline-offset-2">
          Our Leadership Team:
        </h2>
        <div className="mb-8 flex flex-col items-center space-y-4">
          <p className="text-lg font-bold">President: Name of President</p>
          <p className="text-lg font-bold">
            Vice President: Name of Vice President
          </p>
          <p className="text-lg font-bold">Secretary: Name of Secretary</p>
          <p className="text-lg font-bold">Treasurer: Name of Treasurer</p>
          <p className="text-lg font-bold">
            Add or remove as many as you'd like
          </p>
        </div>
        <div className="mb-4 flex flex-col items-center space-y-4">
          <h2 className="text-2xl font-bold underline underline-offset-2">
            What we do:
          </h2>
          <p className="text-lg">
            At our club, we do _______________________________.
          </p>
        </div>
        <div className="mb-4 flex flex-col items-center space-y-4">
          <h2 className="text-2xl font-bold underline underline-offset-2">
            When we meet:
          </h2>
          <p className="text-lg">
            We meet every _______________________________.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-4xl px-4 pb-10 pt-4 text-white">
        <div className="grid grid-cols-1 gap-8 pt-4 md:grid-cols-2">
          {meetings.map((meeting, index) => (
            <MeetingOption
              key={index}
              index={index}
              date={meeting.date}
              details={meeting.details}
              image={meeting.image}
              expanded={expanded}
              handleToggle={handleToggle}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const MeetingOption = ({
  index,
  date,
  details,
  image,
  expanded,
  handleToggle
}) => {
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <div ref={inViewRef} className="w-full">
      <motion.div
        className="flex h-40 w-full cursor-pointer flex-col items-center justify-center rounded-md bg-white bg-opacity-25 p-4 text-center transition duration-300 hover:bg-opacity-50"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        whileHover={{
          scale: 1,
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
          transition: { duration: 0.3, ease: "easeInOut" }
        }}
        onClick={() => handleToggle(index)}
      >
        <h2 className="mb-2 text-3xl font-semibold">{date}</h2>
      </motion.div>
      {expanded === index && (
        <div className="mt-2 rounded-md bg-white p-4 text-black">{details}</div>
      )}
    </div>
  );
};

export default About;
