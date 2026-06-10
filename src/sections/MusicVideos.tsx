import { SectionHeader } from "../components/SectionHeader";
import siteContent from "../content/site.json";
import musicVideosContent from "../content/music-videos.json";
import { mediaAsset, mediaKey, mediaStyle, resolveMedia } from "../lib/assets";
import { openLightbox } from "../components/Lightbox";

const videos = musicVideosContent.videos;

function WatchLink({ url }: { url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="mt-3 inline-flex items-center gap-2 border border-[#555] px-4 py-2 font-mono text-xs tracking-wider text-[#ccc] transition-colors hover:border-white hover:text-white"
    >
      <span aria-hidden="true">▶</span> WATCH ON YOUTUBE
    </a>
  );
}

export function MusicVideos() {
  return (
    <section
      id="music-videos"
      className="relative pt-24 pb-32"
      style={{
        backgroundImage: `url(${mediaAsset(siteContent.backgrounds.darkTexture)})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/75" aria-hidden="true" />

      <div className="relative">
        <SectionHeader title="Music videos" />

        <div className="mx-auto mt-16 flex max-w-6xl flex-col gap-28 px-4">
          {videos.map((video) => (
            <div key={video.titleAlt} className="text-center">
              <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-12">
                {resolveMedia(video.titleCard).src && (
                  <a href={video.url} target="_blank" rel="noreferrer" title="Watch on YouTube">
                    <img
                      src={mediaAsset(video.titleCard)}
                      alt={`${video.titleAlt} (title card)`}
                      className="w-full max-w-lg object-cover shadow-2xl transition-opacity hover:opacity-90"
                      style={mediaStyle(video.titleCard)}
                    />
                  </a>
                )}
                <div className="text-sm font-light tracking-wide text-[#aaa] md:text-left">
                  <p>
                    {video.label}
                    <br />
                    {video.sub}
                  </p>
                  <WatchLink url={video.url} />
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {video.stills.map((img, i) => (
                  <img
                    key={mediaKey(img)}
                    src={mediaAsset(img)}
                    alt={`${video.titleAlt} still`}
                    loading="lazy"
                    onClick={() => openLightbox(video.stills, i)}
                    className="aspect-video w-full cursor-zoom-in object-cover opacity-90 shadow-xl transition-opacity hover:opacity-100"
                    style={mediaStyle(img)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
