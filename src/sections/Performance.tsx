import { SectionHeader } from "../components/SectionHeader";
import performanceContent from "../content/performance.json";
import { EditableImageValue, mediaAsset, mediaKey, mediaStyle } from "../lib/assets";
import { openLightbox } from "../components/Lightbox";

function Gallery({
  images,
  cols = "grid-cols-1 sm:grid-cols-3",
  className = "",
}: {
  images: EditableImageValue[];
  cols?: string;
  className?: string;
}) {
  return (
    <div className={`grid gap-3 ${cols} ${className}`}>
      {images.map((img, i) => (
        <img
          key={mediaKey(img)}
          src={mediaAsset(img)}
          alt="performance still"
          loading="lazy"
          onClick={() => openLightbox(images, i)}
          className="aspect-square w-full cursor-zoom-in object-cover opacity-85 transition-opacity hover:opacity-100"
          style={mediaStyle(img)}
        />
      ))}
    </div>
  );
}

export function Performance() {
  return (
    <section id="performance" className="bg-black pt-24 pb-32">
      <SectionHeader title="Performance" />

      <div className="mx-auto mt-16 max-w-5xl space-y-28 px-4">
        {/* The Ballad of Damnati */}
        <div>
          <div className="items-start gap-12 md:flex">
            <div className="md:w-2/3">
              <h3 className="mb-6 font-serif text-3xl text-white">
                {performanceContent.ballad.title}
              </h3>
              <div className="space-y-4 font-light leading-relaxed text-[#ccc]">
                {performanceContent.ballad.description.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <div className="my-6 space-y-1 font-sans text-sm text-[#888]">
                  {performanceContent.ballad.credits.map((credit) => (
                    <p key={credit}>{credit}</p>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-8 md:mt-0 md:w-1/3">
              <img
                src={mediaAsset(performanceContent.ballad.poster)}
                alt="The Ballad of Damnati poster"
                onClick={() => openLightbox(performanceContent.ballad.poster)}
                className="w-full cursor-zoom-in object-cover"
                style={mediaStyle(performanceContent.ballad.poster)}
              />
            </div>
          </div>

          <div className="mt-10 md:mx-auto md:w-1/2">
            <p className="text-sm italic font-light text-[#ccc]">
              {performanceContent.ballad.masksText}
            </p>
            {/* This photo is rotated 90° in the CMS (portrait source shown as
                landscape). A CSS-rotated image still reserves its upright, taller
                footprint, which leaves a large empty band above it. The negative
                top margin (proportional to width, so it holds at any size) pulls
                the visible image back up under the caption. */}
            <img
              src={mediaAsset(performanceContent.ballad.masksImage)}
              alt="Promotional masks by Asia Castagna"
              loading="lazy"
              onClick={() => openLightbox(performanceContent.ballad.masksImage)}
              className="-mt-[11%] w-full cursor-zoom-in object-cover"
              style={mediaStyle(performanceContent.ballad.masksImage)}
            />
          </div>

          <Gallery
            images={performanceContent.ballad.stills}
            cols="grid-cols-2 md:grid-cols-3"
            className="mt-10"
          />
        </div>

        {/* Indagine sulla fiducia */}
        <div>
          <h3 className="mb-6 font-serif text-3xl text-white">
            {performanceContent.indagine.title}
          </h3>
          <div className="mb-8 space-y-2 text-sm font-light text-[#ccc]">
            {performanceContent.indagine.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
            {performanceContent.indagine.italicLines.map((line, index) => (
              <p key={line} className={index === 0 ? "mt-4 italic" : "italic"}>
                {line}
              </p>
            ))}
          </div>
          <Gallery images={performanceContent.indagine.images} />
        </div>

        {/* Butoh */}
        <div>
          <h3 className="mb-6 font-serif text-3xl text-white">
            {performanceContent.butoh.title}
          </h3>
          <p className="mb-8 font-light text-[#ccc]">{performanceContent.butoh.intro}</p>
          <Gallery
            images={performanceContent.butoh.images}
            cols="grid-cols-1 sm:grid-cols-2"
            className="mx-auto mb-16 max-w-2xl"
          />

          <p className="mb-8 font-light text-[#ccc]">
            {performanceContent.butoh.innereAugeText}
          </p>
          <Gallery images={performanceContent.butoh.innereAugeImages} className="mb-16" />

          <p className="mb-8 font-light text-[#ccc]">
            {performanceContent.butoh.asterionText.split("\n").map((line, index) => (
              <span key={line}>
                {index > 0 && <br />}
                {line}
              </span>
            ))}
          </p>
          <Gallery
            images={performanceContent.butoh.asterionImages}
            cols="grid-cols-1 sm:grid-cols-2"
            className="mx-auto max-w-3xl"
          />
        </div>
      </div>
    </section>
  );
}
