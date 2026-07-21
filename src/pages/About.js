import { useRef } from "react";
import { Reveal } from "../components/ultilities/Reveal";
import { motion, useTransform, useScroll, delay } from "framer-motion";
import Experience from "./Experience";
import Projects from "./Projects";
import AboutImage from "../assets/images/AboutBackground.jpg";
import AboutCard from "../components/AboutCard";
import Section1Bg from "../assets/images/Section1Bg.avif";
import Myself from "../assets/images/Me.jpg";

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const Section1 = () => {
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
    return (
      <motion.div
        style={{
          scale,
          rotate,
          backgroundImage: `url(${Section1Bg})`,
        }}
        className="sticky top-0 h-screen w-screen text-white flex items-center justify-center font-montserrat text-8xl font-bold "
      >
        <Reveal>INNOVATE</Reveal>
      </motion.div>
    );
  };

  const Section2 = () => {
    // Drive the intro from THIS section's own scroll entry (not the whole
    // 700vh main), so the animation finishes exactly as the card reaches the
    // top of the viewport instead of continuing into the next section.
    const sectionRef = useRef(null);
    const { scrollYProgress: sectionProgress } = useScroll({
      target: sectionRef,
      offset: ["start end", "start start"],
    });
    // Subtle scale only — no rotate. Rotating a text-heavy card while it scrubs
    // with scroll causes visible motion smear; a gentle scale reads as a clean
    // settle instead. will-change hints the browser to keep it crisp.
    const scale = useTransform(sectionProgress, [0, 1], [0.96, 1]);
    return (
      <motion.div
        ref={sectionRef}
        style={{
          scale,
          willChange: "transform",
          backgroundImage: `url(${AboutImage})`,
        }}
        className="bg-black sticky top-0 h-[100vh] font-montserrat text-white p-24"
      >
        <Reveal>
          <div className="text-7xl font-bold pb-10">About Me</div>
        </Reveal>

        {/* Profile card */}

        <Reveal className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          <div className="col-span-1">
            <motion.div
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="bg-white/5 border border-white/8 rounded-2xl p-6 backdrop-blur-sm shadow-lg"
            >
              <div className="flex flex-col ">
                <div className="w-40 h-40 rounded-full overflow-hidden ring-1 ring-white/10">
                  <img
                    src={Myself}
                    alt="Shi Yang Ng"
                    className="w-full h-full object-cover"
                  />
                </div>
                <motion.h3
                  initial={{ y: 12, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  className="mt-4 text-2xl font-semibold "
                >
                  Shi Yang Ng
                </motion.h3>
                <p className="font-bold mt-1 text-md mb-2">
                  Year 2 EEE • 2nd Major in Data Analytics • NTU Singapore
                </p>

                {/* Contents */}
                <div className="">
                  <Reveal>
                    <motion.div className="pb-4">
                      I’ve always been fascinated by the process of turning
                      ideas into real, working solutions — there’s something
                      deeply rewarding about solving problems and bringing
                      concepts to life on screen.
                    </motion.div>
                  </Reveal>
                  <Reveal>
                    <motion.div className="pb-4">
                      Beyond my core focus, I’m also exploring AI and software
                      development, which I see as powerful tools to complement
                      my engineering background.
                    </motion.div>
                  </Reveal>

                  {/* <Reveal>
                    <motion.div className="pb-4">
                      It’s a field that excites me with its vast possibilities,
                      and I’m always eager to deepen my understanding and build
                      meaningful skills in this rapidly evolving space.
                    </motion.div>
                  </Reveal> */}
                </div>
                <div className="">
                  <div className="mt-6 w-full text-left">
                    <Reveal>
                      <h4 className="text-sm text-gray-300 uppercase tracking-wider mb-2">
                        Tech highlights
                      </h4>
                    </Reveal>

                    <Reveal>
                      <div className="flex flex-wrap gap-2">
                        {["React", "JavaScript", "Python", "NestJS", "C"].map(
                          (t) => (
                            <span
                              key={t}
                              className="border text-xs px-3 py-1 rounded-full bg-white/6 text-gray-100"
                            >
                              {t}
                            </span>
                          )
                        )}
                      </div>
                    </Reveal>
                  </div>
                  <div className="mt-6 w-full text-left">
                    <Reveal>
                      <h4 className="text-sm text-gray-300 uppercase tracking-wider mb-2">
                        Interests
                      </h4>
                    </Reveal>

                    <Reveal>
                      <div className="flex flex-wrap gap-2">
                        {["Hackathons", "AI", "Calisthenics", "Movies"].map(
                          (t) => (
                            <span
                              key={t}
                              className="border text-xs px-3 py-1 rounded-full bg-white/6 text-gray-100"
                            >
                              {t}
                            </span>
                          )
                        )}
                      </div>
                    </Reveal>
                  </div>
                  <div className="mt-6 w-full text-left">
                    <Reveal>
                      <h4 className="text-sm text-gray-300 uppercase tracking-wider mb-2">
                        Languages
                      </h4>
                    </Reveal>

                    <Reveal>
                      <div className="flex flex-wrap gap-2">
                        {["English", "Chinese", "Malay"].map((t) => (
                          <span
                            key={t}
                            className="border text-xs px-3 py-1 rounded-full bg-white/6 text-gray-100"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </Reveal>
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
    <main ref={ref} className="relative h-[700vh]">
      {/* Stable scroll anchors. The sections themselves are position: sticky and
          get pinned, so their offsetTop reports the pinned position, not their
          resting slot — clicking About/Experience then lands in the wrong place.
          These zero-height, non-sticky markers sit at each slot boundary
          (Section1 0–100vh, About 100–200vh, Experience 200–300vh,
          Projects 300–700vh) and never move, so nav math is always correct. */}
      <div id="about" className="absolute top-[100vh] left-0 h-0 w-0" />
      <div id="experience" className="absolute top-[200vh] left-0 h-0 w-0" />
      <div id="projects" className="absolute top-[300vh] left-0 h-0 w-0" />
      <Section1 />
      <Section2 />
      <Experience />
      <Projects />
    </main>
  );
};

export default About;
