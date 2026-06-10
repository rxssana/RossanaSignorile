import { SectionHeader } from "../components/SectionHeader";
import { siteAssets } from "../lib/assets";
import { openLightbox } from "../components/Lightbox";

function Gallery({
  images,
  cols = "grid-cols-1 sm:grid-cols-3",
  className = "",
}: {
  images: string[];
  cols?: string;
  className?: string;
}) {
  return (
    <div className={`grid gap-3 ${cols} ${className}`}>
      {images.map((img, i) => (
        <img
          key={img}
          src={img}
          alt="performance still"
          loading="lazy"
          onClick={() => openLightbox(images, i)}
          className="w-full cursor-zoom-in object-cover opacity-85 transition-opacity hover:opacity-100"
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
              <h3 className="mb-6 font-serif text-3xl text-white">The Ballad of Damnati</h3>
              <div className="space-y-4 font-light leading-relaxed text-[#ccc]">
                <p>
                  A theatrical piece that was represented on stage on April 2024, at the Teatro
                  della Visitazione in Rome, winning the Umbilicus Contest organized by Lauro
                  Versari. It is the story of a dysfunctional family and the process of
                  transformation of the only character that is aware of the things that make the
                  chain rot. They all behave like puppets but at the end every attempt of
                  liberation leads to death, metaphysical death.
                </p>
                <div className="my-6 space-y-1 font-sans text-sm text-[#888]">
                  <p>Written and directed by Rossana Signorile</p>
                  <p>
                    Performed by Caterina Cingolani, Antonella Massario, Valeria Romano, Gabriele
                    Passaro, Angelica Castagna, Rossana Signorile.
                  </p>
                  <p>Scenography by Sabrina Scamarcio</p>
                  <p>Live Sound by Archaic Dirge</p>
                  <p>Light Design by Simone Marchetti</p>
                  <p>Make up by Asia Castagna</p>
                  <p>Sound Design by Silvia Di Furia</p>
                </div>
              </div>
            </div>
            <div className="mt-8 md:mt-0 md:w-1/3">
              <img
                src={siteAssets.ballad.poster}
                alt="The Ballad of Damnati poster"
                onClick={() => openLightbox(siteAssets.ballad.poster)}
                className="w-full cursor-zoom-in object-cover"
              />
            </div>
          </div>

          <div className="mt-10 items-center gap-8 md:flex">
            <p className="text-sm italic font-light text-[#ccc] md:w-1/2">
              The new masks were designed by Asia Castagna but only used for the promotional
              campaign.
            </p>
            <img
              src={siteAssets.ballad.masks}
              alt="Promotional masks by Asia Castagna"
              loading="lazy"
              onClick={() => openLightbox(siteAssets.ballad.masks)}
              className="mt-4 w-full cursor-zoom-in object-cover md:mt-0 md:w-1/2"
            />
          </div>

          <Gallery
            images={siteAssets.ballad.stills}
            cols="grid-cols-2 md:grid-cols-3"
            className="mt-10"
          />
        </div>

        {/* Indagine sulla fiducia */}
        <div>
          <h3 className="mb-6 font-serif text-3xl text-white">Indagine sulla fiducia</h3>
          <div className="mb-8 space-y-2 text-sm font-light text-[#ccc]">
            <p>Performance in Gioia del Colle, in 2024.</p>
            <p>Performed by Caterina Cingolani, Rossana Signorile.</p>
            <p>Video shot by Antonella Massaro.</p>
            <p>Live music by Archaic Dirge.</p>
            <p className="mt-4 italic">
              An echo, a dance, shadows moving through the meaning of trust.
            </p>
            <p className="italic">
              Cosa significa la fiducia? Partendo da un passaggio di R. M. Rilke, ci siam messi a
              nudo.
            </p>
          </div>
          <Gallery images={siteAssets.indagine} />
        </div>

        {/* Butoh */}
        <div>
          <h3 className="mb-6 font-serif text-3xl text-white">Butoh performance</h3>
          <p className="mb-8 font-light text-[#ccc]">
            Performances that took place during Ezio Tangini's butoh workshop in Viareggio.
          </p>
          <Gallery
            images={siteAssets.butoh}
            cols="grid-cols-1 sm:grid-cols-2"
            className="mx-auto mb-16 max-w-2xl"
          />

          <p className="mb-8 font-light text-[#ccc]">
            Pictures of the performance <span className="italic">Inneres Auge</span>, created with
            the percussion artist Andrea Donvito, in an improvisation practice that started with
            the breathing and the reaching of an inner eye.
          </p>
          <Gallery images={siteAssets.innereAuge} className="mb-16" />

          <p className="mb-8 font-light text-[#ccc]">
            Pictures of the performance <span className="italic">Asterion</span>, the result of the
            intensive workshop in Berlin at theaterforum kreuzberg e.V., held by Valentin Tszin.
            <br />
            Rossana's improvisation solo was a breathing harmonica, that followed her movements. A
            sound inside out.
          </p>
          <Gallery
            images={siteAssets.asterion}
            cols="grid-cols-1 sm:grid-cols-2"
            className="mx-auto max-w-3xl"
          />
        </div>
      </div>
    </section>
  );
}
