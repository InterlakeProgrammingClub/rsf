import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import headerimg from "../assets/headerimg.jpg";
import officer1 from "../assets/officer1.jpg";
import officer2 from "../assets/officer2.jpg";
import officer3 from "../assets/officer3.jpg";
import officer4 from "../assets/officer4.jpg";
import officer5 from "../assets/officer5.jpg";
import officer6 from "../assets/officer6.jpg";
import data from "../data.json";

const About = () => {
  const leadershipImages = [officer1, officer2, officer3, officer4, officer5, officer6];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

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
          <h1 className="mb-4 mt-12 text-4xl font-bold text-[#a562db]">About Us</h1>
          <motion.div
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2, ease: "easeInOut" },
            }}
            className="mb-4 inline-block"
          >
            <a
              href="mailto:club@gmail.com"
              className="rounded bg-[#0d0a1f] px-4 py-2 font-bold text-[#a562db]"
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

        <div className="carousel-container">
          <Slider {...settings}>
            {leadershipImages.map((image, index) => (
              <div key={index} className="carousel-slide">
                <div className="w-full h-full flex justify-center pb-8">
                  <img
                    src={image}
                    alt={`Leadership Team ${index + 1}`}
                    className="w-full h-full object-cover rounded-md shadow-lg"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="mb-4 flex flex-col items-center space-y-4">
          <h2 className="text-2xl font-bold underline underline-offset-2 pt-8">
            What we do:
          </h2>
          <p className="text-lg">{data.description}</p>
        </div>

        <div className="mb-4 flex flex-col items-center space-y-4">
          <h2 className="text-2xl font-bold underline underline-offset-2">
            When we meet:
          </h2>
          <p className="text-lg">
            {data.time} at {data.location}
          </p>
        </div>

        <div className="mb-4 flex flex-col items-center space-y-4">
          <h2 className="text-2xl font-bold underline underline-offset-2">
            Past Meetings:
          </h2>
          <p className="text-lg">Past Meetings Available in Discord!</p>
        </div>
      </div>
    </div>
  );
};

export default About;
