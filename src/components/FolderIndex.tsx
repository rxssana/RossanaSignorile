import { useState } from "react";
import { EditableImageValue, mediaAsset, mediaKey, mediaPath, mediaStyle } from "../lib/assets";
import { openLightbox } from "./Lightbox";

interface BirdlandWork {
  folder: string;
  title: string;
  description: string;
  images: EditableImageValue[];
}

function FolderIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 16"
      className="h-4 w-5 shrink-0 self-center fill-[#e8c872]"
    >
      <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h4.6l1.8 2h8.6A1.5 1.5 0 0 1 19 4.5v9A1.5 1.5 0 0 1 17.5 15h-15A1.5 1.5 0 0 1 1 13.5v-11Z" />
    </svg>
  );
}

/**
 * A thirdworlds.net-style file/folder index.
 * Folders open in place, listing their images; clicking a file opens it.
 */
export function FolderIndex({ works }: { works: BirdlandWork[] }) {
  const [openFolder, setOpenFolder] = useState<string | null>(null);

  const current = works.find((w) => w.folder === openFolder) ?? null;

  return (
    <div className="border border-[#3a3a3a] bg-black/70 font-mono text-sm md:text-base">
      {/* header bar */}
      <div className="flex items-center justify-between border-b border-[#3a3a3a] px-4 py-2 text-[#888]">
        <span className="truncate">
          Index of /birdland{current ? `/${current.folder}` : ""}
        </span>
        <span className="hidden md:inline text-xs">
          {current ? `${current.images.length} files` : `${works.length} folders`}
        </span>
      </div>

      {current === null ? (
        <ul>
          {works.map((work) => (
            <li key={work.folder} className="border-b border-[#222] last:border-b-0">
              <button
                onClick={() => setOpenFolder(work.folder)}
                className="flex w-full items-baseline gap-3 px-4 py-3 text-left text-[#ccc] transition-colors hover:bg-[#1c1c1c] hover:text-white"
              >
                <FolderIcon />
                <span className="break-all underline-offset-4 group-hover:underline">
                  {work.folder}/
                </span>
                <span className="ml-auto hidden shrink-0 text-xs text-[#666] md:inline">
                  {work.images.length} items
                </span>
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div>
          <button
            onClick={() => setOpenFolder(null)}
            className="flex w-full items-baseline gap-3 border-b border-[#222] px-4 py-3 text-left text-[#ccc] hover:bg-[#1c1c1c] hover:text-white"
          >
            <FolderIcon />
            <span>../</span>
            <span className="ml-auto shrink-0 text-xs text-[#666]">parent directory</span>
          </button>

          <div className="px-4 py-5 md:px-6">
            <h4 className="font-serif text-xl text-white md:text-2xl">{current.title}</h4>
            {current.description && (
              <p className="mt-3 max-w-3xl font-sans text-sm font-light leading-relaxed text-[#aaa]">
                {current.description}
              </p>
            )}

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
              {current.images.map((file, i) => (
                <button
                  key={file}
                  onClick={() =>
                    openLightbox(
                      current.images,
                      i,
                    )
                  }
                  className="group text-left"
                >
                  <img
                    src={mediaAsset(file)}
                    alt={`${current.title} - ${mediaPath(file)}`}
                    loading="lazy"
                    className="aspect-square w-full cursor-zoom-in object-cover opacity-85 transition-opacity group-hover:opacity-100"
                    style={mediaStyle(file)}
                  />
                  <p className="mt-1 truncate text-[0.625rem] leading-tight text-[#666] group-hover:text-[#999]">
                    {mediaPath(file)}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
