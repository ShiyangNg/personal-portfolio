import React, { useRef } from "react";
import { Reveal } from "../components/ultilities/Reveal";
import { motion, useTransform, useScroll } from "framer-motion";

const Skills = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const isSticky = useTransform(scrollYProgress, [0.8, 1], [false, true]); // Transition near 200vh
  const scale = useTransform(scrollYProgress, [0, 0.525], [0.7, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 0]);
  return (
    <motion.div
      // ref={ref}
      scrollYProgress={scrollYProgress}
      style={{
        // scale,
        backgroundImage: `url(https://images.unsplash.com/photo-1477346611705-65d1883cee1e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        position: isSticky ? "sticky" : "relative",
        top: isSticky ? "0px" : "auto",
  
      }}
      className="p-24 h-[100vh] text-white"
    >
      <Reveal>
        <h1 className="text-7xl font-bold pb-4  ">Skills</h1>
      </Reveal>

      <div className="flex flex-col text-xl">
        <Reveal>
          <motion.div
            whileHover={{ backgroundColor: "#f9a8d4" }}
            className="border py-2 px-4 mb-2 rounded-lg "
          >
            ReactJS
          </motion.div>
        </Reveal>

        <Reveal>
          <div className="border py-2 px-4 mb-2 rounded-lg">C</div>
        </Reveal>
        <Reveal>
          <div className="border py-2 px-4 mb-2 rounded-lg">Python</div>
        </Reveal>
        <Reveal>
          <div className="border py-2 px-4 mb-2 rounded-lg">JavaScript</div>
        </Reveal>
        <Reveal>
          <div className="border py-2 px-4 mb-2 rounded-lg">Tailwind</div>
        </Reveal>
        <Reveal>
          <div className="border py-2 px-4 mb-2 rounded-lg">CSS</div>
        </Reveal>
        <Reveal>
          <div className="border py-2 px-4 mb-2 rounded-lg">HTML</div>
        </Reveal>
        <Reveal>
          <div className="border py-2 px-4 mb-2 rounded-lg">Firebase</div>
        </Reveal>
        <Reveal>
          <div className="border py-2 px-4 mb-2 rounded-lg">MongoDB</div>
        </Reveal>
        <Reveal>
          <div className="border py-2 px-4 mb-2 rounded-lg">Motion</div>
        </Reveal>
      </div>
    </motion.div>
  );
};

export default Skills;
