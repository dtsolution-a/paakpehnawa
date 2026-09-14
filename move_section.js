import fs from 'fs';

let content = fs.readFileSync('src/pages/HomePage.tsx', 'utf8');

// Find the WHAT'S YOUR SIGNATURE block
const signatureRegex = /\s*\{\/\*.*?WHAT'S YOUR SIGNATURE.*? \*\/\}\s*<section className="py-24 md:py-32 bg-charcoal">[\s\S]*?<\/section>/;

const match = content.match(signatureRegex);
if (!match) {
    console.error("Could not find WHAT'S YOUR SIGNATURE block");
    process.exit(1);
}

const signatureBlock = match[0];

// Remove the block from its current position
content = content.replace(signatureRegex, '');

// Find the end of the HERO section
// It ends with </section> and then Brand Story starts
const heroEndRegex = /<\/section>\s*\{\/\*.*?BRAND STORY/;
if (!content.match(heroEndRegex)) {
    console.error("Could not find end of HERO block");
    process.exit(1);
}

// Insert the block after the HERO section
content = content.replace(heroEndRegex, `</section>\n${signatureBlock}\n\n      {/* ── BRAND STORY`);

fs.writeFileSync('src/pages/HomePage.tsx', content);
console.log("Section moved successfully.");
