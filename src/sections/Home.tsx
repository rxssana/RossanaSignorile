import { siteAssets } from "../lib/assets";

export function Home() {
  return (
    <section id="home" className="relative min-h-screen">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={siteAssets.homeBackground}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* Keeps the first screen dedicated to the intro overlay composition */}
      <div className="relative z-10 min-h-screen" />
    </section>
  );
}
