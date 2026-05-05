/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Overlay } from "./components/Overlay";
import { Shorts } from "./sections/Shorts";
import { MusicVideos } from "./sections/MusicVideos";
import { Birdland } from "./sections/Birdland";
import { Performance } from "./sections/Performance";
import { About } from "./sections/About";
import { PrintsLinks } from "./sections/PrintsLinks";
import { siteAssets } from "./lib/assets";

export default function App() {
  return (
    <div className="relative w-full min-h-screen text-canvas-text font-serif selection:bg-white selection:text-black">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img
          src={siteAssets.homeBackground}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <Overlay />
      
      {/* Main Content Area */}
      <main className="md:ml-64 relative z-10 bg-transparent">
        <Shorts />
        <MusicVideos />
        <Birdland />
        <Performance />
        <About />
        <PrintsLinks />
      </main>
      
      {/* Footer decorative */}
      <div className="fixed bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[rgba(20,20,20,0.8)] to-transparent pointer-events-none z-0"></div>
    </div>
  );
}
