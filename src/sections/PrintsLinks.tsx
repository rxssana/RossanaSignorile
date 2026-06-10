import { SectionHeader } from "../components/SectionHeader";
import { siteAssets } from "../lib/assets";
import { openLightbox } from "../components/Lightbox";

export function PrintsLinks() {
  return (
    <section id="prints-links" className="pt-24 pb-48">
      <SectionHeader title="Prints / Links" />

      <div className="max-w-4xl mx-auto px-4 mt-16 text-center">
        
        <p className="text-xl font-light text-[#ececec] mb-12">
          You can support her buying a copy of her new zine 'A nest in the red moon',<br/>
          10 euros + shipping, via paypal (italy shipping only)
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 max-w-3xl mx-auto">
           {siteAssets.zine.map((img, i) => (
             <img key={i} src={img} alt="Zine 'A nest in the red moon' preview" loading="lazy" onClick={() => openLightbox(siteAssets.zine, i)} className="w-full aspect-square object-cover cursor-zoom-in opacity-85 hover:opacity-100 transition-opacity" />
           ))}
        </div>

        <p className="text-[#aaa] font-light mb-4 italic">also any artwork from the Birdland can be printed.</p>
        <p className="text-[#aaa] font-light mb-16 text-sm">A3 - 5€ &nbsp;·&nbsp; A4 - 7€ &nbsp;·&nbsp; A5 - 10€</p>

        <div className="flex flex-col gap-6 text-lg font-light">
          <a href="#" className="text-[#ccc] hover:text-white underline decoration-[#333] hover:decoration-white underline-offset-4 transition-colors">
            Asterion performance article. [link]
          </a>
          <a href="https://www.youtube.com/@ArchaicDirge" target="_blank" rel="noreferrer" className="text-[#ccc] hover:text-white underline decoration-[#333] hover:decoration-white underline-offset-4 transition-colors">
            https://www.youtube.com/@ArchaicDirge
          </a>
          <a href="https://www.youtube.com/@rxssanaa" target="_blank" rel="noreferrer" className="text-[#ccc] hover:text-white underline decoration-[#333] hover:decoration-white underline-offset-4 transition-colors">
            https://www.youtube.com/@rxssanaa
          </a>
          <div className="text-[#ccc]">
            <a href="https://www.youtube.com/watch?v=OC1s07q6yAE" target="_blank" rel="noreferrer" className="hover:text-white underline decoration-[#333] hover:decoration-white underline-offset-4 transition-colors">
              https://www.youtube.com/watch?v=OC1s07q6yAE
            </a>
            <span className="ml-4 text-sm text-[#888]">[Grido videoclip, which includes her artwork]</span>
          </div>
        </div>

      </div>
    </section>
  );
}
