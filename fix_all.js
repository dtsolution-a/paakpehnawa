import fs from 'fs';

let content = fs.readFileSync('src/pages/HomePage.tsx', 'utf8');

// 1. Signature Title
const oldSignature = `              WHAT'S YOUR SIGNATURE?`;
const newSignature = `              WHAT'S YOUR <span className="font-signature font-normal text-gold" style={{ fontSize: "1.5em", marginLeft: "4px" }}>Signature</span>?`;
content = content.replace(oldSignature, newSignature);


// 2. Fix Reveal in Editorial Campaign
// Locate the exact Editorial Campaign block
const editorialStart = `      {/* ── EDITORIAL CAMPAIGN (IMAGE/CHARCOAL) ── */}
      <section className="relative w-full overflow-hidden bg-brown">
        <img src="/images/hero-2.png" alt="Editorial Campaign" className="w-full h-auto block opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-r from-brown/90 via-brown/40 to-transparent" />
        <Reveal>
        <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 py-4">
          <div className="max-w-[1400px] w-full mx-auto">
            <div className="max-w-xl">
              <h2 className="font-display font-black text-ivory mb-2 sm:mb-6" style={{ fontSize: "clamp(1.2rem, 4vw, 5rem)", letterSpacing: "-0.02em" }}>
                DRESS LIKE YOUR <br/><span className="text-gold italic font-light">ROOTS MATTER.</span>
              </h2>
              <p className="text-ivory/80 font-sans text-[10px] sm:text-lg mb-4 sm:mb-10 hidden sm:block">
                Crafted with character. Worn with pride.
              </p>
              <button onClick={() => navigate("plp")} className="bg-gold text-charcoal text-[9px] sm:text-[11px] tracking-[0.2em] font-sans font-semibold px-4 sm:px-10 py-2 sm:py-4 hover:bg-ivory transition-colors rounded-sm">
                DISCOVER THE COLLECTION
              </button>
            </div>
          </div>
        </div>
        </Reveal>
      </section>`;

const fixedEditorial = `      {/* ── EDITORIAL CAMPAIGN (IMAGE/CHARCOAL) ── */}
      <section className="relative w-full overflow-hidden bg-brown">
        <img src="/images/hero-2.png" alt="Editorial Campaign" className="w-full h-auto block opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-r from-brown/90 via-brown/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 py-4">
          <Reveal>
          <div className="max-w-[1400px] w-full mx-auto">
            <div className="max-w-xl">
              <h2 className="font-display font-black text-ivory mb-2 sm:mb-6" style={{ fontSize: "clamp(1.2rem, 4vw, 5rem)", letterSpacing: "-0.02em" }}>
                DRESS LIKE YOUR <br/><span className="text-gold italic font-light">ROOTS MATTER.</span>
              </h2>
              <p className="text-ivory/80 font-sans text-[10px] sm:text-lg mb-4 sm:mb-10 hidden sm:block">
                Crafted with character. Worn with pride.
              </p>
              <button onClick={() => navigate("plp")} className="bg-gold text-charcoal text-[9px] sm:text-[11px] tracking-[0.2em] font-sans font-semibold px-4 sm:px-10 py-2 sm:py-4 hover:bg-ivory transition-colors rounded-sm">
                DISCOVER THE COLLECTION
              </button>
            </div>
          </div>
          </Reveal>
        </div>
      </section>`;

if(content.includes('ROOTS MATTER')) {
    content = content.replace(editorialStart, fixedEditorial);
}


// 3. Remove Old Instagram Section
const oldInstaRegex = /\{\/\* ── INSTAGRAM.*?<\/section>/s;
content = content.replace(oldInstaRegex, '');


// 4. Insert Reels Section
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

const heroEndRegex = /(<\/section>\s*)({\/\* ── WHAT'S YOUR)/s;
content = content.replace(heroEndRegex, "$1\n      " + newReelsSection + "\n\n      $2");

fs.writeFileSync('src/pages/HomePage.tsx', content);
console.log("Everything updated properly!");
