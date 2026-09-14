import fs from 'fs';

let content = fs.readFileSync('src/pages/HomePage.tsx', 'utf8');

// Find EDITORIAL CAMPAIGN block
const editorialRegex = /\s*\{\/\*.*?EDITORIAL CAMPAIGN.*?\*\/\}\s*<section className="relative w-full overflow-hidden bg-charcoal">[\s\S]*?<\/section>/;

const match = content.match(editorialRegex);
if (!match) {
    console.error("Could not find EDITORIAL CAMPAIGN block");
    process.exit(1);
}

const editorialBlock = match[0];

// Remove the block from its current position
content = content.replace(editorialRegex, '');

// Find the start of the BEST SELLERS section
const bestSellersStartRegex = /\{\/\*.*?BEST SELLERS.*?\*\/\}/;
if (!content.match(bestSellersStartRegex)) {
    console.error("Could not find start of BEST SELLERS block");
    process.exit(1);
}

// Insert the block before the BEST SELLERS section
content = content.replace(bestSellersStartRegex, (matched) => {
  return `${editorialBlock.trim()}\n\n      ${matched}`;
});

fs.writeFileSync('src/pages/HomePage.tsx', content);
console.log("Section moved successfully.");
