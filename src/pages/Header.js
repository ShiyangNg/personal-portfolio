import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { Reveal } from "../components/ultilities/Reveal";
import About from "./About";
const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const changeBackground = () => {
    // console.log(window.scrollY);
    if (window.scrollY > 0) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      // If scrolled to the bottom (adjust threshold if needed)
      if (scrollTop + clientHeight >= scrollHeight - 200) {
        setShowHeader(false); // Hide header
      } else {
        setShowHeader(true); // Show header
      }

      // Change background when scrolling
      if (scrollTop > 0) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };
    window.addEventListener("scroll", changeBackground);
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("scroll", changeBackground);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const animateScroll = (targetPosition, duration = 1500) => {
    const start = window.scrollY;
    const startTime = performance.now();
  
    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1); // Normalize progress (0 to 1)
      
      // Smooth scrolling using an ease-out effect
      const easeOut = 1 - Math.pow(1 - progress, 3); // Cubic easing function
  
      window.scrollTo(0, start + (targetPosition - start) * easeOut);
  
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
  
    requestAnimationFrame(animate);
  };
  
  const scrollToHeight = (height) => {
    animateScroll(height);
  };
  
  const scrollToBottom = () => {
    animateScroll(document.documentElement.scrollHeight);
  };
  
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "../assets/Resume_NgShiYang.pdf";
    link.download = "Resume_NgShiYang.pdf";
    link.click();
  };

  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: showHeader ? 1 : 0, y:showHeader ? 0 : -10 }}
      duration={1}
      className={`py-4 px-8 fixed top-0 w-full flex text-white items-center font-montserrat transition-all duration-300 z-50 ${
        navbar ? "bg-black/30 backdrop-blur-lg" : "bg-black"
      }`}
    >
      <motion.button
        onClick={() => scrollToHeight(window.innerHeight * 2.5 -140)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="pr-4"
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Reveal>About</Reveal>
      </motion.button>
      <motion.button
        onClick={() => scrollToHeight(window.innerHeight * 3.5 -140)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="pr-4"
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Reveal>Experience</Reveal>
      </motion.button>
      <motion.button
        onClick={() => scrollToHeight(window.innerHeight * 4.5 - 140)}
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
        href="https://www.github.com/shiyangng"
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
       <motion.a
        href="https://instagram.com/shiyangg_"
        target="_blank"
        rel="noopener noreferrer"
        className="pr-2"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Reveal>
          <FaInstagram size={24} className />
        </Reveal>
      </motion.a>
      <div className="ml-auto">
        <Reveal>
          <motion.button
            className="ml-auto px-2 py-2 rounded-md border border-red-500"
            whileHover={{
              backgroundColor: "#750505",
            }}
            transition={{ type: "spring", stiffness: 300, duration: 1 }}
            onClick={downloadResume}
          >
            My Resume
          </motion.button>
        </Reveal>
      </div>
    </motion.div>
  );
};

export default Header;
