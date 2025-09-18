import React, { useEffect, useRef, useState } from "react";
import { Reveal } from "../components/ultilities/Reveal";
import { motion, useInView, useAnimation } from "framer-motion";
import { Button, message, Space } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function FooterContent() {
  return (
    // #4E4E5A
    <div className="font-montserrat bg-black py-6 px-10 h-full w-full flex flex-col justify-between">
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}

const Section1 = () => {
  return (
    <div>
      <Nav />
    </div>
  );
};

const Section2 = () => {
  return (
    <div className="flex justify-between items-end">
      <Reveal>
        <motion.h1
          // #d8d5db
          className="text-white text-[12vw] leading-[0.8] mt-10 text-block"
        >
          Get In Touch
        </motion.h1>
      </Reveal>
    </div>
  );
};

const Section3 = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const email = "ngshiyang@gmail.com";
  const email2 = "ngsh0069@e.ntu.edu.sg";

  // copy a specific address and show a single success message
  const handleCopy = (addr) => {
    navigator.clipboard.writeText(addr).then(() => {
      messageApi.success("Email copied to clipboard!");
    });
  };

  const [showArrow, setShowArrow] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;

      // Show arrow when user is near the bottom
      if (scrollTop + clientHeight >= scrollHeight - 100) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    const duration = 2000;
    const start = window.scrollY;
    const startTime = performance.now();

    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      window.scrollTo(0, start * (1 - progress));

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  return (
    <div className="relative text-white flex items-start justify-between">
      {contextHolder}
      <div>
        <Reveal>
          <div className="font-bold">MESSAGE</div>
        </Reveal>

        {/* parent animates into view; emails are stacked in separate rows and each copies individually */}
        <motion.div
          className="mt-2"
          initial={{ y: 50, x: -100, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            type: "spring",
            stiffness: 80,
            duration: 1,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          <div className="flex flex-col gap-1">
            <motion.button
              onClick={() => handleCopy(email)}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-left cursor-pointer bg-transparent p-0 text-white/70 hover:text-white text-sm"
              aria-label={`Copy ${email}`}
            >
              {email}
            </motion.button>

            <motion.button
              onClick={() => handleCopy(email2)}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-left cursor-pointer bg-transparent p-0 text-white/70 hover:text-white text-sm"
              aria-label={`Copy ${email2}`}
            >
              {email2}
            </motion.button>
          </div>
        </motion.div>
      </div>
      <div>
        <Reveal>
          <div className="font-bold">SOCIAL</div>
        </Reveal>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 0.7 }}
          transition={{
            duration: 0.5,
            delay: 0.25,
            type: "spring",
            stiffness: 300,
          }}
          whileHover={{ scale: 1.05, opacity: 1 }}
          whileTap={{ scale: 0.9 }}
          className="cursor-pointer"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/shi-yang-ng-0237242ba/",
              "_blank"
            )
          }
        >
          LinkedIn
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 0.7 }}
          whileHover={{ scale: 1.05, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.5,
            type: "spring",
            stiffness: 300,
          }}
          className="cursor-pointer"
          onClick={() => window.open("https://github.com/shiyangng", "_blank")}
        >
          Github
        </motion.div>

        <motion.div
          initial={{ y: 45, opacity: 0 }}
          whileInView={{ y: 0, opacity: 0.7 }}
          whileHover={{ scale: 1.05, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.75,
            type: "spring",
            stiffness: 300,
          }}
          className="cursor-pointer"
          onClick={() =>
            window.open("https://www.instagram.com/shiyangg_/", "_blank")
          }
        >
          Instagram
        </motion.div>
      </div>
      <div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: showArrow ? 1 : 0, y: showArrow ? 0 : 50 }}
          transition={{ duration: 1 }}
          className="flex justify-end mb-8 cursor-pointer"
        >
          <FontAwesomeIcon
            onClick={scrollToTop}
            icon={faArrowUp}
            className="text-white text-4xl"
          />
        </motion.div>
        <motion.p
          initial={{ y: -100, x: 100 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          transition={{
            type: "string",
            stiffness: 100,
            duration: 1,
            ease: "easeInOut",
            delay: 0.25,
          }}
          className="text-white opacity-0"
        >
          © 2025 Ng Shi Yang
          {/* <br />
        All rights reserved. */}
        </motion.p>
      </div>
    </div>
  );
};

const Nav = () => {
  return (
    <div className="text-white flex shrink-0 gap-20">
      <div className="flex flex-col gap-2">
        <p>About</p>
        <p>Experience</p>
        <p>Projects</p>
        <p>Contact</p>
      </div>
    </div>
  );
};
