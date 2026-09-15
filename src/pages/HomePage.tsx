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
  { name: "Arjun Mehta", city: "Mumbai", review: "Wore the Jodhpuri Bandhgala at my brother's wedding in Udaipur. Every single guest asked where I got it. The tailoring is impeccable — felt tailor-made for me.", rating: 5 },
  { name: "Karan Malhotra", city: "Delhi", review: "The Lucknowi Chikankari Kurta is extraordinary. You can feel the hand-embroidery the moment you hold it. Arrived in two days, packaged like a luxury gift.", rating: 5 },
  { name: "Rohan Sharma", city: "Bengaluru", review: "Ordered the Sherwani set for my cousin's reception. Photographs beautifully — every photo looks editorial. Already planning my next order.", rating: 5 },
  { name: "Vikram Nair", city: "Kochi", review: "The fabric quality at this price is unbeatable. Wore the kurta set to a sangeet in Jaipur — stood out from everyone wearing the usual boring options.", rating: 5 },
  { name: "Sahil Bhatia", city: "Chandigarh", review: "Sizing was perfect on the first try using their size guide. Delivered in pristine condition with detailed care instructions. True premium experience.", rating: 5 },
  { name: "Dev Anand", city: "Pune", review: "The Indo-Western jacket is exactly what I'd been searching for — traditional enough for family events, modern enough for a corporate dinner. Brilliant piece.", rating: 5 },
  { name: "Aditya Kapoor", city: "Jaipur", review: "Bought the festive kurta set. My father-in-law asked where I shopped — coming from him, that's the highest compliment. Absolutely worth every rupee.", rating: 5 },
  { name: "Nikhil Sinha", city: "Hyderabad", review: "Third order now and every single time, the craftsmanship exceeds expectations. Paak Pehnawa is the only brand I trust for weddings.", rating: 5 },
  { name: "Aarav Gupta", city: "Ahmedabad", review: "The packaging alone tells you this brand cares. But the kurta itself is even better — extremely comfortable for long wedding functions. Highly recommended.", rating: 5 },
]

