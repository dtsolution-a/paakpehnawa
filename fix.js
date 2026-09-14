import fs from 'fs';
let content = fs.readFileSync('src/pages/HomePage.tsx', 'utf8');
content = content.replace(/<Reveal>\s*/g, '');
content = content.replace(/\s*<\/Reveal>/g, '');
fs.writeFileSync('src/pages/HomePage.tsx', content);
console.log("Fixed");
