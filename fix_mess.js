import fs from 'fs';
let content = fs.readFileSync('src/pages/HomePage.tsx', 'utf8');

// 1. Fix Brand Story tags
content = content.replace(
`              <button className="text-[11px] tracking-[0.2em] font-sans font-semibold text-charcoal border-b border-charcoal pb-1 hover:text-gold hover:border-gold transition-colors rounded-sm">
                DISCOVER OUR STORY
              </button>
            </div>
          </div>
          </Reveal>
        </div>
      </section>`,
`              <button className="text-[11px] tracking-[0.2em] font-sans font-semibold text-charcoal border-b border-charcoal pb-1 hover:text-gold hover:border-gold transition-colors rounded-sm">
                DISCOVER OUR STORY
              </button>
            </div>
          </div>
        </div>
        </Reveal>
      </section>`);

// 2. Fix Editorial Campaign tags
content = content.replace(
`              <button onClick={() => navigate("plp")} className="bg-gold text-charcoal text-[9px] sm:text-[11px] tracking-[0.2em] font-sans font-semibold px-4 sm:px-10 py-2 sm:py-4 hover:bg-ivory transition-colors rounded-sm">
                DISCOVER THE COLLECTION
              </button>
            </div>
          </div>
        </div>
        </Reveal>
      </section>`,
`              <button onClick={() => navigate("plp")} className="bg-gold text-charcoal text-[9px] sm:text-[11px] tracking-[0.2em] font-sans font-semibold px-4 sm:px-10 py-2 sm:py-4 hover:bg-ivory transition-colors rounded-sm">
                DISCOVER THE COLLECTION
              </button>
            </div>
          </div>
          </Reveal>
        </div>
      </section>`);

fs.writeFileSync('src/pages/HomePage.tsx', content);
console.log("Fixed JSX syntax errors");
