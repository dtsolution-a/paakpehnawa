import { useState, useEffect } from "react"
import logo from "@/imports/image.png"
import { PRODUCTS, CATEGORIES } from "@/data/products"
import ProductCard from "@/components/ProductCard"
import type { Page } from "@/App"
import Reveal from "@/components/Reveal"

type Props = {
  navigate: (page: Page, pid?: string) => void
  wishlist: Set<string>
  onWishlist: (id: string) => void
  onAddToCart: () => void
}

function OrnamentalDivider() {
  return (
    <div className="flex items-center justify-center gap-4">
      <div className="flex-1 h-px bg-gold/30" />
      <svg width="14" height="14" viewBox="0 0 22 22" fill="none">
        <polygon points="11,2 20,11 11,20 2,11" stroke="#B89A5A" strokeWidth="1" fill="none" />
      </svg>
      <div className="flex-1 h-px bg-gold/30" />
    </div>
  )
}

const TESTIMONIALS = [
  {
    name: "Arjun Mehta",
    city: "Mumbai",
    review: "I wore the Jodhpuri Bandhgala at my brother's wedding and have not stopped receiving compliments. The tailoring was impeccable. Paak Pehnawa understands Indian menswear.",
    rating: 5,
  },
  {
    name: "Karan Malhotra",
    city: "Delhi",
    review: "The Lucknowi Chikankari Kurta is everything I hoped it would be. The embroidery quality is exceptional, clearly done by hand.",
    rating: 5,
  },
  {
    name: "Rohan Sharma",
    city: "Bengaluru",
    review: "Every single guest asked me where I got my Sherwani. The set arrived exactly as photographed, beautifully packaged. Truly premium.",
    rating: 5,
  },
]

