import React, { useEffect } from "react";
import { useScroll, motion, useSpring, useTransform } from "framer-motion";

const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const background = useTransform(
    scrollYProgress,
    [0, 1],
    ["rgb(86,1,245)", "rgb(1,245,13)"]
  );
  return (
    <motion.div
      style={{
        // scaleX: scrollYProgress,
        scaleX,
        transformOrigin: "left",
        // background: "blue",
        background,
        position: "sticky",
        top: 0,
        width: "100%",
        height: "4px",
        zIndex: 100,
      }}
    />
  );
};

export default ScrollProgressBar;
