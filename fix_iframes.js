import fs from 'fs';

let content = fs.readFileSync('src/pages/HomePage.tsx', 'utf8');

const oldIframeStr = `<iframe 
                   src={\`https://www.instagram.com/reel/\${id}/embed/?autoplay=0\`}
                   width="320" 
                   height="540" 
                   frameBorder="0" 
                   scrolling="no" 
                   allowTransparency={true}
                   loading="lazy"
                   className="w-full h-full pointer-events-auto"
                 ></iframe>`;

const newIframeStr = `<iframe 
                   src={\`https://www.instagram.com/p/\${id}/embed/?autoplay=1&muted=1&hidecaption=1\`}
                   style={{ width: "320px", height: "580px", marginTop: "-55px", marginBottom: "-55px", scale: "1.1" }}
                   frameBorder="0" 
                   scrolling="no" 
                   allowTransparency={true}
                   allow="autoplay; encrypted-media"
                   loading="lazy"
                   className="pointer-events-none"
                 ></iframe>`;

content = content.replace(oldIframeStr, newIframeStr);
fs.writeFileSync('src/pages/HomePage.tsx', content);
console.log("Updated iframes");
