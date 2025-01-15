import React from "react";
import { Reveal } from "../components/ultilities/Reveal";
const Hero = () => {

  return (
    
    <div className="text-white p-24">
        <Reveal>
        <div className="font-bold font-montserrat text-7xl pb-4">Hey, I'm Shi Yang.</div>
        </Reveal>
      <Reveal>
      <div className="font-montserrat text-2xl">I'm a <span className="font-bold">Full Stack Developer</span></div>
      </Reveal>
      
      <div></div>
    </div>
  );
};

export default Hero;
