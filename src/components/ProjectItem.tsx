import { ReactNode } from "react";

interface ProjectItemProps {
  title: string;
  year?: string;
  format?: string;
  description: ReactNode;
  credits: ReactNode;
  posterSrc?: string;
  images?: string[];
  align?: "left" | "right";
}

export function ProjectItem({
  title,
  year,
  format,
  description,
  credits,
  posterSrc,
  images = [],
  align = "left",
}: ProjectItemProps) {
  return (
    <div className={`flex flex-col ${align === "right" ? "md:flex-row-reverse" : "md:flex-row"} gap-8 md:gap-16 my-24 w-full max-w-6xl mx-auto px-4 md:px-0`}>
      {/* Poster */}
      {posterSrc && (
        <div className="w-full md:w-1/3 flex-shrink-0">
          <img
            src={posterSrc}
            alt={title}
            className="w-full h-auto object-cover shadow-[0_10px_30px_rgba(0,0,0,0.8)] grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
          />
        </div>
      )}

      {/* Info & Stills */}
      <div className="w-full md:w-2/3 flex flex-col justify-center">
        <div className={`text-center ${align === "right" ? "md:text-right" : "md:text-center"} mb-8`}>
          <h3 className="text-2xl md:text-3xl font-serif tracking-widest text-[#ececec]">
            {title} {year && `(${year})`}
          </h3>
          {format && <p className="text-sm font-sans tracking-widest text-[#999] mt-2 mb-4">{format}</p>}
          
          <div className="text-lg font-light text-[#ccc] leading-relaxed max-w-2xl mx-auto md:mx-0 my-6">
            {description}
          </div>
          
          <div className="text-sm text-[#888] font-sans leading-loose space-y-1 max-w-xl mx-auto md:mx-0">
            {credits}
          </div>
        </div>

        {/* Stills Gallery */}
        {images.length > 0 && (
          <div className="flex flex-row justify-center gap-2 md:gap-4 mt-8 flex-wrap">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${title} still ${i + 1}`}
                className="h-24 md:h-32 w-auto object-cover opacity-80 hover:opacity-100 transition-opacity duration-300 shadow-md"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
