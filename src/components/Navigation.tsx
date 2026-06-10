import { useEffect, useState } from "react";
import siteContent from "../content/site.json";

const links = siteContent.navigation;

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
            className={`nav-link border-b border-transparent font-light transition-colors duration-500 hover:text-white ${
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
      <nav className="desktop-sidebar pointer-events-none fixed left-0 top-0 z-50 hidden h-screen flex-col justify-between md:flex">
        <div className="pointer-events-auto">
          <h1
            className="brand-title mb-16 font-display tracking-wide"
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.8)" }}
          >
            {siteContent.brandName}
          </h1>
          {linkList}
        </div>
      </nav>

      {/* Mobile top bar */}
      <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between bg-black/80 px-5 py-4 backdrop-blur-sm md:hidden">
        <h1 className="font-display text-xl tracking-wide">{siteContent.brandName}</h1>
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
            <a href={`mailto:${siteContent.contact.email}`} className="block">
              gmail: {siteContent.contact.email}
            </a>
            <a
              href={siteContent.contact.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="block"
            >
              {siteContent.contact.instagramLabel}
            </a>
            <a
              href={siteContent.contact.youtubeUrl}
              target="_blank"
              rel="noreferrer"
              className="block"
            >
              {siteContent.contact.youtubeLabel}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
