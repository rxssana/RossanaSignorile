import { SectionHeader } from "../components/SectionHeader";
import { siteAssets } from "../lib/assets";

export function Performance() {
  return (
    <section id="performance" className="pt-24 pb-32">
      <SectionHeader title="Performance" />

      <div className="max-w-5xl mx-auto px-4 mt-24 space-y-32">

        {/* The Ballad of Damnati */}
        <div>
          <div className="md:flex gap-12 items-start">
            <div className="md:w-2/3">
              <h3 className="text-3xl font-serif text-white mb-6">The Ballad of Damnati</h3>
              <div className="text-[#ccc] font-light leading-relaxed space-y-4">
                <p>A theatrical piece that was represented on stage on April 2024, at the Teatro della Visitazione in Rome, winning the Umbilicus Contest organized by Lauro Versari. It is the story of a dysfunctional family and the process of transformation of the only character that is aware of the things that make the chain rot. They all behave like puppets but at the end every attempt of liberation leads to death, metaphysical death.</p>
                <div className="text-sm text-[#888] space-y-1 my-6 font-sans">
                  <p>Written and directed by Rossana Signorile</p>
                  <p>Performed by Caterina Cingolani, Antonella Massario, Valeria Romano, Gabriele Passaro, Angelica Castagna, Rossana Signorile.</p>
                  <p>Scenography by Sabrina Scamarcio</p>
                  <p>Live Sound by Archaic Dirge</p>
                  <p>Light Design by Simone Marchetti</p>
                  <p>Make up by Asia Castagna</p>
                  <p>Sound Design by Silvia Di Furia</p>
                </div>
                <p className="text-sm italic">The new masks were designed by Asia Castagna but only used for the promotional campaign.</p>
              </div>
            </div>
            <div className="md:w-1/3 mt-8 md:mt-0">
               <img src={siteAssets.horrorPoster} alt="Poster" className="w-full h-auto object-cover grayscale brightness-75"/>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {siteAssets.performanceStills.slice(0, 4).map((img, i) => (
               <img key={i} src={img} alt="Still" className="w-full aspect-video object-cover grayscale opacity-80" />
            ))}
          </div>
        </div>

        {/* Indagine sulla fiducia */}
        <div>
          <h3 className="text-3xl font-serif text-white mb-6">Indagine sulla fiducia</h3>
          <div className="text-[#ccc] font-light text-sm space-y-2 mb-8">
            <p>Performance in Gioia del Colle, in 2024.</p>
            <p>Performed by Caterina Cingolani, Rossana Signorile.</p>
            <p>Video shot by Antonella Massaro.</p>
            <p>Live music by Archaic Dirge.</p>
            <p className="mt-4 italic">An echo, a dance, shadows moving through the meaning of trust.</p>
            <p className="italic">Cosa significa la fiducia? Partendo da un passaggio di R. M. Rilke, ci siam messi a nudo.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
             {siteAssets.performanceStills.slice(4, 7).map((img, i) => (
               <img key={i} src={img} alt="Performance" className="w-full object-cover opacity-75" />
            ))}
          </div>
        </div>

        {/* Butoh performance */}
        <div>
          <h3 className="text-3xl font-serif text-white mb-6">Butoh performance</h3>
          <p className="text-[#ccc] font-light mb-8">Performances that took place during Ezio Tangini's butoh workshop in Viareggio.</p>
          
          <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto mb-16">
            <img src={siteAssets.shortStills[0]} alt="Butoh" className="w-full object-cover grayscale" />
            <img src={siteAssets.shortStills[1]} alt="Butoh" className="w-full object-cover grayscale" />
          </div>

          <p className="text-[#ccc] font-light mb-8">
            Pictures of the performance <span className="italic">Innere Auge</span>, created with the percussion artist Andrea Donvito, in an improvisation practice that started with the breathing and the reaching of an inner eye.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
             {siteAssets.performanceStills.slice(6, 9).map((img, i) => (
               <img key={i} src={img} alt="Innere Auge" className="w-full object-cover mix-blend-plus-lighter" />
            ))}
          </div>

          <p className="text-[#ccc] font-light mb-8">
            Pictures of the performance <span className="italic">Asterion</span>, the result of the intensive workshop in Berlin at theaterforum kreuzberg e.V., held by Valentin Tszin.<br/>
            Rossana's improvisation solo was a breathing harmonica, that followed her movements. A sound inside out.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            <img src={siteAssets.performanceStills[2]} alt="Asterion" className="w-full object-cover opacity-80" />
            <img src={siteAssets.performanceStills[3]} alt="Asterion" className="w-full object-cover opacity-80" />
          </div>
        </div>

      </div>
    </section>
  );
}
