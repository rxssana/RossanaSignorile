import { ProjectItem } from "../components/ProjectItem";
import { SectionHeader } from "../components/SectionHeader";

export function Shorts() {
  return (
    <section id="shorts" className="pt-24 pb-32">
      <SectionHeader title="Shorts" />
      
      <div className="flex flex-col gap-12 mt-12">
        <ProjectItem
          title="HORROR VACUI"
          year="2023"
          format="Stop motion, 3'"
          description={
            <p>The story of a girl forced to grow up as she faces death in its forms.</p>
          }
          credits={
            <>
              <p>Shot by Rossana Signorile</p>
              <p>Music by Andrea Donvito</p>
            </>
          }
          posterSrc="https://images.unsplash.com/photo-1505635552518-3448ff116afe?w=600&q=80"
          images={[
            "https://images.unsplash.com/photo-1505635552518-3448ff116afe?w=400&q=80",
            "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&q=80",
            "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=400&q=80"
          ]}
        />

        <ProjectItem
          title="WITCHES' DREAM"
          year="2024"
          format="Super8, 1'"
          description={
            <p>Experimental dialogue between camera and sound, what is still in the dream world.</p>
          }
          credits={
            <>
              <p>Shot by Rossana Signorile</p>
              <p>with Caterina Cingolani</p>
            </>
          }
          posterSrc="https://images.unsplash.com/photo-1519074002996-a69e7be469ef?w=600&q=80"
          images={[
            "https://images.unsplash.com/photo-1509281373149-e957c6296406?w=400&q=80",
            "https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?w=400&q=80"
          ]}
        />

        <ProjectItem
          title="UNE VAGUE"
          year="2025"
          format="Handycam, 8'"
          description={
            <p>A short film about the concept of absence, translated through the body.</p>
          }
          credits={
            <>
              <p>Shot by Rossana Signorile</p>
              <p>Choreographed and performed by Vita Stasolla</p>
              <p>Music by Andrea Donvito</p>
            </>
          }
          posterSrc="https://images.unsplash.com/photo-1518063319808-1f516a2cc563?w=600&q=80"
          images={[
            "https://images.unsplash.com/photo-1549490349-8643362247b5?w=400&q=80",
            "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&q=80",
            "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?w=400&q=80"
          ]}
        />

        <ProjectItem
          title="MNEMOSINE"
          year="2026"
          format="Super8 and Handycam, 8'"
          description={
            <p>Two characters embody the mythological story of Mnemosine and Lete, in a reflection about time and space.</p>
          }
          credits={
            <>
              <p>Written and shot by Rossana Signorile</p>
              <p>with Bianca Macerini, Monia Cappello</p>
              <p>Music by Archaic Dirge</p>
            </>
          }
          posterSrc="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80"
          images={[
            "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?w=400&q=80",
            "https://images.unsplash.com/photo-1447433583449-c124fc8b919d?w=400&q=80",
            "https://images.unsplash.com/photo-1502814404746-83675e83ec50?w=400&q=80"
          ]}
        />

        <ProjectItem
          title="ANGELO STERMINATORE"
          year="2026"
          format="Super8, 6'"
          description={
            <p>An old chant emerging from light and shadow.</p>
          }
          credits={
            <>
              <p>Shot by Rossana Signorile</p>
              <p>with Aurora Bini</p>
              <p>Music by Andrea Donvito</p>
            </>
          }
          posterSrc="https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=600&q=80"
          images={[
            "https://images.unsplash.com/photo-1499540633125-482bf5804364?w=400&q=80",
            "https://images.unsplash.com/photo-1473216853240-bc5e03239a06?w=400&q=80",
            "https://images.unsplash.com/photo-1436831135709-48bdc150cce5?w=400&q=80"
          ]}
        />

        <div className="w-full max-w-6xl mx-auto mt-24 text-center px-4">
          <h3 className="text-2xl md:text-3xl font-serif tracking-widest text-[#ececec]">BIFFI E BAFFI (2025-)</h3>
          <p className="max-w-2xl mx-auto my-6 text-[#ccc] font-light">
            short film in post-production, directed by Rossana Signorile with Antonella 
            Massaro. Rossana curated the scenography with Asia Castagna and performed in it.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 max-w-4xl mx-auto">
            {"1234".split("").map((_, i) => (
              <img 
                key={i} 
                src={`https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?w=400&q=80&sig=${i}`}
                alt="Biffi e Baffi still" 
                className="w-full aspect-video object-cover opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