const TRUST_PILLARS = [
  { icon: 'M12 2L2 7l10 5 10-5-10-5z M2 17l10 5 10-5 M2 12l10 5 10-5', title: "MADE IN INDIA", desc: "Handwoven in Varanasi & Jaipur by master artisans" },
  { icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', title: "ASSURED QUALITY", desc: "Every piece quality-checked before dispatch" },
  { icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z', title: "CRAFTED WITH PURPOSE", desc: "Supporting 500+ weaver families across India" },
  { icon: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2 M9 7a4 4 0 100-8 4 4 0 000 8z M23 21v-2a4 4 0 00-3-3.87 M16 3.13a4 4 0 010 7.75', title: "EMPOWERING WEAVERS", desc: "Proceeds directly fund artisan livelihoods" },
]

const SIGNATURES = [
  { name: 'THE CLASSIC', img: CATEGORIES[0].img },
  { name: 'THE MODERN', img: CATEGORIES[1].img },
  { name: 'THE ROYAL', img: CATEGORIES[2].img },
  { name: 'THE MINIMALIST', img: CATEGORIES[3].img },
]


export default function HomePage({ navigate, wishlist, onWishlist, onAddToCart }: Props) {
  const [heroIndex, setHeroIndex] = useState(0)
  const HERO_IMAGES = ["/images/goof.png", "/images/goo7.png", "/images/goo8.png"]

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex(prev => (prev + 1) % HERO_IMAGES.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const featured = PRODUCTS.slice(0, 4)

  return (
    <main>
      {/* ── HERO ── */}
      <section
        className="relative w-full bg-sand overflow-hidden"
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

        {/* Dark gradient on right for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-l from-brown/85 via-brown/30 to-transparent" />

        {/* Logo overlay — left */}
        <div className="absolute inset-y-0 left-[3%] md:left-[5%] flex items-center justify-start w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] z-10 pointer-events-none">
          <img src="/images/hero-logo.png" alt="Paak Pehnawa" className="w-full h-auto object-contain drop-shadow-2xl opacity-100" />
        </div>

        {/* CTA — right side above the fold */}
        <div className="absolute inset-y-0 right-[5%] md:right-[8%] flex flex-col items-end justify-center z-10 text-right max-w-[40%]">
          <p className="text-[9px] sm:text-[11px] tracking-[0.3em] text-gold font-sans font-semibold mb-2 sm:mb-3 hidden sm:block">WEAR THE LEGACY</p>
          <h1 className="font-display font-black text-ivory mb-2 sm:mb-6 leading-none" style={{ fontSize: "clamp(1rem, 3.5vw, 3.5rem)", letterSpacing: "-0.02em" }}>
            INDIA'S FINEST<br/>MENSWEAR.
          </h1>
          <p className="text-ivory/70 font-sans mb-4 sm:mb-8 hidden md:block" style={{ fontSize: "clamp(0.6rem, 1vw, 1rem)" }}>
            Heritage craftsmanship.<br />Contemporary silhouettes.
          </p>
          <button
            onClick={() => navigate("plp")}
            className="bg-gold text-charcoal font-sans font-bold tracking-[0.15em] hover:bg-ivory transition-colors"
            style={{ fontSize: "clamp(0.55rem, 1vw, 0.75rem)", padding: "clamp(8px, 1.2vw, 16px) clamp(14px, 2.5vw, 40px)" }}
          >
            SHOP THE COLLECTION
          </button>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {HERO_IMAGES.map((_, i) => (
            <button key={i} onClick={() => setHeroIndex(i)} className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === heroIndex ? "bg-gold scale-125" : "bg-ivory/40"}`} />
          ))}
        </div>
      </section>


      {/* ── EXCLUSIVE OFFERS ── */}
      <section className="py-12 md:py-20 bg-ivory border-b border-sand">
        <Reveal>
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="font-sans text-[15px] tracking-[0.25em] text-charcoal uppercase">
              EXCLUSIVE OFFERS
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "GET 15% OFF", desc: "On your first premium menswear purchase.", code: "WELCOME15" },
              { title: "FREE SHIPPING", desc: "On all prepaid orders above ₹1,999 across India.", code: "AUTO-APPLIED" },
              { title: "FESTIVE COMBO", desc: "Buy any Sherwani and get a free matching Mojari.", code: "FESTIVEGIFT" }
            ].map((offer, idx) => (
              <div key={idx} className="border border-gold/30 bg-sand/30 p-6 flex flex-col items-center text-center relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gold/10 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-500" />
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center mb-4">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#B89A5A" strokeWidth="1.5">
                    <path d="M21.5 12C21.5 17.2467 17.2467 21.5 12 21.5C6.75329 21.5 2.5 17.2467 2.5 12C2.5 6.75329 6.75329 2.5 12 2.5C17.2467 2.5 21.5 6.75329 21.5 12Z" />
                    <path d="M15.5 9.5L8.5 15.5" />
                    <path d="M9.5 9.5C9.5 9.77614 9.27614 10 9 10C8.72386 10 8.5 9.77614 8.5 9.5C8.5 9.22386 8.72386 9 9 9C9.27614 9 9.5 9.22386 9.5 9.5Z" />
                    <path d="M15.5 15.5C15.5 15.7761 15.2761 16 15 16C14.7239 16 14.5 15.7761 14.5 15.5C14.5 15.2239 14.7239 15 15 15C15.2761 15 15.5 15.2239 15.5 15.5Z" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-charcoal text-[18px] mb-2">{offer.title}</h3>
                <p className="text-charcoal/70 text-[12px] font-sans mb-5 flex-1">{offer.desc}</p>
                <div className="w-full border border-dashed border-charcoal/30 bg-ivory py-2.5">
                  <span className="text-[11px] tracking-widest font-sans font-bold text-charcoal">CODE: {offer.code}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        </Reveal>
      </section>

      {/* ── SOCIAL REELS SLIDER ── */}
      <section className="py-16 md:py-24 bg-brown overflow-hidden">
        <Reveal>
        <div className="w-full">
          <div className="px-6 mb-10 text-center">
            <p className="text-[10px] tracking-[0.3em] text-gold font-sans font-semibold mb-3">AS SEEN ON INSTAGRAM</p>
            <h2 className="font-display font-black text-ivory" style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", letterSpacing: "-0.02em" }}>
              @paakpehnawa
            </h2>
          </div>
          <div
            className="flex overflow-x-auto gap-3 px-6 pb-6 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {["122","123","124","125","126","127","128","129","130","131"].map(vid => (
              <div key={vid} className="snap-center shrink-0 flex flex-col items-center gap-3">
                <div
                  className="rounded-sm overflow-hidden bg-charcoal/20 relative group"
                  style={{ width: "240px", height: "420px" }}
                >
                  <video
                    src={`/videos/${vid}.mp4`}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    style={{ display: "block" }}
                  />
                  {/* Play icon overlay — disappears on hover */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => navigate("plp")}
                  className="text-[10px] tracking-[0.15em] font-sans font-semibold text-gold border border-gold/40 px-5 py-2 hover:bg-gold hover:text-charcoal transition-all rounded-sm uppercase"
                >
                  Shop This Look →
                </button>
              </div>
            ))}
          </div>
        </div>
        </Reveal>
      </section>

      {/* ── WHAT'S YOUR SIGNATURE? ── */}
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
                <img src={sig.img} alt={sig.name} className="absolute inset-0 w-full h-full object-cover opacity-80 transition-all duration-700 group-hover:opacity-100 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-brown/80 via-transparent to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-end pb-8">
                  <h3 className="text-ivory text-[15px] tracking-[0.2em] font-display font-bold mb-3">{sig.name}</h3>
                  <span className="text-[10px] tracking-[0.15em] font-sans text-gold border border-gold/50 px-4 py-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">SHOP LOOK →</span>
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
              <button className="bg-charcoal text-ivory text-[11px] tracking-[0.2em] font-sans font-semibold px-10 py-4 hover:bg-gold transition-colors rounded-sm">
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
              let classes = "col-span-1 row-span-1"
              if (i === 0) classes = "col-span-2 row-span-2"
              else if (i === 5) classes = "col-span-2 row-span-1"
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
              )
            })}
          </div>
        </div>
        </Reveal>
      </section>

      {/* ── NEW ARRIVALS ── */}
      <section className="py-20 md:py-28 bg-ivory">
        <Reveal>
        <div className="w-full px-1 sm:px-2">
          <div className="text-center mb-12">
            <h2 className="font-sans text-[15px] tracking-[0.25em] text-charcoal uppercase">NEW ARRIVALS</h2>
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

      {/* ── EDITORIAL CAMPAIGN ── */}
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

      {/* ── BEST SELLERS ── */}
      <section className="py-20 md:py-28 bg-ivory border-t border-sand">
        <Reveal>
        <div className="w-full px-1 sm:px-2">
          <div className="text-center mb-12">
            <h2 className="font-sans text-[15px] tracking-[0.25em] text-charcoal uppercase">BEST SELLERS</h2>
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

      {/* ── OCCASION DISCOVERY ── */}
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
                <div className="overflow-hidden bg-brown mb-5 relative" style={{ aspectRatio: "3/4" }}>
                  <img src={occ.img} alt={occ.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brown/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                    <span className="text-[10px] tracking-[0.15em] font-sans font-semibold text-ivory border border-ivory/50 px-4 py-2">SHOP {occ.name} LOOKS →</span>
                  </div>
                </div>
                <h3 className="text-[13px] tracking-[0.15em] font-sans font-semibold text-charcoal mb-2">{occ.name}</h3>
                <p className="text-charcoal/60 text-sm font-sans">{occ.desc}</p>
              </button>
            ))}
          </div>
        </div>
        </Reveal>
      </section>

      {/* ── TRUST PILLARS ── */}
      <section className="py-24 md:py-32 bg-ivory border-t border-sand">
        <Reveal>
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
            {TRUST_PILLARS.map((p) => (
              <div key={p.title} className="text-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#B89A5A" strokeWidth="1" className="mx-auto mb-6">
                  <path d={p.icon} />
                </svg>
                <h3 className="text-[11px] tracking-[0.15em] font-sans font-semibold text-charcoal mb-2">{p.title}</h3>
                <div className="w-8 h-px bg-gold/50 mx-auto mb-3" />
                <p className="text-charcoal/50 text-[10px] font-sans leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
        </Reveal>
      </section>

      {/* ── CUSTOMER STORIES ── */}
      <section className="py-24 md:py-32 bg-brown">
        <Reveal>
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <div className="mb-4">
            <div className="flex items-center justify-center gap-1 mb-2">
              {Array.from({ length: 5 }).map((_, j) => (
                <svg key={j} width="16" height="16" viewBox="0 0 24 24" fill="#B89A5A">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
            <p className="text-gold text-[11px] tracking-[0.2em] font-sans font-semibold mb-3">4.9 / 5 &nbsp;·&nbsp; 200+ VERIFIED BUYERS</p>
          </div>
          <h2 className="font-display font-black text-ivory mb-16" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}>
            WORN WITH PRIDE.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="p-8 border border-ivory/10 text-left bg-charcoal/20 rounded-sm">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <svg key={j} width="12" height="12" viewBox="0 0 24 24" fill="#B89A5A">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="text-ivory/80 text-[14px] font-sans leading-relaxed mb-6 italic">"{t.review}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center shrink-0">
                    <span className="text-gold text-[11px] font-sans font-bold">{t.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="text-ivory text-[10px] tracking-widest font-sans font-semibold">{t.name.toUpperCase()}</p>
                    <p className="text-ivory/40 text-[9px] tracking-wide font-sans">{t.city}</p>
                  </div>
                  <span className="ml-auto text-[9px] tracking-[0.15em] text-gold font-sans border border-gold/30 px-2 py-0.5">VERIFIED</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        </Reveal>
      </section>

      {/* ── FLOATING WHATSAPP ── */}
      <a
        href="https://wa.me/919319826085?text=Hi%2C%20I'm%20interested%20in%20your%20collection%20at%20Paak%20Pehnawa."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white pl-3 pr-4 py-3 rounded-full shadow-2xl hover:scale-105 transition-transform"
        aria-label="Order on WhatsApp"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.135.565 4.13 1.544 5.857L.057 23.852c-.073.272.178.52.45.443l6.124-1.604C8.167 23.498 10.041 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.659-.502-5.185-1.378l-.371-.22-3.844 1.007 1.027-3.749-.24-.386C2.535 15.78 2 13.963 2 12 2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
        </svg>
        <span className="text-[11px] font-semibold tracking-wide hidden sm:block">Order on WhatsApp</span>
      </a>

    </main>
  )
}
