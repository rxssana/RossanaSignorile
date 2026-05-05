import { SectionHeader } from "../components/SectionHeader";
import { siteAssets } from "../lib/assets";

export function Shorts() {
  const projects = [
    {
      title: "HORROR VACUI",
      year: "2023",
      format: "Stop motion, 3'",
      description: "The story of a girl forced to grow up as she faces death in its forms.",
      credits: ["Shot by Rossana Signorile", "Music by Andrea Donvito"],
      poster: siteAssets.horrorPoster,
      stills: siteAssets.shortStills.slice(0, 3),
      background: siteAssets.shortBackgrounds[0],
    },
    {
      title: "WITCHES' DREAM",
      year: "2024",
      format: "Super8, 1'",
      description: "Experimental dialogue between camera and sound, what is still in the dream world.",
      credits: ["Shot by Rossana Signorile", "with Caterina Cingolani"],
      poster: siteAssets.witchesPoster,
      stills: siteAssets.shortStills.slice(3, 5),
      background: siteAssets.shortBackgrounds[1],
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
      poster: siteAssets.vaguePoster,
      stills: siteAssets.shortStills.slice(5, 8),
      background: siteAssets.shortBackgrounds[2],
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
      poster: siteAssets.mnemosinePoster,
      stills: siteAssets.shortStills.slice(8, 11),
      background: siteAssets.shortBackgrounds[3],
    },
    {
      title: "ANGELO STERMINATORE",
      year: "2026",
      format: "Super8, 6'",
      description: "An old chant emerging from light and shadow.",
      credits: ["Shot by Rossana Signorile", "with Aurora Bini", "Music by Andrea Donvito"],
      poster: siteAssets.angeloPoster,
      stills: siteAssets.shortStills.slice(11, 14),
      background: siteAssets.shortBackgrounds[4],
    },
  ];

  return (
    <section id="shorts" className="relative">
      <SectionHeader title="Shorts" />

      <div className="snap-y snap-mandatory">
        {projects.map((project) => (
          <article key={project.title} className="relative min-h-screen snap-start overflow-hidden">
            <div className="absolute inset-0">
              <img src={project.background} alt="" aria-hidden="true" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/50" />
            </div>

            <div className="relative z-10 min-h-screen px-4 py-16 md:py-24">
              <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-10 md:grid-cols-[240px_1fr]">
                <img
                  src={project.poster}
                  alt={`${project.title} poster`}
                  className="mx-auto w-[220px] md:w-[240px] object-cover shadow-2xl grayscale"
                />

                <div className="text-center text-white">
                  <h3 className="text-4xl md:text-5xl font-display">{project.title}</h3>
                  <p className="mt-2 text-2xl md:text-3xl font-serif">({project.year})</p>
                  <p className="mt-4 text-2xl md:text-3xl font-light">{project.format}</p>
                  <p className="mx-auto mt-6 max-w-3xl text-3xl md:text-4xl leading-tight font-light">
                    {project.description}
                  </p>
                  <div className="mt-8 space-y-1 text-2xl md:text-3xl font-light">
                    {project.credits.map((credit) => (
                      <p key={credit}>{credit}</p>
                    ))}
                  </div>

                  <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-3 md:grid-cols-3">
                    {project.stills.map((still, index) => (
                      <img
                        key={`${project.title}-${index}`}
                        src={still}
                        alt={`${project.title} still ${index + 1}`}
                        className="h-44 w-full object-cover"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}

        <article className="relative min-h-screen snap-start overflow-hidden">
          <div className="absolute inset-0">
            <img src={siteAssets.shortBackgrounds[0]} alt="" aria-hidden="true" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/55" />
          </div>

          <div className="relative z-10 mx-auto min-h-screen max-w-6xl px-4 py-20 text-center text-white">
            <h3 className="text-4xl md:text-5xl font-display">BIFFI E BAFFI (2025-)</h3>
            <p className="mx-auto mt-6 max-w-3xl text-2xl md:text-3xl font-light leading-tight">
              short film in post-production, directed by Rossana Signorile with Antonella Massaro.
              Rossana curated the scenography with Asia Castagna and performed in it.
            </p>
            <div className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-3 md:grid-cols-3">
              {siteAssets.performanceStills.slice(0, 6).map((img, i) => (
                <img key={i} src={img} alt="Biffi e Baffi still" className="h-44 w-full object-cover" />
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
