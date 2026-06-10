import { Navigation } from "./Navigation";
import { useEffect, useState } from "react";
import siteContent from "../content/site.json";

export function Overlay() {
  const [isHomeVisible, setIsHomeVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const shortsSection = document.getElementById("shorts");
      if (!shortsSection) return;
      setIsHomeVisible(window.scrollY < shortsSection.offsetTop - window.innerHeight * 0.2);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <>
      <Navigation />
      {/* Top Right Header Graphic */}
      {isHomeVisible && (
        <div className="fixed top-0 right-0 p-12 z-40 hidden md:flex flex-col items-end pointer-events-none">
          <h2 className="text-3xl font-display tracking-widest text-[#dcdcdc] mb-4" style={{ textShadow: "0 2px 10px rgba(0,0,0,0.8)" }}>
            {siteContent.home.overlayTitle}
          </h2>
          <div className="text-right text-lg font-light leading-relaxed text-[#c0c0c0]" style={{ textShadow: "0 2px 10px rgba(0,0,0,0.8)" }}>
            {siteContent.home.overlayLines.map((line, index) => (
              <p
                key={line}
                className={
                  index === siteContent.home.overlayLines.length - 1
                    ? "mt-2 text-xl italic font-serif"
                    : index === siteContent.home.overlayLines.length - 2
                      ? "mt-4"
                      : undefined
                }
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      )}

      {/* Arrow — desktop, bottom center, PDF style */}
      {isHomeVisible && (
        <a
          href="#shorts"
          aria-label="Scroll down"
          className="fixed bottom-10 left-1/2 z-50 hidden -translate-x-1/2 text-[#999] transition-colors hover:text-white md:block"
          style={{ marginLeft: "clamp(5.75rem, 6.5vw, 8rem)" }}
        >
          <svg viewBox="0 0 16 48" className="h-12 w-5" fill="none" stroke="currentColor" strokeWidth="1.2">
            <line x1="8" y1="0" x2="8" y2="40" />
            <polyline points="2,32 8,42 14,32" />
          </svg>
        </a>
      )}

      {/* Bottom Right Links */}
      {isHomeVisible && (
        <div className="fixed bottom-0 right-0 p-8 md:p-12 z-50 pointer-events-none text-right hidden md:block">
          <div className="pointer-events-auto flex flex-col items-end gap-1 text-sm font-light text-canvas-muted hover:*:text-white *:transition-colors" style={{ textShadow: "0 2px 5px rgba(0,0,0,0.8)" }}>
             <a href={`mailto:${siteContent.contact.email}`}>gmail: {siteContent.contact.email}</a>
             <a href={siteContent.contact.instagramUrl} target="_blank" rel="noreferrer">{siteContent.contact.instagramLabel}</a>
             <a href={siteContent.contact.youtubeUrl} target="_blank" rel="noreferrer">{siteContent.contact.youtubeLabel}</a>
          </div>
        </div>
      )}
    </>
  );
}
