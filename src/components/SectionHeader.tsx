import { ReactNode } from "react";

export function SectionHeader({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <div className="section-header relative flex w-full items-center justify-center">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-[#444] shadow-[0_1px_2px_rgba(0,0,0,0.5)]"></div>
        <div className="w-full border-t border-[#222]"></div>
      </div>
      <div className="relative flex justify-center bg-transparent">
        <div className="border-y border-[#333] bg-[#1c1c1c]/90 px-6 shadow-[0_0_15px_rgba(0,0,0,0.8)] backdrop-blur-sm md:px-8">
          <h2 className="section-title py-4 font-display uppercase text-[#ddd] mix-blend-difference" style={{ letterSpacing: '0.2em', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))' }}>
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
