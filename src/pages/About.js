import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaDiscord } from "react-icons/fa";
import bgimg from "../assets/img4.png";
import officer1 from "../assets/officer1.jpg";
import officer2 from "../assets/officer2.jpg";
import officer3 from "../assets/officer3.jpg";
import officer4 from "../assets/officer4.png";
import officer5 from "../assets/officer5.jpg";
import officer6 from "../assets/officer6.jpg";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import data from "../data.json";

const About = () => {
  const leadershipImages = [
    officer1,
    officer2,
    officer3,
    officer4,
    officer5,
    officer6
  ];

  const photos = [img1, img2, img3, img4, img5];

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
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div className="bg-[#a562db] text-center">
      <motion.div
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgimg})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
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
            About Us
          </h1>
          <motion.div
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2, ease: "easeInOut" }
            }}
            className="mb-4 inline-block"
          >
            <a
              href="/contact"
              className="rounded bg-[#0d0a1f] px-4 py-2 font-bold text-[#a562db]"
            >
              <span>Contact Us</span>
            </a>
          </motion.div>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 py-8 text-[#0d0a1f]">
        <h2 className="mb-4 text-2xl font-bold underline underline-offset-2">
          Our Leadership Team:
        </h2>

        <div className="carousel-container">
          <Slider {...settings}>
            {leadershipImages.map((image, index) => (
              <div key={index} className="carousel-slide">
                <div className="flex h-full w-full justify-center pb-8">
                  <img
                    src={image}
                    alt={`Leadership Team ${index + 1}`}
                    className="h-full w-full rounded-md object-cover shadow-lg"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="mb-4 flex flex-col items-center space-y-4">
          <h2 className="pt-8 text-2xl font-bold underline underline-offset-2">
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
        </div>

        <div className="carousel-container">
          <Slider {...settings}>
            {photos.map((image, index) => (
              <div key={index} className="carousel-slide">
                <div className="flex h-full w-full justify-center pb-8">
                  <img
                    src={image}
                    alt={`Photo ${index + 1}`}
                    className="h-60 rounded-md object-cover shadow-lg"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default About;
