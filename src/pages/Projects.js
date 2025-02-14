import React, { useRef } from "react";
import { Reveal } from "../components/ultilities/Reveal";
import { motion, useTransform, useScroll } from "framer-motion";
import HorizontalScrollCard from "../components/HorizontalScrollCarousel";

const Projects = () => {
      const ref = useRef(null);
      const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"],
      });
    const isSticky = useTransform(scrollYProgress, [0.8, 1], [false, true]); 
      const scale = useTransform(scrollYProgress, [0, 0.7], [0.8,1]);
      const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

    return ( 
        <motion.div
        scrollYProgress={scrollYProgress}
        style={{ 
            backgroundImage:`url(https://images.unsplash.com/photo-1623333769926-a34d46b5fbdb?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
            position: isSticky ? "sticky" : "relative",
            top: isSticky ? "0px" : "auto",
          // scale,
         }}
         
        className="p-24 relative  bg-blue-500 text-white"
      >
        <Reveal>
        {/* <h1 className=" text-7xl font-bold pb-4">Projects</h1> */}
        </Reveal>
        {/* <Reveal>
        <h1 className=" text-2xl">Some projects that I have done</h1>
        </Reveal> */}
        <HorizontalScrollCard/>
      </motion.div> );
}
 
export default Projects;