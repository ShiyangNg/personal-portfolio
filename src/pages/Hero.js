import React from "react";
import { Reveal } from "../components/ultilities/Reveal";
const Hero = () => {

  return (
    
    <div className="p-24">
        <Reveal>
        <div className="text-sky-100 font-bold font-montserrat text-7xl pb-4">Hey, I'm <span className="text-white">Shi Yang.</span></div>
        </Reveal>
      <Reveal>
      <div className="text-sky-200 font-montserrat text-2xl">I'm a <span className="text-white font-bold">Full Stack Developer</span></div>
      </Reveal>
      
      <div></div>
    </div>
  );
};

export default Hero;
