import { SectionHeader } from "../components/SectionHeader";
import { siteAssets } from "../lib/assets";
import { openLightbox } from "../components/Lightbox";

interface ShortFilm {
  title: string;
  year: string;
  format?: string;
  description: string;
  credits: string[];
  poster?: string;
  feature?: string;
  stills: string[];
  dark?: boolean;
}

const films: ShortFilm[] = [
  {
    title: "HORROR VACUI",
    year: "2023",
    format: "Stop motion, 3'",
    description: "The story of a girl forced to grow up as she faces death in its forms.",
    credits: ["Shot by Rossana Signorile", "Music by Andrea Donvito"],
    poster: siteAssets.horrorVacui.poster,
    stills: siteAssets.horrorVacui.stills,
  },
  {
    title: "WITCHES' DREAM",
    year: "2024",
    format: "Super8, 1'",
    description:
      "Experimental dialogue between camera and sound, what is still in the dream world.",
    credits: ["Shot by Rossana Signorile", "with Caterina Cingolani"],
    feature: siteAssets.witchesDream.feature,
    stills: siteAssets.witchesDream.stills,
    dark: true,
  },
  {
    title: "UNE VAGUE",
    year: "2025",
    format: "Handycam, 8'",
    description: "A short film about the concept of absence, translated through the body.",
    credits: [
      "Shot by Rossana Signorile",
      "Choreographed and performed by Vita Stasolla",
      "Music by Andrea Donvito",
    ],
    poster: siteAssets.uneVague.poster,
    stills: siteAssets.uneVague.stills,
    dark: true,
  },
  {
    title: "MNEMOSINE",
    year: "2026",
    format: "Super8 and Handycam, 8'",
    description:
      "Two characters embody the mythological story of Mnemosine and Lete, in a reflection about time and space.",
    credits: [
      "Written and shot by Rossana Signorile",
      "with Bianca Macerini, Monia Cappello",
      "Music by Archaic Dirge",
    ],
    poster: siteAssets.mnemosine.poster,
    stills: siteAssets.mnemosine.stills,
  },
  {
    title: "ANGELO STERMINATORE",
    year: "2026",
    format: "Super8, 6'",
    description: "An old chant emerging from light and shadow.",
    credits: ["Shot by Rossana Signorile", "with Aurora Bini", "Music by Andrea Donvito"],
    poster: siteAssets.angeloSterminatore.poster,
    stills: siteAssets.angeloSterminatore.stills,
  },
];

export function Shorts() {
  return (
    <section id="shorts" className="relative">
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(${siteAssets.textureDark})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 bg-black/70" aria-hidden="true" />

      <SectionHeader title="Shorts" />

      <div className="flex flex-col gap-24 px-4 py-16 md:py-24">
        {films.map((film, idx) => (
          <article
            key={film.title}
            className={`mx-auto w-full max-w-5xl ${film.dark ? "bg-black/60" : "bg-black/30"} p-6 md:p-10`}
          >
            <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[220px_1fr]">
              <img
                src={film.poster ?? film.feature}
                alt={`${film.title} ${film.poster ? "poster" : "still"}`}
                loading={idx > 1 ? "lazy" : undefined}
                onClick={() => openLightbox(film.poster ?? film.feature ?? "")}
                className="mx-auto w-[200px] md:w-full cursor-zoom-in object-cover shadow-2xl"
              />

              <div className="text-center text-white">
                <h3 className="font-display text-2xl md:text-3xl tracking-wide">
                  {film.title} ({film.year})
                </h3>
                {film.format && (
                  <p className="mt-3 text-sm font-light tracking-widest text-[#bbb]">
                    {film.format}
                  </p>
                )}
                <p className="mx-auto mt-4 max-w-2xl text-lg md:text-xl font-light leading-relaxed">
                  {film.description}
                </p>
                <div className="mt-6 space-y-1 text-sm md:text-base font-light text-[#ccc]">
                  {film.credits.map((credit) => (
                    <p key={credit}>{credit}</p>
                  ))}
                </div>

                <div
                  className={`mx-auto mt-8 grid max-w-3xl gap-3 ${
                    film.stills.length === 2 ? "grid-cols-2" : "grid-cols-1 sm:grid-cols-3"
                  }`}
                >
                  {film.stills.map((still, index) => (
                    <img
                      key={still}
                      src={still}
                      alt={`${film.title} still ${index + 1}`}
                      loading="lazy"
                      onClick={() => openLightbox(film.stills, index)}
                      className="h-40 w-full cursor-zoom-in object-cover"
                    />
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}

        {/* Biffi e Baffi */}
        <article className="mx-auto w-full max-w-5xl bg-black/60 p-6 text-center text-white md:p-10">
          <h3 className="font-display text-2xl md:text-3xl tracking-wide">BIFFI E BAFFI (2025-)</h3>
          <p className="mx-auto mt-5 max-w-3xl text-lg md:text-xl font-light leading-relaxed">
            Short film in post-production, directed by Rossana Signorile with Antonella Massaro.
            Rossana curated the scenography with Asia Castagna and performed in it.
          </p>
          <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-3 md:grid-cols-3">
            {siteAssets.biffiEBaffi.stills.map((img, i) => (
              <img
                key={img}
                src={img}
                alt={`Biffi e Baffi still ${i + 1}`}
                loading="lazy"
                onClick={() => openLightbox(siteAssets.biffiEBaffi.stills, i)}
                className="h-40 w-full cursor-zoom-in object-cover"
              />
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
