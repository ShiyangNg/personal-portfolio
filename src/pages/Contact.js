import React, { useEffect, useRef } from "react";
import { Reveal } from "../components/ultilities/Reveal";
import { motion, useInView, useAnimation } from "framer-motion";

export default function FooterContent() {
  return (
    // #4E4E5A
    <div className="font-montserrat bg-[#4E4E5A] py-8 px-12 h-full w-full flex flex-col justify-between">
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
  return (
    <div className="relative text-white flex items-end justify-between">
      <div>
        <Reveal>
          <div className="font-bold">MESSAGE</div>
        </Reveal>
        <Reveal>
          <motion.p
          // className="opacity-0"
          //   initial={{y:50, x: -100}}
          //   whileInView={{ opacity: 1, y: 0, x: 0 }}
          //   transition={{
          //     type: "string",
          //     stiffness: 100,
          //     duration: 1,
          //     ease: "easeInOut",
          //     delay: 0.5,
          //   }}
          >
            ngshiyang@gmail.com
          </motion.p>
        </Reveal>
      </div>
      <div>
        <Reveal>
          <div className="font-bold">SOCIAL</div>
        </Reveal>
        <Reveal>
          <div>LinkedIn</div>
        </Reveal>
        <Reveal>
          <div>Github</div>
        </Reveal>
        <Reveal>
          <div>Instagram</div>
        </Reveal>
      </div>

      <motion.p
        initial={{ y: -100, x: 100 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        transition={{
          type: "string",
          stiffness: 100,
          duration: 1,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="text-white opacity-0"
      >
        © 2025 Ng Shi Yang
        {/* <br />
        All rights reserved. */}
      </motion.p>
    </div>
  );
};

const Nav = () => {
  return (
    <div className="text-white flex shrink-0 gap-20">
      <div className="flex flex-col gap-2">
        <p>About</p>
        <p>Skills</p>
        <p>Projects</p>
        <p>Contact</p>
      </div>
      <div className="flex flex-col gap-2">
        <p>News</p>
        <p>Learn</p>
        <p>Certification</p>
        <p>Publications</p>
      </div>
    </div>
  );
};
