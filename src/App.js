import Header from "./pages/Header";
import Hero from "./pages/Hero";
import ScrollProgressBar from "./components/ScrollProgressBar";
import About from "./pages/About";
import MultiLayerParallax from "./components/MultiLayerParallax";
import Lenis from "lenis";
import { useEffect } from "react";
import Footer from "./pages/Footer";
import "./App.css";

function App() {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.5, // Smooth scroll duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing
      smooth: true, // Enable smooth scrolling
      smoothTouch: true, // Enable smooth touch scrolling
    });

    // Update Lenis on each animation frame
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    // Cleanup Lenis instance when component unmounts
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-black mx-auto">
      <ScrollProgressBar />
      <Header />
      <Hero />
      <MultiLayerParallax />
      <About />
      <Footer />
    </div>
  );
}

export default App;
