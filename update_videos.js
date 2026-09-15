import fs from 'fs';

let content = fs.readFileSync('src/pages/HomePage.tsx', 'utf8');

const VIDEO_FILES = ['122','123','124','125','126','127','128','129','130','131'];

const oldReels = `      {/* ── SOCIAL REELS SLIDER ── */}
      <section className="py-16 md:py-24 bg-brown overflow-hidden">
        <Reveal>
        <div className="w-full">
          <div className="px-6 mb-10 text-center">
            <p className="text-[10px] tracking-[0.3em] text-gold font-sans font-semibold mb-3">AS SEEN ON INSTAGRAM</p>
            <h2 className="font-display font-black text-ivory" style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", letterSpacing: "-0.02em" }}>
              @paakpehnawa
            </h2>
          </div>
          <div
            className="flex overflow-x-auto gap-3 px-6 pb-6 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {REEL_IDS.map(id => (
              <div key={id} className="snap-center shrink-0 flex flex-col items-center gap-3">
                <div
                  className="rounded-sm overflow-hidden bg-charcoal/30 relative"
                  style={{ width: "240px", height: "420px" }}
                >
                  <div className="absolute inset-0 overflow-hidden" style={{ margin: "-48px 0" }}>
                    <iframe
                      src={\`https://www.instagram.com/p/\${id}/embed/?autoplay=1&muted=1&hidecaption=1\`}
                      style={{ width: "240px", height: "516px", border: "none", pointerEvents: "none" }}
                      scrolling="no"
                      allowTransparency={true}
                      allow="autoplay; encrypted-media"
                      loading="lazy"
                    />
                  </div>
                </div>
                <button
                  onClick={() => navigate("plp")}
                  className="text-[10px] tracking-[0.15em] font-sans font-semibold text-gold border border-gold/40 px-5 py-2 hover:bg-gold hover:text-charcoal transition-all rounded-sm uppercase"
                >
                  Shop This Look →
                </button>
              </div>
            ))}
          </div>
        </div>
        </Reveal>
      </section>`;

const newReels = `      {/* ── SOCIAL REELS SLIDER ── */}
      <section className="py-16 md:py-24 bg-brown overflow-hidden">
        <Reveal>
        <div className="w-full">
          <div className="px-6 mb-10 text-center">
            <p className="text-[10px] tracking-[0.3em] text-gold font-sans font-semibold mb-3">AS SEEN ON INSTAGRAM</p>
            <h2 className="font-display font-black text-ivory" style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", letterSpacing: "-0.02em" }}>
              @paakpehnawa
            </h2>
          </div>
          <div
            className="flex overflow-x-auto gap-3 px-6 pb-6 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {${JSON.stringify(VIDEO_FILES)}.map(vid => (
              <div key={vid} className="snap-center shrink-0 flex flex-col items-center gap-3">
                <div
                  className="rounded-sm overflow-hidden bg-charcoal/20 relative group"
                  style={{ width: "240px", height: "420px" }}
                >
                  <video
                    src={\`/videos/\${vid}.mp4\`}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    style={{ display: "block" }}
                  />
                  {/* Play icon overlay — disappears on hover */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => navigate("plp")}
                  className="text-[10px] tracking-[0.15em] font-sans font-semibold text-gold border border-gold/40 px-5 py-2 hover:bg-gold hover:text-charcoal transition-all rounded-sm uppercase"
                >
                  Shop This Look →
                </button>
              </div>
            ))}
          </div>
        </div>
        </Reveal>
      </section>`;

content = content.replace(oldReels, newReels);

// Remove the REEL_IDS constant since it's no longer needed
content = content.replace(
  `\nconst REEL_IDS = ["DGrVefOtvXn","DdORVQrgf35","DdL4UCGgiIR","DdG714nAn8E","DdGxfzVpBT8","DdEKJueA_wk","DdBfbD-AmBo","Dc_IIo7AMaP","Dc71u2wtNU7","DcnQmgjpmju"]\n`,
  '\n'
);

fs.writeFileSync('src/pages/HomePage.tsx', content);
console.log('✅ Reels section replaced with native video player');
