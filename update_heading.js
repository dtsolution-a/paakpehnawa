import fs from 'fs';

let content = fs.readFileSync('src/pages/HomePage.tsx', 'utf8');

// The exact string to replace
const oldText = `WHAT'S YOUR SIGNATURE?`;
const newText = `WHAT'S YOUR <span className="font-signature font-normal text-gold lowercase" style={{ fontSize: "1.5em", marginLeft: "4px" }}>Signature</span>?`;

content = content.replace(oldText, newText);

fs.writeFileSync('src/pages/HomePage.tsx', content);
console.log("Updated heading");
