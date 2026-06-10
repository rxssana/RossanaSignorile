import { SectionHeader } from "../components/SectionHeader";
import printsLinksContent from "../content/prints-links.json";
import { mediaAsset, mediaKey, mediaStyle } from "../lib/assets";
import { openLightbox } from "../components/Lightbox";

export function PrintsLinks() {
  const zineImages = printsLinksContent.zineImages;

  return (
    <section id="prints-links" className="pt-24 pb-48">
      <SectionHeader title="Prints / Links" />

      <div className="max-w-4xl mx-auto px-4 mt-16 text-center">
        
        <p className="text-xl font-light text-[#ececec] mb-12">
          {printsLinksContent.intro.split("\n").map((line, index) => (
            <span key={line}>
              {index > 0 && <br />}
              {line}
            </span>
          ))}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 max-w-3xl mx-auto">
           {zineImages.map((img, i) => (
             <img key={mediaKey(img)} src={mediaAsset(img)} alt="Zine 'A nest in the red moon' preview" loading="lazy" onClick={() => openLightbox(zineImages, i)} className="w-full aspect-square object-cover cursor-zoom-in opacity-85 hover:opacity-100 transition-opacity" style={mediaStyle(img)} />
           ))}
        </div>

        <p className="text-[#aaa] font-light mb-4 italic">{printsLinksContent.printNote}</p>
        <p className="text-[#aaa] font-light mb-16 text-sm">{printsLinksContent.prices}</p>

        <div className="flex flex-col gap-6 text-lg font-light">
          {printsLinksContent.links.map((link) =>
            link.featured ? (
              <a
                key={link.title}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="mx-auto block w-full max-w-xl border border-[#333] bg-[#111] px-6 py-5 text-left transition-colors hover:border-[#666]"
              >
                <span className="block font-serif text-xl text-white">{link.title}</span>
                {link.subtitle && (
                  <span className="mt-1 block text-sm text-[#888]">{link.subtitle}</span>
                )}
              </a>
            ) : (
              <div key={link.title} className="text-[#ccc]">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white underline decoration-[#333] hover:decoration-white underline-offset-4 transition-colors"
                >
                  {link.title}
                </a>
                {link.note && <span className="ml-4 text-sm text-[#888]">{link.note}</span>}
              </div>
            ),
          )}
        </div>

      </div>
    </section>
  );
}
