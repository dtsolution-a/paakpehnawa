import fs from 'fs';

let content = fs.readFileSync('src/pages/HomePage.tsx', 'utf8');

// 1. Add imports
content = content.replace('import { useState } from "react"', 'import { useState, useEffect } from "react"\nimport logo from "@/imports/image.png"');

// 2. Add state and effect inside the component
const stateLogic = `  const [heroIndex, setHeroIndex] = useState(0);
  const HERO_IMAGES = ["/images/goof.png", "/images/goo7.png"];

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex(prev => (prev + 1) % HERO_IMAGES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const featured = PRODUCTS.slice(0, 4)`;

content = content.replace('const featured = PRODUCTS.slice(0, 4)', stateLogic);

// 3. Update the Hero section
const newHero = `{/* ── HERO ── */}
      <section 
        className="relative w-full bg-sand cursor-pointer overflow-hidden group" 
        onClick={() => navigate("plp")}
        style={{ aspectRatio: "2.33/1", minHeight: "300px" }}
      >
        {HERO_IMAGES.map((src, i) => (
          <img
            key={src}
            src={src}
            alt="Premium Indian menswear fashion campaign"
            className={\`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 \${i === heroIndex ? "opacity-100" : "opacity-0"}\`}
          />
        ))}
        {/* Logo overlay on the left */}
        <div className="absolute inset-y-0 left-[5%] md:left-[10%] flex items-center justify-start w-2/5 md:w-1/3 z-10 pointer-events-none">
          <img src={logo} alt="Paak Pehnawa" className="w-full h-auto object-contain drop-shadow-2xl opacity-90" />
        </div>
      </section>`;

const heroRegex = /\{\/\* ── HERO ── \*\/\}[\s\S]*?<\/section>/;
content = content.replace(heroRegex, newHero);

fs.writeFileSync('src/pages/HomePage.tsx', content);
console.log("HomePage updated successfully.");
