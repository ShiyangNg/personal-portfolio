import React, { useRef } from "react";
import { Reveal } from "../components/ultilities/Reveal";
import { motion, useTransform, useScroll } from "framer-motion";
import HorizontalScrollCard from "../components/HorizontalScrollCarousel";
import AboutImage from "../assets/images/photo-1633547136812-6c4baeebbeda.avif";

const Projects = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const isSticky = useTransform(scrollYProgress, [0.8, 1], [false, true]);
  const scale = useTransform(scrollYProgress, [0, 0.7], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

  return (
    <motion.div
      scrollYProgress={scrollYProgress}
      style={{
        position: isSticky ? "sticky" : "relative",
        top: isSticky ? "0px" : "auto",
      }}
      className="p-24 relative text-white gradient-anim"
    >
      <HorizontalScrollCard />
    </motion.div>
  );
};

export default Projects;
