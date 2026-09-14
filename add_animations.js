import fs from 'fs';

let content = fs.readFileSync('src/pages/HomePage.tsx', 'utf8');

// 1. Add import if not exists
if (!content.includes('import Reveal')) {
    content = content.replace('import type { Page } from "@/App"', 'import type { Page } from "@/App"\nimport Reveal from "@/components/Reveal"');
}

// 2. We want to wrap the first child <div> of every <section> with <Reveal>
// A safe way is to replace `<div className="max-w-[1400px]` with `<Reveal><div className="max-w-[1400px]`
// And find the matching closing div.
// BUT Regex for matching closing tags is hard. 
// Alternatively, we can just do it manually with a few replaces since the structure is highly predictable.

// For "WHAT'S YOUR SIGNATURE?"
content = content.replace(
    /<div className="max-w-\[1400px\] mx-auto px-6">\s*<div className="text-center mb-16">\s*<h2[\s\S]*?<\/h2>\s*<p[\s\S]*?<\/p>\s*<\/div>\s*<div className="grid grid-cols-1 md:grid-cols-4 gap-4">[\s\S]*?<\/div>\s*<\/div>/,
    (match) => `<Reveal>\n          ${match}\n        </Reveal>`
);

// For "BRAND STORY"
content = content.replace(
    /<div className="max-w-\[1400px\] mx-auto px-6">\s*<div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">[\s\S]*?<\/div>\s*<\/div>/,
    (match) => `<Reveal>\n          ${match}\n        </Reveal>`
);

// For "SHOP BY CATEGORY (BENTO)"
content = content.replace(
    /<div className="w-full px-1 sm:px-2">\s*<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 px-2 sm:px-4">[\s\S]*?<\/div>\s*<\/div>/,
    (match) => `<Reveal>\n          ${match}\n        </Reveal>`
);

// For "NEW ARRIVALS"
content = content.replace(
    /<div className="w-full px-1 sm:px-2">\s*<div className="text-center mb-12">\s*<h2[\s\S]*?<\/h2>\s*<\/div>\s*<div className="grid grid-cols-2 md:grid-cols-4 gap-x-1 gap-y-10">[\s\S]*?<\/div>\s*<\/div>/,
    (match) => `<Reveal>\n          ${match}\n        </Reveal>`
);

// For "EDITORIAL CAMPAIGN"
content = content.replace(
    /<div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 py-4">\s*<div className="max-w-\[1400px\] w-full mx-auto">[\s\S]*?<\/div>\s*<\/div>/,
    (match) => `<Reveal>\n        ${match}\n        </Reveal>`
);

// For "BEST SELLERS"
content = content.replace(
    /<div className="w-full px-1 sm:px-2">\s*<div className="text-center mb-12">\s*<h2[\s\S]*?<\/h2>\s*<\/div>\s*<div className="grid grid-cols-2 md:grid-cols-4 gap-x-1 gap-y-10">[\s\S]*?<\/div>\s*<\/div>/,
    (match) => `<Reveal>\n          ${match}\n        </Reveal>`
);

// For "OCCASION DISCOVERY"
content = content.replace(
    /<div className="max-w-\[1400px\] mx-auto px-6">\s*<div className="text-center mb-16">\s*<h2[\s\S]*?<\/h2>\s*<\/div>\s*<div className="grid grid-cols-1 md:grid-cols-4 gap-4">[\s\S]*?<\/div>\s*<\/div>/,
    (match) => `<Reveal>\n          ${match}\n        </Reveal>`
);

// For "WHY PAAK PEHNAWA"
content = content.replace(
    /<div className="max-w-\[1400px\] mx-auto px-6">\s*<div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">[\s\S]*?<\/div>\s*<\/div>/,
    (match) => `<Reveal>\n          ${match}\n        </Reveal>`
);

// For "CUSTOMER STORIES"
content = content.replace(
    /<div className="max-w-\[1400px\] mx-auto px-6 text-center">\s*<h2[\s\S]*?<\/h2>\s*<div className="grid grid-cols-1 md:grid-cols-3 gap-8">[\s\S]*?<\/div>\s*<\/div>/,
    (match) => `<Reveal>\n          ${match}\n        </Reveal>`
);

// For "INSTAGRAM"
content = content.replace(
    /<div className="max-w-\[1400px\] mx-auto px-6 text-center">\s*<p[\s\S]*?<\/p>\s*<h2[\s\S]*?<\/h2>\s*<div className="grid grid-cols-3 md:grid-cols-6 gap-2">[\s\S]*?<\/div>\s*<\/div>/,
    (match) => `<Reveal>\n          ${match}\n        </Reveal>`
);

fs.writeFileSync('src/pages/HomePage.tsx', content);
console.log("Animations added successfully.");
