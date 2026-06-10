import { SectionHeader } from "../components/SectionHeader";
import { FolderIndex } from "../components/FolderIndex";
import birdlandContent from "../content/birdland.json";
import siteContent from "../content/site.json";
import { mediaAsset } from "../lib/assets";

export function Birdland() {
  return (
    <section
      id="birdland"
      className="relative pt-24 pb-32"
      style={{
        backgroundImage: `url(${mediaAsset(siteContent.backgrounds.lightTexture)})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/80" aria-hidden="true" />

      <div className="relative">
        <SectionHeader title="Birdland" />

        <div className="mx-auto mt-12 max-w-5xl px-4">
          <p className="mx-auto max-w-3xl text-center font-light leading-relaxed text-[#bbb]">
            {birdlandContent.intro}
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-center font-mono text-xs text-[#777]">
            {birdlandContent.hint}
          </p>

          <div className="mt-10">
            <FolderIndex works={birdlandContent.works} />
          </div>
        </div>
      </div>
    </section>
  );
}
