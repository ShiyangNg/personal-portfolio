import React, { useState, useEffect } from "react";
import { delay, motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Reveal } from "../components/ultilities/Reveal";
import { Link } from "react-scroll";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    // console.log(window.scrollY);
    if (window.scrollY > 0) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const scrollToHeight = (height) => {
    window.scrollTo({
      top: height,
      behavior: "smooth",
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "../assets/Resume_4.pdf";
    link.download = "Resume_NgShiYang.pdf";
    link.click();
  };
  return (
    <div
      className={`py-4 px-8 sticky top-0 w-full flex text-white items-center font-montserrat transition-all duration-300 z-50 ${
        navbar ? "bg-black/50 backdrop-blur-lg" : "bg-black"
      }`}
    >
      <motion.button
        onClick={() => scrollToHeight(window.innerHeight * 2.5 - 70)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="pr-4"
        transition={{ type: "spring", stiffness: 300 }}
        onDurationChange={5}
      >
        <Reveal>About</Reveal>
      </motion.button>
      <motion.button
        onClick={() => scrollToHeight(window.innerHeight * 3.5 - 70)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="pr-4"
        transition={{ type: "spring", stiffness: 300 }}
        onDurationChange={5}
      >
        <Reveal>Skills</Reveal>
      </motion.button>
      <motion.button
        onClick={() => scrollToHeight(window.innerHeight * 4.5 - 70)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="pr-4"
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Reveal> Projects</Reveal>
      </motion.button>
      {/* <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="pr-4"
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Reveal> Experience</Reveal>
      </motion.button> */}
      <motion.button
        onClick={scrollToBottom}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="pr-4"
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Reveal> Contact</Reveal>
      </motion.button>

      {/* Social Links */}

      <motion.a
        href="https://www.linkedin.com/in/shi-yang-ng-0237242ba"
        target="_blank"
        rel="noopener noreferrer"
        className="pr-2"
        whileHover={{
          scale: 1.2, // Scale up on hover
          transition: {
            type: "spring", // Apply spring transition
            stiffness: 300, // Stiffness of the spring
            damping: 25, // Damping for smoothness
          },
        }}
        whileTap={{ scale: 0.9 }}
      >
        <Reveal>
          <FaLinkedin size={24} />
        </Reveal>
      </motion.a>
      <motion.a
        href="https://www.github.com/HyperBeast07"
        target="_blank"
        rel="noopener noreferrer"
        className="pr-2"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Reveal>
          <FaGithub size={24} className />
        </Reveal>
      </motion.a>
      <div className="ml-auto">
        <Reveal>
          <motion.button
            className="ml-auto px-2 py-2 rounded-md border border-red-500"
            whileHover={{
              backgroundColor: "#750505",
              scale: 1.1,
              borderRadius: '20%'
            }}
            transition={{ type: "spring", stiffness: 300, duration: 1 }}
            onClick={downloadResume}
          >
            My Resume
          </motion.button>
        </Reveal>
      </div>
    </div>
  );
};

export default Header;
