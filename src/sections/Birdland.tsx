import { SectionHeader } from "../components/SectionHeader";
import { siteAssets } from "../lib/assets";

export function Birdland() {
  return (
    <section id="birdland" className="pt-24 pb-32 bg-[#121212]/50">
      <SectionHeader title="Birdland" />

      <div className="max-w-6xl mx-auto px-4 mt-16 space-y-32">
        
        {/* Intro */}
        <div className="font-light text-[#ccc] leading-relaxed space-y-6 max-w-4xl mx-auto">
          <p className="indent-8 text-lg">
            1. Called or uncalled, the divine will be present.
            Il processo meditativo non pianifica nulla ma accoglie gli stimoli, i simboli e si lascia attraversare, 
            consapevole del potere della coscienza infinita, trepidante del desiderio di rinascere nella molteplicità 
            delle forme. Il sole e la luna sono ai poli opposti della montagna, ci ascoltiamo a vicenda. Il sole, nelle 
            parole di Jodorowsky, dice "sono l'occhio puro e, nello stesso tempo, il riecheggiare del primo grido. 
            Quello che chiamate oscurità è soltanto l'oblio della mia luce, del mio amore sempre presente."
          </p>
          <p className="text-sm italic text-[#999]">
            Project inside the exhibit Sincroniche Anomalie, with Aurora Bini and band Gat Osken, that took place in February 2026, 
            at Arci Magma, Rome. It was thought as a collaboration that could breathe the same symbolic and animal alchemical transfiguration.
          </p>
          <p className="text-sm">Materials: papier maché, bed sheets, black wax, acrylics, charcoal, oil pastels, oil chalks.</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-8">
            {siteAssets.birdlandGrid.map((img, i) => (
              <img 
                key={i}
                src={img}
                alt="Birdland Exhibit"
                className="w-full aspect-square object-cover grayscale mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
              />
            ))}
          </div>
        </div>

        {/* Teli Sonori */}
        <div className="max-w-4xl mx-auto space-y-6">
           <p className="font-light text-[#ccc] leading-relaxed text-sm">
             Teli sonori, some painted sheets that have been used during the performance Innere Auge, that took 
             place in the Sincroniche Anomalie event. The performance was made by Andrea Donvito and his 
             percussions and Rossana Signorile as the moving body. The black and blue one had some contact mics 
             attached to it so it made noise if touched, while the long one made noise simply when being shaken, due 
             to the wood and objects attached to it.
           </p>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
             {siteAssets.shortStills.slice(0, 3).map((img, i) => (
              <img 
                key={i}
                src={img}
                alt="Teli sonori"
                className="w-full h-auto object-cover opacity-80 hover:opacity-100 transition-opacity"
              />
             ))}
           </div>
        </div>

        {/* Every bird dies by its own song */}
        <div className="max-w-4xl mx-auto space-y-6">
           <p className="font-light text-[#ccc] leading-relaxed">
             2. Every bird dies by its own song.<br/>
             Exhibited in Oblò121, in Rome, in April. 'In the woods there is a bird; his song stops you and makes you blush.' [Rimbaud]<br/>
             Birds experience the sounds of the universe without interrupting it with matter. They die with their birdsongs. 
             Humans live by metaphors, they have to imitate and create something from outside of them. They are always aware 
             of the becoming of things, they are aware of death.<br/>
             The concept was creating a space with two different angles: the angle of silence, where bells were made of wax and 
             therefore could not ring and the angle of human noise, where Damiano Tata had a sound performance using organ pipes.
           </p>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
             {siteAssets.birdlandGrid.slice(0, 4).map((img, i) => (
              <img 
                key={i}
                src={img}
                alt="Every bird dies"
                className="w-full aspect-square object-cover grayscale opacity-70"
              />
             ))}
           </div>
        </div>

        {/* 3 & 4 & 5 & 6 */}
        <div className="max-w-4xl mx-auto space-y-16">
          
          <div>
            <h4 className="text-xl font-serif text-white mb-2">3. Birdland Magic Box</h4>
            <p className="text-sm font-light text-[#aaa] mb-4">A sort of noise box made of copper paper. It contains objects inside and a string made with my hair, it makes noise when connected to a mic.</p>
            <div className="flex gap-4 overflow-x-auto pb-4">
              {siteAssets.zine.slice(0, 3).map((img, i) => (
                <img key={i} src={img} alt="Box" className="w-48 h-48 object-cover flex-shrink-0" />
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-serif text-white mb-2">4. Birdthatcannotsing</h4>
            <p className="text-sm font-light text-[#aaa] mb-4">A bird that cannot sing becomes a hummingbird, with its wings so light, barely noticeable, but a beauty so loud and a beak so long that it sings with its presence.<br/>Illustrations and other creations.</p>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
               {[...siteAssets.birdlandGrid, siteAssets.zine[0]].map((img, i) => (
                <img key={i} src={img} alt="Illustration" className="w-full aspect-square object-cover mix-blend-luminosity hover:mix-blend-normal" />
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-serif text-white mb-2">5. Theatre of the starving angel</h4>
            <p className="text-sm font-light text-[#aaa] mb-4">A theater made of wood, which contains some creatures made of mud, wood pieces, and other magical objects. The walls are changeable and there's a long stair coming out of the theatre. The theatre folds like a box, to be carried everywhere.</p>
            <div className="grid grid-cols-2 gap-4">
               {siteAssets.performanceStills.slice(0, 2).map((img, i) => (
                <img key={i} src={img} alt="Theatre" className="w-full h-auto object-cover grayscale" />
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-serif text-white mb-2">6. Puppets (work in progress)</h4>
            <div className="flex gap-8">
              <div className="text-center"><p className="mb-2 text-[#aaa]">Begia</p><img src={siteAssets.birdlandGrid[6]} alt="Begia" className="w-48 h-48 object-cover grayscale"/></div>
              <div className="text-center"><p className="mb-2 text-[#aaa]">Samhain</p><img src={siteAssets.birdlandGrid[7]} alt="Samhain" className="w-48 h-48 object-cover grayscale"/></div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
