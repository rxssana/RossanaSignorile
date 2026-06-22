import siteContent from "../content/site.json";
import { mediaAsset, mediaStyle } from "../lib/assets";

export function Home() {
  return (
    <section id="home" className="relative min-h-screen bg-black">
      {/* Decorative sketches */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <img
          src={mediaAsset(siteContent.home.starImage)}
          alt=""
          aria-hidden="true"
          className="absolute left-1/2 top-[6%] w-72 -translate-x-1/2 opacity-90 mix-blend-screen md:w-96"
          style={mediaStyle(siteContent.home.starImage)}
        />
        <img
          src={mediaAsset(siteContent.home.moonImage)}
          alt=""
          aria-hidden="true"
          className="absolute left-1/2 top-[34%] w-80 -translate-x-1/2 opacity-90 mix-blend-screen md:w-[28rem]"
          style={mediaStyle(siteContent.home.moonImage)}
        />
        <img
          src={mediaAsset(siteContent.home.angelImage)}
          alt=""
          aria-hidden="true"
          className="absolute right-[2%] top-[4%] w-64 opacity-90 mix-blend-screen md:right-[6%] md:w-80"
          style={mediaStyle(siteContent.home.angelImage)}
        />
      </div>

      {/* Overlay text — mobile only (desktop is handled by Overlay.tsx fixed layer) */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 md:hidden">
        <div className="text-center">
          <h2 className="font-display text-3xl font-light tracking-[0.2em] text-white">
            {siteContent.home.overlayTitle}
          </h2>
          <div className="mt-6 space-y-1">
            {siteContent.home.overlayLines.map((line, i) => (
              <p
                key={line}
                className={`font-serif text-sm font-light tracking-wide text-[#ccc] ${i >= siteContent.home.overlayLines.length - 2 ? "italic" : ""}`}
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Arrow — PDF style, bottom center */}
      <a
        href="#shorts"
        aria-label="Scroll down"
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 text-[#999] transition-colors hover:text-white md:hidden"
      >
        <svg viewBox="0 0 16 48" className="h-12 w-5" fill="none" stroke="currentColor" strokeWidth="1.2">
          <line x1="8" y1="0" x2="8" y2="40" />
          <polyline points="2,32 8,42 14,32" />
        </svg>
      </a>
    </section>
  );
}
