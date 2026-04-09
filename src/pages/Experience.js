import React, { useRef } from "react";
import { Reveal } from "../components/ultilities/Reveal";
import { motion, useTransform, useScroll } from "framer-motion";
import NexperiaIntern from "../assets/images/NexperiaIntern.jpg";
const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const isSticky = useTransform(scrollYProgress, [0.8, 1], [false, true]);
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
        <h1 className="text-7xl font-bold pb-4 mb-4">Experience</h1>
      </Reveal>
      <Reveal>
        <div className="flex font-bold flex-wrap text-3xl space-x-4 mb-4">
          Internship
        </div>
      </Reveal>
      {/* <img className="w-72" src={NexperiaIntern} alt="" /> */}
      <div className="space-y-1">
        <div className="text-xl flex justify-between font-bold">
          <div>Nexperia, Dongguan, Guangdong, China 📍</div>
          <div>May - July 2025</div>
        </div>
        <div className="text-xl font-bold">Software Developer</div>
        <div className="space-y-1">
          <li>
            Developed a full-stack application with a clean dashboard UI using
            Ant Design, React and TypeScript, reduced file recovery time and
            improved system reliability through an intuitive version control
            interface.
          </li>
          <li>
            Optimised backend performance by integrating REST APIs and SMB
            Protocol with NestJS and PostgreSQL, enabling seamless
            cross-platform file sharing for 250+ concurrent users while reducing
            data access latency.
          </li>
          <li>
            Engineered an automated data pipeline to clean and standardise
            system metadata, leveraging Python and SQL to build a real-time
            performance dashboard that provided leadership with actionable
            insights into storage efficiency.
          </li>
          <li>
            Initiated and delivered a comprehensive technical presentation
            using Canva on Generative AI technologies and automation workflows
            for 20+ employees to drive internal AI awareness.
          </li>
          <li>
            Tech Stack: NestJS · TypeScript · TypeORM · PostgreSQL · React ·
            TailwindCSS · Ant Design · SMB Protocol · React-i18next
          </li>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
