import { SectionHeader } from "../components/SectionHeader";
import { FolderIndex } from "../components/FolderIndex";
import { siteAssets, birdlandWorks } from "../lib/assets";

export function Birdland() {
  return (
    <section
      id="birdland"
      className="relative pt-24 pb-32"
      style={{
        backgroundImage: `url(${siteAssets.textureLight})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/80" aria-hidden="true" />

      <div className="relative">
        <SectionHeader title="Birdland" />

        <div className="mx-auto mt-12 max-w-5xl px-4">
          <p className="mx-auto max-w-3xl text-center font-light leading-relaxed text-[#bbb]">
            Il processo alchemico della trasmutazione della materia è lo specchio della
            trasformazione interna. I materiali ruvidi vivono delle loro ombre, la cartapesta
            assume le sembianze di una massa viva informe, che contiene i germi divini di vita.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-center font-mono text-xs text-[#777]">
            browse the works below — open a folder, open an image
          </p>

          <div className="mt-10">
            <FolderIndex works={birdlandWorks} />
          </div>
        </div>
      </div>
    </section>
  );
}
