import fs from 'fs';

let content = fs.readFileSync('src/pages/HomePage.tsx', 'utf8');

const oldLogoHTML = `<div className="absolute inset-y-0 left-[5%] md:left-[10%] flex items-center justify-start w-2/5 md:w-1/3 z-10 pointer-events-none">\n          <img src={logo} alt="Paak Pehnawa" className="w-full h-auto object-contain drop-shadow-2xl opacity-90" />\n        </div>`;

const newLogoHTML = `<div className="absolute inset-y-0 left-[3%] md:left-[5%] flex items-center justify-start w-[180px] sm:w-[220px] md:w-[280px] lg:w-[320px] z-10 pointer-events-none">\n          <img src="/images/hero-logo.png" alt="Paak Pehnawa" className="w-full h-auto object-contain drop-shadow-2xl opacity-100" />\n        </div>`;

if (content.includes('left-[5%] md:left-[10%]')) {
    content = content.replace(oldLogoHTML, newLogoHTML);
    fs.writeFileSync('src/pages/HomePage.tsx', content);
    console.log("Logo updated");
} else {
    console.log("Could not find the exact old HTML block to replace.");
}
