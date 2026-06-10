import { SectionHeader } from "../components/SectionHeader";
import { siteAssets } from "../lib/assets";
import { openLightbox } from "../components/Lightbox";

function StillsRow({ images }: { images: string[] }) {
  return (
    <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
      {images.map((img, i) => (
        <img
          key={img}
          src={img}
          alt="music video still"
          loading="lazy"
          onClick={() => openLightbox(images, i)}
          className="aspect-video w-full cursor-zoom-in object-cover opacity-90 shadow-xl transition-opacity hover:opacity-100"
        />
      ))}
    </div>
  );
}

export function MusicVideos() {
  return (
    <section
      id="music-videos"
      className="relative pt-24 pb-32"
      style={{
        backgroundImage: `url(${siteAssets.textureDark})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/75" aria-hidden="true" />

      <div className="relative">
        <SectionHeader title="Music videos" />

        <div className="mx-auto mt-16 flex max-w-5xl flex-col gap-28 px-4">
          {/* Forse, un giorno — Archaic Dirge, super8 */}
          <div className="text-center">
            <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-12">
              <img
                src={siteAssets.forseUnGiorno.title}
                alt="Archaic Dirge — Forse, un giorno (title card)"
                onClick={() => openLightbox(siteAssets.forseUnGiorno.title)}
                className="w-full max-w-md cursor-zoom-in object-cover shadow-2xl"
              />
              <p className="text-sm font-light tracking-wide text-[#aaa] md:text-left">
                Band: Archaic Dirge
                <br />
                shot on super8 film
              </p>
            </div>
            <StillsRow images={siteAssets.forseUnGiorno.stills} />
          </div>

          {/* Archaic Dirge — handycam */}
          <div className="text-center">
            <p className="mb-2 text-sm font-light tracking-wide text-[#aaa]">
              Band: Archaic Dirge
              <br />
              shot on handycam
            </p>
            <StillsRow images={siteAssets.handycamVideo.stills} />
          </div>

          {/* Magma — Uncle Leaf, super8 */}
          <div className="text-center">
            <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-12">
              <img
                src={siteAssets.magma.title}
                alt="Uncle Leaf — Magma (title card)"
                onClick={() => openLightbox(siteAssets.magma.title)}
                className="w-full max-w-md cursor-zoom-in object-cover shadow-2xl"
              />
              <p className="text-sm font-light tracking-wide text-[#aaa] md:text-left">
                Band: Uncle Leaf
                <br />
                shot on super8 film
              </p>
            </div>
            <StillsRow images={siteAssets.magma.stills} />
          </div>
        </div>
      </div>
    </section>
  );
}
