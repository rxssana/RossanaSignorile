import { ProjectItem } from "../components/ProjectItem";
import { SectionHeader } from "../components/SectionHeader";
import { siteAssets } from "../lib/assets";

export function Shorts() {
  return (
    <section id="shorts" className="pt-24 pb-32">
      <SectionHeader title="Shorts" />
      
      <div className="flex flex-col gap-12 mt-12">
        <ProjectItem
          title="HORROR VACUI"
          year="2023"
          format="Stop motion, 3'"
          description={
            <p>The story of a girl forced to grow up as she faces death in its forms.</p>
          }
          credits={
            <>
              <p>Shot by Rossana Signorile</p>
              <p>Music by Andrea Donvito</p>
            </>
          }
          posterSrc={siteAssets.horrorPoster}
          images={siteAssets.shortStills.slice(0, 3)}
        />

        <ProjectItem
          title="WITCHES' DREAM"
          year="2024"
          format="Super8, 1'"
          description={
            <p>Experimental dialogue between camera and sound, what is still in the dream world.</p>
          }
          credits={
            <>
              <p>Shot by Rossana Signorile</p>
              <p>with Caterina Cingolani</p>
            </>
          }
          posterSrc={siteAssets.witchesPoster}
          images={siteAssets.shortStills.slice(3, 5)}
        />

        <ProjectItem
          title="UNE VAGUE"
          year="2025"
          format="Handycam, 8'"
          description={
            <p>A short film about the concept of absence, translated through the body.</p>
          }
          credits={
            <>
              <p>Shot by Rossana Signorile</p>
              <p>Choreographed and performed by Vita Stasolla</p>
              <p>Music by Andrea Donvito</p>
            </>
          }
          posterSrc={siteAssets.vaguePoster}
          images={siteAssets.shortStills.slice(5, 8)}
        />

        <ProjectItem
          title="MNEMOSINE"
          year="2026"
          format="Super8 and Handycam, 8'"
          description={
            <p>Two characters embody the mythological story of Mnemosine and Lete, in a reflection about time and space.</p>
          }
          credits={
            <>
              <p>Written and shot by Rossana Signorile</p>
              <p>with Bianca Macerini, Monia Cappello</p>
              <p>Music by Archaic Dirge</p>
            </>
          }
          posterSrc={siteAssets.mnemosinePoster}
          images={siteAssets.shortStills.slice(8, 11)}
        />

        <ProjectItem
          title="ANGELO STERMINATORE"
          year="2026"
          format="Super8, 6'"
          description={
            <p>An old chant emerging from light and shadow.</p>
          }
          credits={
            <>
              <p>Shot by Rossana Signorile</p>
              <p>with Aurora Bini</p>
              <p>Music by Andrea Donvito</p>
            </>
          }
          posterSrc={siteAssets.angeloPoster}
          images={siteAssets.shortStills.slice(11, 14)}
        />

        <div className="w-full max-w-6xl mx-auto mt-24 text-center px-4">
          <h3 className="text-2xl md:text-3xl font-serif tracking-widest text-[#ececec]">BIFFI E BAFFI (2025-)</h3>
          <p className="max-w-2xl mx-auto my-6 text-[#ccc] font-light">
            short film in post-production, directed by Rossana Signorile with Antonella 
            Massaro. Rossana curated the scenography with Asia Castagna and performed in it.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 max-w-4xl mx-auto">
            {siteAssets.performanceStills.slice(0, 4).map((img, i) => (
              <img 
                key={i} 
                src={img}
                alt="Biffi e Baffi still" 
                className="w-full aspect-video object-cover opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
