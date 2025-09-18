import React, { useRef } from "react";
import { Reveal } from "../components/ultilities/Reveal";
import { motion, useTransform, useScroll, delay } from "framer-motion";
import Skills from "./Skills";
import Projects from "./Projects";
import AboutImage from "../assets/images/AboutBackground.jpg";
import AboutCard from "../components/AboutCard";
import { Card } from "antd";
import Myself from "../assets/images/Me.jpg";

const About = ({ id }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  // const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const isSticky = useTransform(scrollYProgress, [0.8, 1], [false, true]); // Transition near 200vh
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 0.3], ["0px", "-30px"]);

  const textVariant = {
    hidden: { opacity: 0, y: 12 },
    show: (i = 1) => ({ opacity: 1, y: 0, transition: { delay: 0.12 * i } }),
  };
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
          backgroundImage: `url(${AboutImage})`,
        }}
        className="bg-black sticky h-[100vh] font-montserrat text-white p-24"
      >
        <Reveal>
          <div className="text-7xl font-bold pb-10">About Me</div>
        </Reveal>

        {/* Profile card */}

        <Reveal className=" mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          <div className="col-span-1">
            <motion.div
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="bg-white/5 border border-white/8 rounded-2xl p-6 backdrop-blur-sm shadow-lg"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-40 h-40 rounded-full overflow-hidden ring-1 ring-white/10">
                  <img
                    src={Myself}
                    alt="Shi Yang Ng"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="mt-4 text-2xl font-semibold">Shi Yang Ng</h3>
                <p className="mt-1 text-sm text-gray-200 mb-2">
                  Year 2 EEE • 2nd Major in Data Analytics • NTU Singapore
                </p>
                <Reveal>
                  <motion.div className="w-full pb-4">
                    Beyond my core focus, I’m also exploring AI and software
                    development, which I see as powerful tools to complement my
                    engineering background.
                  </motion.div>
                </Reveal>
                <Reveal>
                  <motion.div className="pb-4">
                    I’ve always been fascinated by the process of turning ideas
                    into real, working solutions—there’s something deeply
                    rewarding about solving problems and bringing concepts to
                    life on screen.
                  </motion.div>
                </Reveal>
                <Reveal>
                  <motion.div className="pb-4">
                    Lately, I’ve been spending much of my free time exploring
                    the world of artificial intelligence.
                  </motion.div>
                </Reveal>
                <Reveal>
                  <motion.div>
                    It’s a field that excites me with its vast possibilities,
                    and I’m always eager to deepen my understanding and build
                    meaningful skills in this rapidly evolving space.
                  </motion.div>
                </Reveal>
                <div className="mt-4 flex gap-3 flex-wrap justify-center">
                  <a
                    href="#projects"
                    className="px-4 py-2 rounded-full bg-indigo-600/90 hover:bg-indigo-500 text-sm font-medium"
                  >
                    View projects
                  </a>
                  <a
                    href="mailto:shi@example.com"
                    className="px-4 py-2 rounded-full border border-white/10 text-sm hover:bg-white/3"
                  >
                    Contact
                  </a>
                </div>

                <div className="mt-6 w-full text-left">
                  <h4 className="text-sm text-gray-300 uppercase tracking-wider mb-2">
                    Tech highlights
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "React",
                      "Node",
                      "Python",
                      "PyTorch",
                      "SQL",
                      "Tailwind",
                    ].map((t) => (
                      <span
                        key={t}
                        className="border text-xs px-3 py-1 rounded-full bg-white/6 text-gray-100"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Reveal>
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
