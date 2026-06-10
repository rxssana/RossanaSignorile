import { SectionHeader } from "../components/SectionHeader";
import aboutContent from "../content/about.json";
import { mediaAsset, mediaStyle } from "../lib/assets";

export function About() {
  const portrait = mediaAsset(aboutContent.portrait);
  const working = mediaAsset(aboutContent.working);
  const flower = mediaAsset(aboutContent.flower);
  const darkFlower = mediaAsset(aboutContent.darkFlower);

  return (
    <section id="about" className="pt-24 pb-32 bg-[#1a1a1a]">
      <SectionHeader title="About" />

      <div className="max-w-5xl mx-auto px-4 mt-16 pb-16">
        <div className="flex flex-col md:flex-row gap-8 mb-16 justify-center">
           <img src={portrait} alt="Rossana Signorile" className="w-64 h-64 object-cover mx-auto md:mx-0 shadow-2xl" style={mediaStyle(aboutContent.portrait)} />
           <img src={working} alt="Rossana at work" className="w-64 h-64 object-cover mx-auto md:mx-0 opacity-90" style={mediaStyle(aboutContent.working)} />
        </div>

        <div className="flex flex-col md:flex-row gap-12 text-[#ccc] font-light leading-loose text-justify">
           <div className="md:w-1/2 space-y-4">
             {aboutContent.italianParagraphs.map((paragraph) => (
               <p key={paragraph}>
                 {paragraph.split("\n").map((line, index) => (
                   <span key={line}>
                     {index > 0 && <br />}
                     {line}
                   </span>
                 ))}
               </p>
             ))}
           </div>
           
           <div className="md:w-1/2 space-y-4 opacity-80">
             {aboutContent.englishParagraphs.map((paragraph) => (
               <p key={paragraph}>
                 {paragraph.split("\n").map((line, index) => (
                   <span key={line}>
                     {index > 0 && <br />}
                     {line}
                   </span>
                 ))}
               </p>
             ))}
           </div>
        </div>

        <div className="mt-24 flex justify-center">
           <img src={flower} alt="Feather flower" loading="lazy" className="w-full max-w-2xl object-cover opacity-90 hover:opacity-100 transition-opacity duration-1000" style={mediaStyle(aboutContent.flower)} />
        </div>
        <div className="mt-6 flex justify-center">
           <img src={darkFlower} alt="Feathers among dark leaves" loading="lazy" className="w-full max-w-xl object-cover opacity-80" style={mediaStyle(aboutContent.darkFlower)} />
        </div>
      </div>
    </section>
  );
}
