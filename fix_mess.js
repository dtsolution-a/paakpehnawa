import fs from 'fs';
let c = fs.readFileSync('src/pages/HomePage.tsx', 'utf8');

c = c.replace(
`              <h2 className="font-display font-black text-ivory mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}>
              WHAT'S YOUR <span className="font-signature font-normal text-gold" style={{ fontSize: "1.5em", marginLeft: "4px" }}>Signature</span>?
            </h2>
              <p className="text-ivory/80 font-sans text-[10px] sm:text-lg mb-4 sm:mb-10 hidden sm:block">
                Crafted with character. Worn with pride.
              </p>`,
`              <h2 className="font-display font-black text-ivory mb-2 sm:mb-6" style={{ fontSize: "clamp(1.2rem, 4vw, 5rem)", letterSpacing: "-0.02em" }}>
                DRESS LIKE YOUR <br/><span className="text-gold italic font-light">ROOTS MATTER.</span>
              </h2>
              <p className="text-ivory/80 font-sans text-[10px] sm:text-lg mb-4 sm:mb-10 hidden sm:block">
                Crafted with character. Worn with pride.
              </p>`
);

c = c.replace('text-gold lowercase" style={{ fontSize: "1.5em"', 'text-gold" style={{ fontSize: "1.5em"');

fs.writeFileSync('src/pages/HomePage.tsx', c);
console.log("Fixed");
