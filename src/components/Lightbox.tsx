import { useCallback, useEffect, useState } from "react";

type LightboxState = { images: string[]; index: number } | null;

let openFn: ((images: string[], index: number) => void) | null = null;

/** Open the fullscreen image viewer. Can be called from any component. */
export function openLightbox(images: string[] | string, index = 0) {
  const list = Array.isArray(images) ? images : [images];
  openFn?.(list, index);
}

export function Lightbox() {
  const [state, setState] = useState<LightboxState>(null);

  useEffect(() => {
    openFn = (images, index) => setState({ images, index });
    return () => {
      openFn = null;
    };
  }, []);

  const close = useCallback(() => setState(null), []);
  const step = useCallback(
    (dir: number) =>
      setState((s) =>
        s ? { ...s, index: (s.index + dir + s.images.length) % s.images.length } : s,
      ),
    [],
  );

  useEffect(() => {
    if (!state) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [state, close, step]);

  if (!state) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95"
      onClick={close}
    >
      <img
        src={state.images[state.index]}
        alt=""
        className="max-h-[88vh] max-w-[92vw] object-contain shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />

      <button
        aria-label="Close"
        onClick={close}
        className="absolute top-4 right-5 font-mono text-2xl text-white/70 hover:text-white"
      >
        [x]
      </button>

      {state.images.length > 1 && (
        <>
          <button
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 px-3 py-6 font-mono text-2xl text-white/60 hover:text-white"
          >
            &lt;
          </button>
          <button
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 px-3 py-6 font-mono text-2xl text-white/60 hover:text-white"
          >
            &gt;
          </button>
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-xs text-white/50">
            {state.index + 1} / {state.images.length}
          </p>
        </>
      )}
    </div>
  );
}
