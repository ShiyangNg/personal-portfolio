import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import imageFull from '../assets/images/image-full.jpg'
import imageBottom from '../assets/images/image-bottom.png'
const MultiLayerParallax = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -10]);
  const rotateText = useTransform(scrollYProgress, [0, 1], [0, -70]);
  return (
    <div
      ref={ref}
      className="bg-gray-800 h-screen overflow-hidden relative grid place-items-center"
    >
      <div></div>
      <motion.h1
      initial={{
        rotate: "0deg",
        opacity: 0,
        y: 0,
      }}
      animate={{
        rotate: "0deg",
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1,
        ease: 'easeInOut',
      }}
      
        style={{ y: textY, scale,rotate: rotateText, textShadow: `
            1px 1px 1px #000,
            2px 2px 1px #111,
            3px 3px 1px #111,
            4px 4px 1px #222,
            5px 5px 1px #222,
            6px 6px 10px rgba(0,0,0,0.5)
          `, }}

        className="pb-[670px] font-bold text-sky-50 text-7xl md:text-8xl z-10"
      >
        DARE TO DREAM
      </motion.h1>

      <motion.div
        scale
        className="absolute inset-0 z-0 px-4"
        style={{
          scale,
          rotate,
          backgroundImage: `url(${imageFull})`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY,

          margin: "auto",
        }}
      ></motion.div>

      <motion.div
        className="absolute inset-0 z-20 px-4"
        style={{
          backgroundImage: `url(${imageBottom})`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",

          margin: "auto",
        }}
      ></motion.div>
    </div>
  );
};

export default MultiLayerParallax;
