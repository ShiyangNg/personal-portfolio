import React, { useEffect, useState } from "react";
import { Reveal } from "../components/ultilities/Reveal";
import { motion, AnimatePresence } from "framer-motion";
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
  const email = "ngshiyang@gmail.com";
  const email2 = "ngsh0069@e.ntu.edu.sg";

  // Lightweight toast (replaces antd's message API): holds a message string,
  // shown briefly then auto-cleared.
  const [toast, setToast] = useState("");
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(""), 2000);
    return () => clearTimeout(timer);
  }, [toast]);

  // copy a specific address and show a single success message
  const handleCopy = (addr) => {
    navigator.clipboard.writeText(addr).then(() => {
      setToast("Email copied to clipboard!");
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
    if (window.lenis) {
      window.lenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };


  return (
    <div className="relative text-white flex items-start justify-between">
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] rounded-md bg-white px-4 py-2 text-sm font-medium text-black shadow-lg"
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
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
              "_blank",
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
          © 2026 Ng Shi Yang
          {/* <br />
        All rights reserved. */}
        </motion.p>
      </div>
    </div>
  );
};

const Nav = () => {
  // Scroll to a section by its anchor id so it sits flush at the top of the
  // viewport (filling the whole page, under the translucent nav — no header
  // offset). Routes through the shared Lenis instance (same as the top nav).
  //
  // Uses the offsetTop chain (transform-independent layout position) rather
  // than an element target, because the sections carry framer-motion
  // scale/rotate transforms that skew getBoundingClientRect().
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

  return (
    <div className="text-white flex shrink-0 gap-20">
      <div className="flex flex-col gap-2 items-start">
        <button onClick={() => scrollToSection("#about")}>About</button>
        <button onClick={() => scrollToSection("#experience")}>
          Experience
        </button>
        <button onClick={() => scrollToSection("#projects")}>Projects</button>
      </div>
    </div>
  );
};
