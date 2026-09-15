import fs from 'fs';

let content = fs.readFileSync('src/pages/HomePage.tsx', 'utf8');

// 1. Remove old Instagram section
const oldInstaRegex = /\{\/\* ── INSTAGRAM.*?<\/section>/s;
content = content.replace(oldInstaRegex, '');

// 2. Prepare new Reels section
const REELS = [
  "DGrVefOtvXn", "DdORVQrgf35", "DdL4UCGgiIR", "DdG714nAn8E", 
  "DdGxfzVpBT8", "DdEKJueA_wk", "DdBfbD-AmBo", "Dc_IIo7AMaP", 
  "Dc71u2wtNU7", "DcnQmgjpmju"
];

const newReelsSection = `{/* ── SOCIAL REELS SLIDER ── */}
      <section className="py-16 md:py-24 bg-brown border-b border-sand overflow-hidden">
        <Reveal>
        <div className="w-full">
          <div className="px-6 mb-10 text-center">
             <p className="text-[10px] tracking-[0.3em] text-gold font-sans font-semibold mb-3">EXPERIENCE THE CRAFT</p>
             <h2 className="font-display font-black text-ivory" style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", letterSpacing: "-0.02em" }}>
               @paakpehnawa
             </h2>
          </div>
          <div className="flex overflow-x-auto gap-4 px-6 pb-8 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {${JSON.stringify(REELS)}.map(id => (
               <div key={id} className="snap-center shrink-0 w-[280px] sm:w-[320px] bg-charcoal/20 flex items-center justify-center rounded-sm overflow-hidden" style={{ height: "540px" }}>
                 <iframe 
                   src={\`https://www.instagram.com/reel/\${id}/embed/?autoplay=0\`}
                   width="320" 
                   height="540" 
                   frameBorder="0" 
                   scrolling="no" 
                   allowTransparency={true}
                   loading="lazy"
                   className="w-full h-full pointer-events-auto"
                 ></iframe>
               </div>
            ))}
          </div>
        </div>
        </Reveal>
      </section>`;

// 3. Insert after Hero
const heroEndRegex = /(<\/section>\s*)({\/\*.*WHAT'S YOUR SIGNATURE\?)/s;
content = content.replace(heroEndRegex, "$1\n      " + newReelsSection + "\n\n      $2");

fs.writeFileSync('src/pages/HomePage.tsx', content);
console.log("Reels added and old Insta removed");
