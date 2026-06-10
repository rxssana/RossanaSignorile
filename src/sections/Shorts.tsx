import { SectionHeader } from "../components/SectionHeader";
import siteContent from "../content/site.json";
import {
  EditableImageValue,
  mediaAsset,
  mediaKey,
  mediaStyle,
  resolveMedia,
} from "../lib/assets";
import { openLightbox } from "../components/Lightbox";
import type { CSSProperties } from "react";
import shortsContent from "../content/shorts.json";

interface ShortFilm {
  title: string;
  year: string;
  format?: string;
  description: string;
  credits: string[];
  poster?: EditableImageValue;
  feature?: EditableImageValue;
  stills: EditableImageValue[];
  dark?: boolean;
}

const films = shortsContent.films as ShortFilm[];
const biffiEBaffi = shortsContent.biffiEBaffi;

export function Shorts() {
  return (
    <section id="shorts" className="relative">
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(${mediaAsset(siteContent.backgrounds.darkTexture)})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 bg-black/70" aria-hidden="true" />

      <SectionHeader title="Shorts" />

      <div className="shorts-list flex flex-col px-4">
        {films.map((film, idx) => (
          <article
            key={film.title}
            className={`content-shell project-card ${film.dark ? "bg-black/60" : "bg-black/30"}`}
          >
            <div className={`short-film-layout${(resolveMedia(film.poster).src || resolveMedia(film.feature).src) ? " has-poster" : ""}`}>
              {(() => {
                const mainImage = resolveMedia(film.poster).src ? film.poster : film.feature;
                const resolved = resolveMedia(mainImage);

                return resolved.src ? (
                  <img
                    src={resolved.src}
                    alt={`${film.title} ${film.poster ? "poster" : "still"}`}
                    loading={idx > 1 ? "lazy" : undefined}
                    onClick={() => openLightbox(mainImage)}
                    className="short-film-poster cursor-zoom-in object-cover shadow-2xl"
                    style={mediaStyle(mainImage)}
                  />
                ) : null;
              })()}

              <div className="text-center text-white">
                <h3 className="short-film-title font-display tracking-wide">
                  {film.title} ({film.year})
                </h3>
                {film.format && (
                  <p className="mt-3 text-sm font-light tracking-widest text-[#bbb]">
                    {film.format}
                  </p>
                )}
                <p className="short-film-description mx-auto mt-4 max-w-2xl font-light leading-relaxed">
                  {film.description}
                </p>
                <div className="mt-6 space-y-1 text-sm font-light text-[#ccc] md:text-base">
                  {film.credits.map((credit) => (
                    <p key={credit}>{credit}</p>
                  ))}
                </div>

                <div
                  className="short-film-stills mt-8"
                  style={
                    { "--still-cols": film.stills.length === 2 ? 2 : 3 } as CSSProperties
                  }
                >
                  {film.stills.map((still, index) => (
                    <img
                      key={mediaKey(still)}
                      src={mediaAsset(still)}
                      alt={`${film.title} still ${index + 1}`}
                      loading="lazy"
                      onClick={() => openLightbox(film.stills, index)}
                      className="short-film-still w-full cursor-zoom-in object-cover"
                      style={mediaStyle(still)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}

        {/* Biffi e Baffi */}
        <article className="content-shell project-card bg-black/60 text-center text-white">
          <h3 className="short-film-title font-display tracking-wide">
            {biffiEBaffi.title} ({biffiEBaffi.year})
          </h3>
          <p className="short-film-description mx-auto mt-5 max-w-3xl font-light leading-relaxed">
            {biffiEBaffi.description}
          </p>
          <div
            className="short-film-stills mt-8"
            style={{ "--still-cols": 3 } as CSSProperties}
          >
            {biffiEBaffi.stills.map((img, i) => (
              <img
                key={mediaKey(img)}
                src={mediaAsset(img)}
                alt={`Biffi e Baffi still ${i + 1}`}
                loading="lazy"
                onClick={() => openLightbox(biffiEBaffi.stills, i)}
                className="short-film-still w-full cursor-zoom-in object-cover"
                style={mediaStyle(img)}
              />
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
