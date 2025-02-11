import React, { useEffect, useRef, useState } from "react";
import { Reveal } from "../components/ultilities/Reveal";
import { motion, useInView, useAnimation } from "framer-motion";
import { Button, message, Space } from "antd";

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
      <motion.h1
        initial={{ y: 0, x: 0, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        transition={{
          type: "string",
          stiffness: 100,
          duration: 1,
          ease: "easeInOut",
          delay: 0.25,
        }}
        // #d8d5db
        className="text-white text-[12vw] leading-[0.8] mt-10 text-block"
      >
        Get In Touch
      </motion.h1>
    </div>
  );
};

const Section3 = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const email = "ngshiyang@gmail.com";
  const copyToClipboard = () => {
    navigator.clipboard.writeText(email).then(() => {
      messageApi.success("Email copied to clipboard!");
    });
  };

  return (
    <div className="relative text-white flex items-end justify-between">
      {contextHolder}
      <div>
        <Reveal>
          <div className="font-bold">MESSAGE</div>
        </Reveal>
        <Reveal>
          <motion.p
            className="cursor-pointer"
            onClick={copyToClipboard}
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
            {email}
          </motion.p>
        </Reveal>
      </div>
      <div>
        <Reveal>
          <div className="font-bold">SOCIAL</div>
        </Reveal>
        <Reveal>
          <motion.div
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
        </Reveal>
        <Reveal>
          <motion.div
            className="cursor-pointer"
            onClick={() =>
              window.open("https://github.com/HyperBeast07", "_blank")
            }
          >
            Github
          </motion.div>
        </Reveal>
        <Reveal>
          <motion.div
            className="cursor-pointer"
            onClick={() =>
              window.open("https://www.instagram.com/shiyangg_/", "_blank")
            }
          >
            Instagram
          </motion.div>
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
          delay: 0.25,
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
    </div>
  );
};
