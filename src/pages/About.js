import React, { useRef } from "react";
import { Reveal } from "../components/ultilities/Reveal";
import { motion, useTransform, useScroll, delay } from "framer-motion";
import Skills from "./Skills";
import Projects from "./Projects";
import AboutImage from "../assets/images/photo-1633547136812-6c4baeebbeda.avif";
import AboutCard from "../components/AboutCard";
import { Card } from "antd";
import Myself from "../assets/images/DSC_2135.jpg";

const About = ({ id }) => {
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
    const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
    return (
      <motion.div
        id={id}
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
    const { Meta } = Card;

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

          backgroundImage: `url(https://images.unsplash.com/photo-1748625131782-c091818a8be0?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        }}
        className="bg-black sticky h-[100vh] font-montserrat text-white p-24"
      >
        <Reveal>
          <div className="text-7xl font-bold pb-10">About Me</div>
        </Reveal>
        {/* Subheading */}
        <div className="flex">
          {/* <Card
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.75 }}
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt="example"
                src={Myself}
              />
            }
          >
            <Meta title="Shi Yang Ng" description="Year 2 EEE @ NTU" />
          </Card> */}

          <div className="text-lg mx-auto border px-8 py-4 rounded-lg">
            <Reveal>
              <motion.div className="pb-4">
                Hi, I'm <b>Shi Yang.</b>
              </motion.div>
            </Reveal>
            <Reveal>
              <motion.div className="pb-4">
                I am currently 21 years old and studying Electrical and
                Electronic Engineering with a second major in Data Analytics at Nanyang Technological University, Singapore.
              </motion.div>
            </Reveal>
            <div>
              <Reveal>
              <motion.div className="w-full pb-4 flex ml-auto">
                Beyond academics, I enjoy designing and building applications
                that blend functionality with aesthetic appeal.
              </motion.div>
            </Reveal>
            </div>
            
            <Reveal>
              <motion.div className="pb-4">
                I’ve always been fascinated by the process of turning ideas into
                real, working solutions—there’s something deeply rewarding about
                solving problems and bringing concepts to life on screen.
              </motion.div>
            </Reveal>
            <Reveal>
              <motion.div className="pb-4">
                Lately, I’ve been spending much of my free time exploring the
                world of artificial intelligence.
              </motion.div>
            </Reveal>
            <Reveal>
              <motion.div>
                It’s a field that excites me with its vast possibilities, and
                I’m always eager to deepen my understanding and build meaningful
                skills in this rapidly evolving space.
              </motion.div>
            </Reveal>
          </div>
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
    </main>
  );
};

export default About;
