import { useEffect } from "react";
import { useLocation } from "react-router";
import { QuoteBreak } from "../QuoteBreak";
import { Hero } from "../Hero";
import { Methodology } from "../Methodology";
import { Services } from "../Services";
import { Projects } from "../Projects";
import { About } from "../About";
import { Contact } from "../Contact";

export function HomePage() {
  const location = useLocation();

  // Handle hash scrolling when navigating from project pages
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);

  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
      <QuoteBreak />
      <Hero />
      <Services />
      <Methodology />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}