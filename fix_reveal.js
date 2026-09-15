import fs from 'fs';
let content = fs.readFileSync('src/pages/HomePage.tsx', 'utf8');

const oldEditorial = `        <Reveal>
          <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 py-4">
            <div className="max-w-[1400px] w-full mx-auto">
              <div className="max-w-xl">`;

const newEditorial = `        <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 py-4">
          <Reveal>
            <div className="max-w-[1400px] w-full mx-auto">
              <div className="max-w-xl">`;

content = content.replace(oldEditorial, newEditorial);

const oldEditorialEnd = `              </button>
            </div>
          </div>
        </div>
        </Reveal>`;

const newEditorialEnd = `              </button>
            </div>
          </div>
          </Reveal>
        </div>`;

content = content.replace(oldEditorialEnd, newEditorialEnd);
fs.writeFileSync('src/pages/HomePage.tsx', content);
console.log("Fixed Reveal wrapper in Editorial Campaign");
