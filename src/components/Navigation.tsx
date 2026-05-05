import { motion } from "motion/react";
import { useEffect, useState } from "react";

const links = [
  { id: "home", label: "home" },
  { id: "shorts", label: "shorts" },
  { id: "music-videos", label: "music videos" },
  { id: "birdland", label: "birdland" },
  { id: "performance", label: "performance" },
  { id: "about", label: "about" },
  { id: "prints-links", label: "prints/links" },
];

export function Navigation() {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map((link) => document.getElementById(link.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveId(links[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed left-0 top-0 h-screen w-48 md:w-64 flex flex-col justify-between py-12 px-6 md:px-12 z-50 pointer-events-none">
      <div className="pointer-events-auto">
        <h1 className="text-2xl md:text-3xl font-display mb-16 tracking-wide" style={{ textShadow: "0 2px 10px rgba(0,0,0,0.8)" }}>
          Rossana Signorile
        </h1>
        <ul className="space-y-6">
          {links.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollTo(link.id)}
                className={`text-lg md:text-xl font-light hover:text-white transition-colors duration-500 border-b border-transparent ${
                  activeId === link.id ? "text-white border-white/30" : "text-canvas-muted"
                }`}
                style={{ textShadow: "0 2px 10px rgba(0,0,0,0.8)" }}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
      
    </nav>
  );
}
