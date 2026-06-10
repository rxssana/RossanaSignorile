import siteContent from "../content/site.json";
import { mediaAsset, mediaStyle } from "../lib/assets";

export function Home() {
  return (
    <section id="home" className="relative min-h-screen bg-black">
      {/* Sketches, placed like the mockup */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <img
          src={mediaAsset(siteContent.home.starImage)}
          alt=""
          aria-hidden="true"
          className="absolute left-1/2 top-[6%] w-44 -translate-x-1/2 opacity-90 mix-blend-screen md:w-64"
          style={mediaStyle(siteContent.home.starImage)}
        />
        <img
          src={mediaAsset(siteContent.home.moonImage)}
          alt=""
          aria-hidden="true"
          className="absolute left-1/2 top-[34%] w-56 -translate-x-1/2 opacity-90 mix-blend-screen md:w-80"
          style={mediaStyle(siteContent.home.moonImage)}
        />
        <img
          src={mediaAsset(siteContent.home.angelImage)}
          alt=""
          aria-hidden="true"
          className="absolute right-[2%] top-[4%] w-40 opacity-90 mix-blend-screen md:right-[6%] md:w-56"
          style={mediaStyle(siteContent.home.angelImage)}
        />
      </div>

      <div className="relative z-10 min-h-screen" />
    </section>
  );
}
