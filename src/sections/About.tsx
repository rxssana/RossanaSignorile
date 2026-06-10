import { SectionHeader } from "../components/SectionHeader";
import { siteAssets } from "../lib/assets";

export function About() {
  return (
    <section id="about" className="pt-24 pb-32 bg-[#1a1a1a]">
      <SectionHeader title="About" />

      <div className="max-w-5xl mx-auto px-4 mt-16 pb-16">
        <div className="flex flex-col md:flex-row gap-8 mb-16 justify-center">
           <img src={siteAssets.aboutPortrait} alt="Rossana Signorile" className="w-64 h-64 object-cover mx-auto md:mx-0 shadow-2xl" />
           <img src={siteAssets.aboutWorking} alt="Rossana at work" className="w-64 h-64 object-cover mx-auto md:mx-0 opacity-90" />
        </div>

        <div className="flex flex-col md:flex-row gap-12 text-[#ccc] font-light leading-loose text-justify">
           <div className="md:w-1/2 space-y-4">
             <p>
               Rossana Signorile è un'artista multidisciplinare nata nel sud Italia, nel 2001.<br/>
               Attualmente vive a Roma, ma si sposta con spirito nomade per perseguire i suoi obiettivi, supportata dalle persone nel mondo che credono nel potere dell'arte.
             </p>
             <p>
               E' autodidatta. Dopo gli studi linguistici nell'Università di Bari, ha deciso di dare un'opportunità alla creazione a tempo pieno. A Roma, ha iniziato come tecnico in macchina da presa, nell'industria cinematografica e al tempo stesso ha diretto i suoi cortometraggi. E' interessata all'impermanenza della pellicola cinematografica e alle incertezze che girare in pellicola porta con sé, di cui ha fatto esperienza.
             </p>
             <p>
               Ha diretto anche un'opera teatrale e studiato teatro danza con Ivan Ristallo, per poi dedicarsi alla danza butoh, studiando con Ezio Tangini e poi Valentin Tszin. Ha inoltre fatto parte della Biennale di Venezia College Teatro, in cui ha potuto seguire un workshop intensivo con Princess Hisatu Hassan Bangura, nel 2025. Folklore, miti, tradizioni popolari, riutilizzo di materiali. Porta avanti anche un interesse per la sperimentazione sonora, che al momento ha luogo con Andrea Donvito.
             </p>
             <p>
               La vita vien vissuta come un processo alchemico, tutto è in continuo mutamento e distruzione, per lasciar spazio a qualcosa di nuovo, qualcosa che permette una conoscenza più intima delle proprie ombre interiori.
             </p>
           </div>
           
           <div className="md:w-1/2 space-y-4 opacity-80">
             <p>
               ENGLISH - Rossana Signorile is a multidisciplinary artist born in the south of Italy in 2001.<br/>
               She currently lives in Rome but moves across space to persecute her objectives, supported by people around the globe that trust the meaning of art.
             </p>
             <p>
               She is self-taught. After a study on linguistics in University, she decided she would give a chance to making art full time. In Rome, she firstly started as a camera technician in the movie business and at the same time directing her own short movies. Interested in the process of film stocks and the impermanence of images, everything that could go wrong while filming on super8, she has discovered through the years.
             </p>
             <p>
               She has also directed a theatrical play, and started studying dance theater with Ivan Ristallo and then dedicating her energies to butoh dance with Ezio Tangini and Valentin Tszin. She also was parte of La Biennale of Venice College Theater, in which she could take the intensive workshop with Princess Hisatu Hassan Bangura, in 2025. Folklore, myth, popular traditions and repurposed materials. She is also interested in sound experimentation, which she is currently developing with Andrea Donvito.
             </p>
             <p>
               Life as an alchemical process, everything is in perpetual destruction to give space to something new, something that allows a better understanding of one's own inner shadows.
             </p>
           </div>
        </div>

        <div className="mt-24 flex justify-center">
           <img src={siteAssets.aboutFlower} alt="Feather flower" loading="lazy" className="w-full max-w-2xl object-cover opacity-90 hover:opacity-100 transition-opacity duration-1000" />
        </div>
        <div className="mt-6 flex justify-center">
           <img src={siteAssets.aboutDarkFlower} alt="Feathers among dark leaves" loading="lazy" className="w-full max-w-xl object-cover opacity-80" />
        </div>
      </div>
    </section>
  );
}