const TRUST_PILLARS = [
  { icon: 'M12 2L2 7l10 5 10-5-10-5z M2 17l10 5 10-5 M2 12l10 5 10-5', title: "MADE IN INDIA" },
  { icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', title: "ASSURED QUALITY" },
  { icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z', title: "CRAFTED WITH PURPOSE" },
  { icon: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2 M9 7a4 4 0 100-8 4 4 0 000 8z M23 21v-2a4 4 0 00-3-3.87 M16 3.13a4 4 0 010 7.75', title: "EMPOWERING WEAVERS" },
]

const INSTA_IMAGES = [
  PRODUCTS[0].imgHover,
  PRODUCTS[1].imgHover,
  PRODUCTS[2].imgHover,
  PRODUCTS[3].imgHover,
  PRODUCTS[4].imgHover,
  PRODUCTS[5].imgHover,
]

const SIGNATURES = [
  { name: 'THE CLASSIC', img: CATEGORIES[0].img },
  { name: 'THE MODERN', img: CATEGORIES[1].img },
  { name: 'THE ROYAL', img: CATEGORIES[2].img },
  { name: 'THE MINIMALIST', img: CATEGORIES[3].img },
];

export default function HomePage({ navigate, wishlist, onWishlist, onAddToCart }: Props) {
    const [heroIndex, setHeroIndex] = useState(0);
  const HERO_IMAGES = ["/images/goof.png", "/images/goo7.png", "/images/goo8.png"];

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex(prev => (prev + 1) % HERO_IMAGES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const featured = PRODUCTS.slice(0, 4)

  return (
    <main>
      {/* ── HERO ── */}
      <section 
        className="relative w-full bg-sand cursor-pointer overflow-hidden group" 
        onClick={() => navigate("plp")}
        style={{ aspectRatio: "2.33/1", minHeight: "300px" }}
      >
        {HERO_IMAGES.map((src, i) => (
          <img
            key={src}
            src={src}
            alt="Premium Indian menswear fashion campaign"
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${i === heroIndex ? "opacity-100" : "opacity-0"}`}
          />
        ))}
        {/* Logo overlay on the left */}
        <div className="absolute inset-y-0 left-[3%] md:left-[5%] flex items-center justify-start w-[180px] sm:w-[220px] md:w-[280px] lg:w-[320px] z-10 pointer-events-none">
          <img src="/images/hero-logo.png" alt="Paak Pehnawa" className="w-full h-auto object-contain drop-shadow-2xl opacity-100" />
        </div>
      </section>


      
      {/* ── SOCIAL REELS SLIDER ── */}
      <section className="py-16 md:py-24 bg-brown border-b border-sand overflow-hidden">
        <Reveal>
        <div className="w-full">
          <div className="px-6 mb-10 text-center">
             <p className="text-[10px] tracking-[0.3em] text-gold font-sans font-semibold mb-3">EXPERIENCE THE CRAFT</p>
             <h2 className="font-display font-black text-ivory" style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", letterSpacing: "-0.02em" }}>
               @paakpehnawa
             </h2>
          </div>
          <div className="flex overflow-x-auto gap-4 px-6 pb-8 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {["DGrVefOtvXn","DdORVQrgf35","DdL4UCGgiIR","DdG714nAn8E","DdGxfzVpBT8","DdEKJueA_wk","DdBfbD-AmBo","Dc_IIo7AMaP","Dc71u2wtNU7","DcnQmgjpmju"].map(id => (
               <div key={id} className="snap-center shrink-0 w-[280px] sm:w-[320px] bg-charcoal/20 flex items-center justify-center rounded-sm overflow-hidden" style={{ height: "540px" }}>
                 <iframe 
                   src={`https://www.instagram.com/p/${id}/embed/?autoplay=1&muted=1&hidecaption=1`}
                   style={{ width: "320px", height: "580px", marginTop: "-55px", marginBottom: "-55px", scale: "1.1" }}
                   frameBorder="0" 
                   scrolling="no" 
                   allowTransparency={true}
                   allow="autoplay; encrypted-media"
                   loading="lazy"
                   className="pointer-events-none"
                 ></iframe>
               </div>
            ))}
          </div>
        </div>
        </Reveal>
      </section>

      {/* ── WHAT'S YOUR <span className="font-signature font-normal text-gold" style={{ fontSize: "1.5em", marginLeft: "4px" }}>Signature</span>? (CHARCOAL) ── */}
      <section className="py-24 md:py-32 bg-brown">
        <Reveal>
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display font-black text-ivory mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}>
              WHAT'S YOUR <span className="font-signature font-normal text-gold" style={{ fontSize: "1.5em", marginLeft: "4px" }}>Signature</span>?
            </h2>
            <p className="text-ivory/60 font-sans">Find the look that defines you.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {SIGNATURES.map((sig) => (
              <button key={sig.name} onClick={() => navigate("plp")} className="group relative overflow-hidden bg-ivory" style={{ aspectRatio: "4/5" }}>
                <img src={sig.img} alt={sig.name} className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-ivory text-[15px] tracking-[0.2em] font-display font-bold border border-ivory/30 bg-brown/40 backdrop-blur-sm px-6 py-4 group-hover:bg-brown/80 transition-all">
                    {sig.name}
                  </h3>
                </div>
              </button>
            ))}
          </div>
        </div>
        </Reveal>
      </section>

      {/* ── BRAND STORY (IVORY) ── */}
      <section className="py-24 md:py-36 bg-ivory">
        <Reveal>
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative order-2 md:order-1">
              <img src={PRODUCTS[4].img} alt="Indian heritage" className="w-full object-cover" style={{ aspectRatio: "4/5" }} />
              <div className="absolute -bottom-6 -right-6 w-full h-full border border-gold/30 -z-10 hidden md:block" />
            </div>
            <div className="order-1 md:order-2">
              <p className="text-[10px] tracking-[0.3em] text-gold font-sans font-semibold mb-6">THE PAAK PEHNAWA PHILOSOPHY</p>
              <h2 className="font-display font-light text-charcoal leading-[1.1] mb-8" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", letterSpacing: "-0.02em" }}>
                TRADITION WAS <br/>NEVER MEANT TO <br/><strong className="font-black">BE FORGOTTEN.</strong>
              </h2>
              <p className="text-charcoal/60 text-base font-sans leading-relaxed mb-10">
                From generations-old craftsmanship to contemporary silhouettes, Paak Pehnawa brings the richness of Indian tradition into the modern wardrobe.
              </p>
              <button className="text-[11px] tracking-[0.2em] font-sans font-semibold text-charcoal border-b border-charcoal pb-1 hover:text-gold hover:border-gold transition-colors rounded-sm">
                DISCOVER OUR STORY
              </button>
              </div>
            </div>
        </div>
          </Reveal>
      </section>

      {/* ── SHOP BY CATEGORY (BENTO) ── */}
      <section className="py-20 md:py-28 bg-sand border-y border-charcoal/10">
        <Reveal>
        <div className="w-full px-1 sm:px-2">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 px-2 sm:px-4">
            <div>
              <p className="text-[10px] tracking-[0.3em] text-charcoal/60 font-sans font-semibold mb-3 uppercase">Find Your Signature</p>
              <h2 className="font-display font-light text-charcoal leading-tight" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", letterSpacing: "-0.02em" }}>
                TRADITIONAL SILHOUETTES,<br/>REIMAGINED.
              </h2>
            </div>
            <button onClick={() => navigate("plp")} className="text-[11px] tracking-[0.2em] font-sans font-semibold text-charcoal border-b border-charcoal pb-1 hover:text-gold hover:border-gold transition-colors rounded-sm uppercase">
              VIEW ALL CATEGORIES
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1 auto-rows-[250px] md:auto-rows-[350px]">
            {CATEGORIES.map((cat, i) => {
              let classes = "col-span-1 row-span-1";
              if (i === 0) classes = "col-span-2 row-span-2";
              else if (i === 5) classes = "col-span-2 row-span-1";
              
              return (
                <button key={cat.name} onClick={() => navigate("plp")} className={`group relative overflow-hidden bg-brown text-left ${classes}`}>
                  <img src={cat.img} alt={cat.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-85 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brown/90 via-brown/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <h3 className="text-ivory text-[13px] md:text-[15px] tracking-[0.15em] font-sans font-semibold mb-2">{cat.name}</h3>
                    <div className="w-6 h-px bg-gold transition-all duration-300 group-hover:w-12 mb-3" />
                    <p className="text-ivory/70 text-[11px] md:text-[12px] font-sans opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">{cat.tagline}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
        </Reveal>
      </section>

      {/* ── NEW ARRIVALS (IVORY) ── */}
      <section className="py-20 md:py-28 bg-ivory">
        <Reveal>
        <div className="w-full px-1 sm:px-2">
          <div className="text-center mb-12">
            <h2 className="font-sans text-[15px] tracking-[0.25em] text-charcoal uppercase">
              NEW ARRIVALS
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-1 gap-y-10">
            {PRODUCTS.slice(0, 4).map((p) => (
              <ProductCard key={p.id} product={p} navigate={navigate} wishlist={wishlist} onWishlist={onWishlist} onAddToCart={onAddToCart} />
            ))}
          </div>
          <div className="text-center mt-12">
            <button onClick={() => navigate("plp")} className="bg-brown text-ivory text-[10px] tracking-[0.2em] font-sans font-semibold px-12 py-3.5 hover:bg-gold transition-colors rounded-sm uppercase">
              VIEW ALL
            </button>
          </div>
        </div>
        </Reveal>
      </section>

      {/* ── EDITORIAL CAMPAIGN (IMAGE/CHARCOAL) ── */}
      <section className="relative w-full overflow-hidden bg-brown">
        <img src="/images/hero-2.png" alt="Editorial Campaign" className="w-full h-auto block opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-r from-brown/90 via-brown/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 py-4">
          <Reveal>
          <div className="max-w-[1400px] w-full mx-auto">
            <div className="max-w-xl">
              <h2 className="font-display font-black text-ivory mb-2 sm:mb-6" style={{ fontSize: "clamp(1.2rem, 4vw, 5rem)", letterSpacing: "-0.02em" }}>
                DRESS LIKE YOUR <br/><span className="text-gold italic font-light">ROOTS MATTER.</span>
              </h2>
              <p className="text-ivory/80 font-sans text-[10px] sm:text-lg mb-4 sm:mb-10 hidden sm:block">
                Crafted with character. Worn with pride.
              </p>
              <button onClick={() => navigate("plp")} className="bg-gold text-charcoal text-[9px] sm:text-[11px] tracking-[0.2em] font-sans font-semibold px-4 sm:px-10 py-2 sm:py-4 hover:bg-ivory transition-colors rounded-sm">
                DISCOVER THE COLLECTION
              </button>
            </div>
          </div>
        </Reveal>
        </div>
      </section>

      {/* ── BEST SELLERS (IVORY) ── */}
      <section className="py-20 md:py-28 bg-ivory border-t border-sand">
        <Reveal>
        <div className="w-full px-1 sm:px-2">
          <div className="text-center mb-12">
            <h2 className="font-sans text-[15px] tracking-[0.25em] text-charcoal uppercase">
              BEST SELLERS
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-1 gap-y-10">
            {PRODUCTS.slice(4, 8).map((p) => (
              <ProductCard key={p.id} product={p} navigate={navigate} wishlist={wishlist} onWishlist={onWishlist} onAddToCart={onAddToCart} />
            ))}
          </div>
          <div className="text-center mt-12">
            <button onClick={() => navigate("plp")} className="bg-brown text-ivory text-[10px] tracking-[0.2em] font-sans font-semibold px-12 py-3.5 hover:bg-gold transition-colors rounded-sm uppercase">
              VIEW ALL
            </button>
          </div>
        </div>
        </Reveal>
      </section>

      {/* ── OCCASION DISCOVERY (SAND) ── */}
      <section className="py-24 md:py-32 bg-sand">
        <Reveal>
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display font-black text-charcoal mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}>
              DRESS FOR THE MOMENT
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { name: 'WEDDING', desc: 'Make your entrance unforgettable.', img: PRODUCTS[6].imgHover },
              { name: 'RECEPTION', desc: 'Commanding evening elegance.', img: PRODUCTS[7].imgHover },
              { name: 'SANGEET', desc: 'Fluid silhouettes for movement.', img: PRODUCTS[3].imgHover },
              { name: 'FESTIVE', desc: 'Timeless grace for traditions.', img: PRODUCTS[8].imgHover },
            ].map((occ) => (
              <button key={occ.name} onClick={() => navigate("plp")} className="group text-left">
                <div className="overflow-hidden bg-brown mb-5" style={{ aspectRatio: "3/4" }}>
                  <img src={occ.img} alt={occ.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" />
                </div>
                <h3 className="text-[13px] tracking-[0.15em] font-sans font-semibold text-charcoal mb-2">{occ.name}</h3>
                <p className="text-charcoal/60 text-sm font-sans">{occ.desc}</p>
              </button>
            ))}
          </div>
        </div>
        </Reveal>
      </section>

      {/* ── WHY PAAK PEHNAWA (IVORY) ── */}
      <section className="py-24 md:py-32 bg-ivory border-t border-sand">
        <Reveal>
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
            {TRUST_PILLARS.map((p) => (
              <div key={p.title} className="text-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#171717" strokeWidth="1" className="mx-auto mb-6">
                  <path d={p.icon} />
                </svg>
                <h3 className="text-[11px] tracking-[0.15em] font-sans font-semibold text-charcoal mb-3">{p.title}</h3>
                <div className="w-8 h-px bg-gold/50 mx-auto" />
              </div>
            ))}
          </div>
        </div>
        </Reveal>
      </section>

      {/* ── CUSTOMER STORIES (CHARCOAL) ── */}
      <section className="py-24 md:py-32 bg-brown">
        <Reveal>
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <h2 className="font-display font-black text-ivory mb-16" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}>
            WORN WITH PRIDE.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="p-10 border border-ivory/20 text-left bg-brown/50">
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <svg key={j} width="14" height="14" viewBox="0 0 24 24" fill="#B89A5A">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="text-ivory/80 text-[15px] font-sans leading-relaxed mb-8 italic">"{t.review}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-ivory text-[11px] tracking-widest font-sans font-semibold">{t.name.toUpperCase()}</p>
                    <p className="text-ivory/40 text-[10px] tracking-wide font-sans mt-1">{t.city}</p>
                  </div>
                  <span className="text-[9px] tracking-[0.15em] text-gold font-sans border border-gold/30 px-3 py-1">VERIFIED</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        </Reveal>
      </section>

      
    </main>
  )
}
