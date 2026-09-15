import fs from 'fs';
let c = fs.readFileSync('src/pages/HomePage.tsx', 'utf8');

c = c.replace(
`                <button onClick={() => navigate("plp")} className="bg-gold text-charcoal text-[9px] sm:text-[11px] tracking-[0.2em] font-sans font-semibold px-4 sm:px-10 py-2 sm:py-4 hover:bg-ivory transition-colors rounded-sm">
                  DISCOVER THE COLLECTION
                </button>
              </div>
            </div>
          </div>
          </Reveal>
        </section>`,
`                <button onClick={() => navigate("plp")} className="bg-gold text-charcoal text-[9px] sm:text-[11px] tracking-[0.2em] font-sans font-semibold px-4 sm:px-10 py-2 sm:py-4 hover:bg-ivory transition-colors rounded-sm">
                  DISCOVER THE COLLECTION
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>`);

// wait, in the error message, the bad tag was:
//  271 │         </div>
//  272 │         </Reveal>
// let's just forcefully replace the end tags of Editorial Campaign
const targetBlock = `                <button onClick={() => navigate("plp")} className="bg-gold text-charcoal text-[9px] sm:text-[11px] tracking-[0.2em] font-sans font-semibold px-4 sm:px-10 py-2 sm:py-4 hover:bg-ivory transition-colors rounded-sm">
                  DISCOVER THE COLLECTION
                </button>
              </div>
            </div>
          </div>
        </div>
        </Reveal>
      </section>`;

// Let's just use regex to fix it
c = c.replace(
  /<\/button>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/Reveal>\s*<\/section>/,
  '</button>\n              </div>\n            </div>\n          </Reveal>\n        </div>\n      </section>'
);

c = c.replace(
  /<\/button>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/section>/,
  '</button>\n              </div>\n            </div>\n          </Reveal>\n        </div>\n      </section>'
);

c = c.replace(
  /<\/button>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/Reveal>\s*<\/div>\s*<\/section>/,
  '</button>\n              </div>\n            </div>\n          </Reveal>\n        </div>\n      </section>'
);

c = c.replace(
  /<\/button>\s*<\/div>\s*<\/div>\s*<\/Reveal>\s*<\/div>\s*<\/section>/,
  '</button>\n              </div>\n            </div>\n          </Reveal>\n        </div>\n      </section>'
);

fs.writeFileSync('src/pages/HomePage.tsx', c);
console.log("Fixed end");
