import { siteAssets } from "../lib/assets";

export function Home() {
  return (
    <section id="home" className="relative min-h-screen bg-black">
      {/* Sketches, placed like the mockup */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <img
          src={siteAssets.homeStar}
          alt=""
          aria-hidden="true"
          className="absolute left-1/2 top-[6%] w-44 -translate-x-1/2 opacity-90 mix-blend-screen md:w-64"
        />
        <img
          src={siteAssets.homeMoon}
          alt=""
          aria-hidden="true"
          className="absolute left-1/2 top-[34%] w-56 -translate-x-1/2 opacity-90 mix-blend-screen md:w-80"
        />
        <img
          src={siteAssets.homeAngel}
          alt=""
          aria-hidden="true"
          className="absolute right-[2%] top-[4%] w-40 opacity-90 mix-blend-screen md:right-[6%] md:w-56"
        />
      </div>

      <div className="relative z-10 min-h-screen" />
    </section>
  );
}
