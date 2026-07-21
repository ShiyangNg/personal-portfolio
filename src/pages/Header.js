import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { Reveal } from "../components/ultilities/Reveal";
import About from "./About";
const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const headerRef = useRef(null);
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

  // Scroll to a section by its anchor id so it sits flush at the top of the
  // viewport (filling the whole page). The nav bar is intentionally
  // translucent, so the section is meant to show *under* it — no header
  // offset is subtracted. Routes through the shared Lenis instance so there is
  // a single smooth-scroll animation instead of two competing loops.
  //
  // NOTE: the sections carry framer-motion scale/rotate transforms and toggle
  // position: sticky, so getBoundingClientRect() (what Lenis uses for element
  // targets) returns the *transformed* box and lands in the wrong place. We
  // instead sum the offsetTop chain, which is the transform-independent layout
  // position, and pass it to Lenis as a plain number.
  const scrollToSection = (selector) => {
    const target = document.querySelector(selector);
    if (!target) return;

    let top = 0;
    for (let node = target; node; node = node.offsetParent) {
      top += node.offsetTop;
    }

    if (window.lenis) {
      window.lenis.scrollTo(top);
    } else {
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/assets/Resume_NgShiYang.pdf";
    link.download = "Resume_NgShiYang.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!showHeader) {
    return null;
  }

  return (
    <div
      ref={headerRef}
      id="site-header"
      className={`py-4 px-8 fixed top-0 w-full flex text-white items-center font-montserrat transition-all duration-300 z-50 ${
        navbar ? "bg-black/30 backdrop-blur-xs" : "bg-black"
      }`}
    >
      <motion.button
        onClick={() => scrollToSection("#about")}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="pr-4"
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Reveal>About</Reveal>
      </motion.button>
      <motion.button
        onClick={() => scrollToSection("#experience")}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="pr-4"
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Reveal>Experience</Reveal>
      </motion.button>
      <motion.button
        onClick={() => scrollToSection("#projects")}
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
        onClick={() => scrollToSection("#footer")}
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
    </div>
  );
};

export default Header;
