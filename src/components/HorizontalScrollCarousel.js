import { motion, useTransform, useScroll, transform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "./ultilities/Reveal";
import EcoEats from "../assets/images/EcoEats.png";
import WeatherApp from "../assets/images/WeatherAppDarkMode.png";
import RecipeBook from "../assets/images/RecipeBook.png";

const HorizontalScrollCard = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <motion.div scrollYProgress={scrollYProgress} className="relative">
      <HorizontalScrollCarousel />
    </motion.div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[400vh]">
      <div className="text-7xl font-bold">
        <Reveal>Projects</Reveal>
      </div>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-12">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        key={card.id}
        className="group relative h-[500px] w-[500px] overflow-hidden bg-neutral-200"
      >
        <div
          style={{
            backgroundImage: `url(${card.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
        ></div>
        <div className="absolute inset-0 z-10 grid place-content-center">
          <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-xs">
            <Reveal>{card.title}</Reveal>
          </p>
        </div>
      </motion.div>
      <div className="pt-4 flex items-center justify-center place-content-center">
        <Reveal>{card.description}</Reveal>
      </div>
    </div>
  );
};

export default HorizontalScrollCard;

const cards = [
  {
    url: EcoEats,
    title: "EcoEats",
    description: "ReactJS, Firebase, TailwindCSS",
    id: 1,
  },
  {
    url: WeatherApp,
    title: "Weather Forecast App",
    description: "Vanilla JavaScript, Firebase, TailwindCSS",
    id: 2,
  },
  {
    url: RecipeBook,
    title: "Recipe Book App",
    id: 3,
  },
];
