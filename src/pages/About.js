import React, { useRef } from "react";
import { Reveal } from "../components/ultilities/Reveal";
import { motion, useTransform, useScroll, delay } from "framer-motion";
import Skills from "./Skills";
import Projects from "./Projects";
import HorizontalScrollCard from "../components/HorizontalScrollCarousel";
const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  // const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const isSticky = useTransform(scrollYProgress, [0.8, 1], [false, true]); // Transition near 200vh

  const Section1 = () => {
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, -10]);
    return (
      <motion.div
        scrollYProgress={scrollYProgress}
        style={{
          scale,
          rotate,
          backgroundImage: `url(https://images.unsplash.com/photo-1472289065668-ce650ac443d2?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        }}
        className="sticky top-0 h-screen w-screen text-white flex items-center justify-center font-montserrat text-8xl font-bold "
      >
        <Reveal>INNOVATE</Reveal>
      </motion.div>
    );
  };

  const Section2 = ({ id }) => {
    const scale = useTransform(scrollYProgress, [0, 0.25], [0.8, 1]);
    const rotate = useTransform(scrollYProgress, [0, 0.25], [-10, 0]);
    return (
      <motion.div
        id={id}
        scrollYProgress={scrollYProgress}
        style={{
          position: isSticky ? "sticky" : "relative",
          top: isSticky ? "0px" : "auto",
          scale,
          rotate,

          backgroundImage: `url(https://images.unsplash.com/photo-1731862872903-1d39fe0c10f8?q=80&w=2708&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        }}
        className="sticky h-[100vh] font-montserrat text-white p-24"
      >
        <Reveal>
          <div className="text-7xl font-bold pb-4">About Me</div>
        </Reveal>

        {/* Subheading */}

        <div className="text-xl">
          <Reveal>
            <motion.div className="pb-2">
              I am currently 20 years old and a first year studying Electrical
              and Electronic Engineering at Nanyang Technological University,
              Singapore.
            </motion.div>
          </Reveal>
          <Reveal>
            <motion.div className="pb-2">
              I am dedicated to creating user-friendly and visually appealing
              applications.
            </motion.div>
          </Reveal>
          <Reveal>
            <motion.div>
              I enjoy solving complex problems and bringing ideas to life.
            </motion.div>
          </Reveal>
          <Reveal>
            <motion.div>
              Currently also learning AI during my free time. 
            </motion.div>
          </Reveal>
          <Reveal>
            <motion.div>
              Hope to gain early exposure in the tech industry. 
            </motion.div>
          </Reveal>
        </div>
      </motion.div>
    );
  };
  // const Section3 = () => {
  //   const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  //   const rotate = useTransform(scrollYProgress, [0, 1], [-5, 0]);
  //   return (
  //     <motion.div
  //       scrollYProgress={scrollYProgress}
  //       style={{ scale, rotate }}
  //       className="relative h-screen bg-red-500 text-white"
  //     >
  //       <h1 className="text-5xl font-bold">Skills</h1>
  //     </motion.div>
  //   );
  // };
  return (
    <main className="relative h-[700vh]">
      <Section1 />
      <Section2 id="about" />
      <Skills />
      <Projects />
      {/* <HorizontalScrollCard/> */}
    </main>
  );
};

export default About;
