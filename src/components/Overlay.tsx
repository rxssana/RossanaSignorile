import { Navigation } from "./Navigation";

export function Overlay() {
  return (
    <>
      <Navigation />
      {/* Top Right Header Graphic */}
      <div className="fixed top-0 right-0 p-12 z-40 hidden md:flex flex-col items-end pointer-events-none">
        <h2 className="text-3xl font-display tracking-widest text-[#dcdcdc] mb-4" style={{ textShadow: "0 2px 10px rgba(0,0,0,0.8)" }}>
          Landscapes
        </h2>
        <div className="text-right text-lg font-light leading-relaxed text-[#c0c0c0]" style={{ textShadow: "0 2px 10px rgba(0,0,0,0.8)" }}>
          <p>welcome</p>
          <p>to the land of dreams</p>
          <p className="mt-4">following</p>
          <p className="mt-2 text-xl italic font-serif">death's kingdom</p>
        </div>
      </div>

      {/* Center Top Graphics (Star/Moon) - we'll just use css/svg to draw simple shapes or use lucide */}
      <div className="fixed top-12 left-1/2 -translate-x-1/2 z-40 pointer-events-none opacity-60 mix-blend-screen hidden lg:block">
        <img src="https://images.unsplash.com/photo-1534447677768-be436bb09401?w=200&q=80" alt="abstract" className="w-24 h-24 object-cover rounded-full filter grayscale contrast-150 blur-[1px] " style={{ maskImage: 'radial-gradient(circle, black 30%, transparent 70%)', WebkitMaskImage: 'radial-gradient(circle, black 30%, transparent 70%)'}} />
      </div>

      {/* Bottom Right Links */}
      <div className="fixed bottom-0 right-0 p-8 md:p-12 z-50 pointer-events-none text-right">
        <div className="pointer-events-auto flex flex-col items-end gap-1 text-sm font-light text-canvas-muted hover:*:text-white *:transition-colors" style={{ textShadow: "0 2px 5px rgba(0,0,0,0.8)" }}>
           <a href="mailto:signorilerossana0@gmail.com">gmail: signorilerossana0@gmail.com</a>
           <a href="https://instagram.com/rxssana" target="_blank" rel="noreferrer">instagram @rxssana</a>
           <a href="https://youtube.com/something" target="_blank" rel="noreferrer">youtube: Rossana Signorile</a>
        </div>
      </div>
    </>
  );
}
