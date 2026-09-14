import fs from 'fs';

let content = fs.readFileSync('src/pages/HomePage.tsx', 'utf8');

if (!content.includes('import Reveal')) {
    content = content.replace('import type { Page } from "@/App"', 'import type { Page } from "@/App"\nimport Reveal from "@/components/Reveal"');
}

function wrapWithReveal(startString, endString) {
    let startIndex = content.indexOf(startString);
    if (startIndex === -1) {
        console.log("Could not find start:", startString.substring(0, 50));
        return;
    }
    let endIndex = content.indexOf(endString, startIndex);
    if (endIndex === -1) {
        console.log("Could not find end:", endString.substring(0, 50));
        return;
    }
    endIndex += endString.length;
    
    let block = content.substring(startIndex, endIndex);
    let wrapped = `<Reveal>\n        ${block}\n        </Reveal>`;
    content = content.substring(0, startIndex) + wrapped + content.substring(endIndex);
}

// 1. Signature
wrapWithReveal(
    '<div className="max-w-[1400px] mx-auto px-6">\n          <div className="text-center mb-16">\n            <h2 className="font-display font-black text-ivory mb-4"',
    '</div>\n        </div>'
);

// 2. Brand Story
wrapWithReveal(
    '<div className="max-w-[1400px] mx-auto px-6">\n          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">',
    '</div>\n        </div>'
);

// 3. Shop by Category (Bento)
wrapWithReveal(
    '<div className="w-full px-1 sm:px-2">\n          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 px-2 sm:px-4">',
    '</div>\n        </div>'
);

// 4. New Arrivals
wrapWithReveal(
    '<div className="w-full px-1 sm:px-2">\n          <div className="text-center mb-12">\n            <h2 className="font-sans text-[15px] tracking-[0.25em] text-charcoal uppercase">\n              NEW ARRIVALS',
    '</div>\n        </div>'
);

// 5. Editorial Campaign
wrapWithReveal(
    '<div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 py-4">\n          <div className="max-w-[1400px] w-full mx-auto">\n            <div className="max-w-xl">',
    '</div>\n          </div>\n        </div>'
);

// 6. Best Sellers
wrapWithReveal(
    '<div className="w-full px-1 sm:px-2">\n          <div className="text-center mb-12">\n            <h2 className="font-sans text-[15px] tracking-[0.25em] text-charcoal uppercase">\n              BEST SELLERS',
    '</div>\n        </div>'
);

// 7. Occasion Discovery
wrapWithReveal(
    '<div className="max-w-[1400px] mx-auto px-6">\n          <div className="text-center mb-16">\n            <h2 className="font-display font-black text-charcoal mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)"',
    '</div>\n        </div>'
);

// 8. Why Paak Pehnawa
wrapWithReveal(
    '<div className="max-w-[1400px] mx-auto px-6">\n          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">',
    '</div>\n        </div>'
);

// 9. Customer Stories
wrapWithReveal(
    '<div className="max-w-[1400px] mx-auto px-6 text-center">\n          <h2 className="font-display font-black text-ivory mb-16"',
    '</div>\n        </div>'
);

// 10. Instagram
wrapWithReveal(
    '<div className="max-w-[1400px] mx-auto px-6 text-center">\n          <p className="text-[10px] tracking-[0.3em] text-gold font-sans font-semibold mb-3">FOLLOW THE LEGACY</p>',
    '</div>\n        </div>'
);

fs.writeFileSync('src/pages/HomePage.tsx', content);
console.log("Done");
