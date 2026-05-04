import { ReactNode } from "react";

export function SectionHeader({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <div className="w-full flex items-center justify-center py-16 relative">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-[#444] shadow-[0_1px_2px_rgba(0,0,0,0.5)]"></div>
        <div className="w-full border-t border-[#222]"></div>
      </div>
      <div className="relative flex justify-center bg-transparent">
        <div className="bg-[#1c1c1c]/90 px-8 backdrop-blur-sm border-y border-[#333] shadow-[0_0_15px_rgba(0,0,0,0.8)]">
          <h2 className="text-4xl md:text-5xl font-display uppercase tracking-[0.2em] py-4 text-[#ddd] mix-blend-difference" style={{ letterSpacing: '0.2em', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))' }}>
            {title}
          </h2>
        </div>
      </div>
      {children && (
        <div className="absolute right-12 top-1/2 -translate-y-1/2 opacity-70">
          {children}
        </div>
      )}
    </div>
  );
}
