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
  const [menuOpen, setMenuOpen] = useState(false);

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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    // Wait for the menu overlay to close before scrolling on mobile
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    });
  };

  const linkList = (
    <ul className="space-y-6">
      {links.map((link) => (
        <li key={link.id}>
          <button
            onClick={() => scrollTo(link.id)}
            className={`text-xl font-light transition-colors duration-500 border-b border-transparent hover:text-white ${
              activeId === link.id ? "text-white border-white/30" : "text-canvas-muted"
            }`}
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.8)" }}
          >
            {link.label}
          </button>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <nav className="fixed left-0 top-0 z-50 hidden h-screen w-64 flex-col justify-between px-12 py-12 md:flex pointer-events-none">
        <div className="pointer-events-auto">
          <h1
            className="mb-16 font-display text-3xl tracking-wide"
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.8)" }}
          >
            Rossana Signorile
          </h1>
          {linkList}
        </div>
      </nav>

      {/* Mobile top bar */}
      <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between bg-black/80 px-5 py-4 backdrop-blur-sm md:hidden">
        <h1 className="font-display text-xl tracking-wide">Rossana Signorile</h1>
        <button
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="font-mono text-2xl leading-none text-[#ddd]"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col justify-center bg-black/95 px-8 md:hidden">
          {linkList}
          <div className="mt-12 space-y-1 text-sm font-light text-canvas-muted">
            <a href="mailto:signorilerossana0@gmail.com" className="block">
              gmail: signorilerossana0@gmail.com
            </a>
            <a
              href="https://instagram.com/rxssana"
              target="_blank"
              rel="noreferrer"
              className="block"
            >
              instagram @rxssana
            </a>
            <a
              href="https://www.youtube.com/@rxssanaa"
              target="_blank"
              rel="noreferrer"
              className="block"
            >
              youtube: @rxssanaa
            </a>
          </div>
        </div>
      )}
    </>
  );
}
