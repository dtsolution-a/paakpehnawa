import fs from 'fs';
let lines = fs.readFileSync('src/pages/HomePage.tsx', 'utf8').split('\n');

// Swap 186 and 187 (0-indexed 185 and 186)
let temp1 = lines[185];
lines[185] = lines[186];
lines[186] = temp1;

// Swap 271 and 272 (0-indexed 270 and 271)
let temp2 = lines[270];
lines[270] = lines[271];
lines[271] = temp2;

fs.writeFileSync('src/pages/HomePage.tsx', lines.join('\n'));
console.log("Fixed by line number");
