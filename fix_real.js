import fs from 'fs';
let content = fs.readFileSync('src/pages/HomePage.tsx', 'utf8');

content = content.replace(
  /<Reveal>\s*<div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 py-4">/,
  '<div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 py-4">\n          <Reveal>'
);

content = content.replace(
  /<\/button>\s*<\/div>\s*<\/div>\s*<\/Reveal>\s*<\/div>\s*<\/section>/,
  '</button>\n              </div>\n            </div>\n          </Reveal>\n        </div>\n      </section>'
);

fs.writeFileSync('src/pages/HomePage.tsx', content);
console.log("Fixed it!");
