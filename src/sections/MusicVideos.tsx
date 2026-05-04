import { SectionHeader } from "../components/SectionHeader";
import { siteAssets } from "../lib/assets";

export function MusicVideos() {
  return (
    <section id="music-videos" className="pt-24 pb-32">
      <SectionHeader title="Music videos" />

      <div className="flex flex-col gap-24 mt-24 max-w-5xl mx-auto px-4">
        
        {/* Video 1 */}
        <div className="text-center">
          <div className="relative inline-block mb-8">
            <h3 className="text-3xl md:text-5xl font-display font-bold italic tracking-widest text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
               Archaic Dirge<br/><span className="text-2xl md:text-4xl">Forse, un giorno</span>
            </h3>
            <p className="absolute -right-8 -bottom-8 md:right-12 text-sm text-[#aaa] font-sans tracking-wide text-right">
              Band: Archaic Dirge<br/>shot on super8 film
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
             {siteAssets.musicStills.slice(0, 3).map((img, i) => (
                <img 
                  key={i}
                  src={img}
                  alt="music video still"
                  className="w-full aspect-video object-cover grayscale opacity-90 hover:opacity-100 hover:grayscale-0 transition-all rounded-sm shadow-xl"
                />
             ))}
          </div>
        </div>

        {/* Video 2 */}
        <div className="text-center mt-12">
          <p className="text-sm text-[#aaa] font-sans tracking-wide mb-8">
            Band: Archaic Dirge<br/>shot on handycam
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
             {siteAssets.musicStills.slice(3, 6).map((img, i) => (
                <img 
                  key={i}
                  src={img}
                  alt="music video still"
                  className="w-full aspect-video object-cover mix-blend-luminosity hover:mix-blend-normal transition-all rounded-sm shadow-xl"
                />
             ))}
          </div>
        </div>

        {/* Video 3 */}
        <div className="text-center mt-24">
           <div className="relative flex justify-center mb-12">
             <h3 className="text-5xl md:text-7xl font-display text-red-800 tracking-tighter opacity-80 mix-blend-screen" style={{ textShadow: "0 0 20px red" }}>
                Magma
             </h3>
             <p className="absolute right-0 bottom-0 text-sm text-[#aaa] font-sans tracking-wide text-right" style={{transform: "translateY(100%)"}}>
              Band: Uncle Leaf<br/>shot on super8 film
            </p>
           </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
             {siteAssets.musicStills.slice(6, 9).map((img, i) => (
                <img 
                  key={i}
                  src={img}
                  alt="music video still"
                  className="w-full aspect-video object-cover grayscale opacity-80 hover:opacity-100 transition-all rounded-sm shadow-xl"
                />
             ))}
          </div>
        </div>

      </div>
    </section>
  );
}
