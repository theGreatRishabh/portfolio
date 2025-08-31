import React, { useState, useEffect } from "react";
import { NAV_ITEMS } from "../constants";

interface HomePageProps {
  setActiveSection: (section: string) => void;
  isExiting: boolean;
}

interface NavTileProps {
  item: (typeof NAV_ITEMS)[0];
  onClick: () => void;
}

const NavTile: React.FC<NavTileProps> = ({ item, onClick }) => (
  <button
    onClick={onClick}
    className="relative w-full h-full flex flex-col items-center justify-center text-panel-text p-4 overflow-hidden group focus:outline-none"
    style={{
      backgroundImage: `url(${item.bgImage})`,
      backgroundSize: "auto",
      backgroundPosition: "top",
    }}
    aria-label={`Go to ${item.title} section`}
  >
    <div
      className={`absolute inset-0 ${item.color} opacity-80 group-hover:opacity-90 transition-opacity duration-300`}
    ></div>
    <div className="relative z-10 flex flex-col items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
      {item.icon}
      <span className="text-xl font-semibold tracking-wider uppercase">
        {item.title}
      </span>
    </div>
  </button>
);

const HomePage: React.FC<HomePageProps> = ({ setActiveSection, isExiting }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Trigger the animation shortly after mounting to slide panels in
    const timer = setTimeout(() => setIsMounted(true), 10);
    return () => clearTimeout(timer);
  }, []);

  // Responsive classes for panel animations
  const baseTransition =
    "transform transition-transform duration-500 ease-in-out";

  const leftPanelClasses = `
        w-full md:w-2/5 h-1/3 md:h-full bg-left-bg text-white flex items-center justify-center p-8 md:p-12 relative bg-cover bg-center
        ${baseTransition}
        ${
          isMounted && !isExiting
            ? "translate-y-0 translate-x-0"
            : "-translate-y-full md:translate-y-0 md:-translate-x-full"
        }
    `;

  const rightPanelClasses = `
        w-full md:w-3/5 h-2/3 md:h-full grid grid-rows-4 grid-cols-1
        ${baseTransition}
        ${
          isMounted && !isExiting
            ? "translate-y-0 translate-x-0"
            : "translate-y-full md:translate-y-0 md:translate-x-full"
        }
    `;

  return (
    <div className="flex flex-col md:flex-row h-screen w-screen overflow-hidden fixed inset-0">
      {/* Left Panel */}
      <div
        className={leftPanelClasses}
        style={{
          backgroundImage: "url('/portfolio/assets/home-bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
        <div className="relative z-10 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">I'm Rishabh</h1>
          <p className="text-lg text-gray-300 mb-8 max-w-md">
            For over 8 years I've worked with companies all around the globe.
            (Some parts are under construction)
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <button
              onClick={() => setActiveSection("contact")}
              className="border-2 border-white text-white font-bold py-2 px-6 hover:bg-white hover:text-left-bg transition-colors duration-300"
            >
              GET A QUOTE
            </button>
            <button
              onClick={() => setActiveSection("portfolio")}
              className="text-white font-semibold tracking-wider hover:underline"
            >
              SEE WORKS &gt;
            </button>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className={rightPanelClasses}>
        {NAV_ITEMS.map((item) => (
          <NavTile
            key={item.id}
            item={item}
            onClick={() => setActiveSection(item.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
