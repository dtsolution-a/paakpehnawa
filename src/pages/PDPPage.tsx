import { useState } from 'react';
import { PRODUCTS } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import type { Page } from '@/App';

type Props = {
  navigate: (page: Page, pid?: string) => void;
  productId: string;
  wishlist: Set<string>;
  onWishlist: (id: string) => void;
  onAddToCart: () => void;
};

const ACCORDION_ITEMS = [
  { id: 'desc', label: 'DESCRIPTION' },
  { id: 'fabric', label: 'FABRIC & MATERIAL' },
  { id: 'care', label: 'CARE INSTRUCTIONS' },
  { id: 'shipping', label: 'SHIPPING & RETURNS' },
];

const GALLERY_EXTRAS = [
  'https://images.unsplash.com/photo-1781106699853-db5cad3a5dbd?w=1000&h=1300&fit=crop',
  'https://images.unsplash.com/photo-1781106785641-ae55a05ad4fe?w=1000&h=1300&fit=crop',
  'https://images.unsplash.com/photo-1783188223126-69e5d0b56f39?w=1000&h=1300&fit=crop',
];

export default function PDPPage({ navigate, productId, wishlist, onWishlist, onAddToCart }: Props) {
  const product = PRODUCTS.find(p => p.id === productId) || PRODUCTS[0];
  const related = PRODUCTS.filter(p => p.id !== product.id).slice(0, 4);

  const [selectedImg, setSelectedImg] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors[0].name);
  const [selectedSize, setSelectedSize] = useState('');
  const [qty, setQty] = useState(1);
  const [openAccordion, setOpenAccordion] = useState<string>('desc');
  const [added, setAdded] = useState(false);
  const [sizeError, setSizeError] = useState(false);

  // Combine real images with extras to fulfill "Front, Back, Side, Detail..."
  const allImages = [product.img, product.imgHover, ...GALLERY_EXTRAS].map(img => img.replace('w=600&h=800', 'w=1000&h=1300'));
  
  const disc = Math.round(((product.mrp - product.price) / product.mrp) * 100);
  const wished = wishlist.has(product.id);

  const handleAddToCart = () => {
    if (!selectedSize) { setSizeError(true); return; }
    setSizeError(false);
    onAddToCart();
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const accordionContent: Record<string, string> = {
    desc: product.desc,
    fabric: product.fabric,
    care: product.care,
    shipping: product.shipping,
  };

  return (
    <main className="bg-ivory pb-20">
      <div className="max-w-[1400px] mx-auto px-6 py-6 border-b border-sand hidden md:block">
        <div className="flex items-center gap-2 text-[10px] tracking-[0.2em] font-sans text-charcoal/50">
          <button onClick={() => navigate('home')} className="hover:text-gold transition-colors rounded-sm">HOME</button>
          <span>/</span>
          <button onClick={() => navigate('plp')} className="hover:text-gold transition-colors rounded-sm">SHOP</button>
          <span>/</span>
          <button onClick={() => navigate('plp')} className="hover:text-gold transition-colors rounded-sm">{product.category.toUpperCase()}</button>
          <span>/</span>
          <span className="text-charcoal font-medium">{product.name.toUpperCase()}</span>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 py-8 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-24">
          
          {/* ── Image Gallery ── */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            <div className="flex md:flex-col gap-3 md:w-24 overflow-x-auto md:overflow-visible">
              {allImages.slice(0, 5).map((src, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImg(i)}
                  className={`flex-shrink-0 w-20 md:w-full transition-all overflow-hidden relative ${
                    selectedImg === i ? 'opacity-100' : 'opacity-50 hover:opacity-100'
                  }`}
                  style={{ aspectRatio: '3/4' }}
                >
                  <img src={src} alt={`${product.name} view ${i + 1}`} className="w-full h-full object-cover" />
                  {selectedImg === i && <div className="absolute inset-0 border border-charcoal pointer-events-none" />}
                </button>
              ))}
            </div>

            <div className="flex-1 bg-sand relative overflow-hidden group" style={{ aspectRatio: '3/4' }}>
              <img
                src={allImages[selectedImg]}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 cursor-zoom-in"
              />
              
              {selectedImg > 0 && (
                <button onClick={(e) => { e.stopPropagation(); setSelectedImg(i => i - 1); }} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-ivory/90 flex items-center justify-center hover:bg-ivory transition-colors rounded-sm">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#171717" strokeWidth="1.5"><polyline points="15 18 9 12 15 6"/></svg>
                </button>
              )}
              {selectedImg < allImages.length - 1 && (
                <button onClick={(e) => { e.stopPropagation(); setSelectedImg(i => i + 1); }} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-ivory/90 flex items-center justify-center hover:bg-ivory transition-colors rounded-sm">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#171717" strokeWidth="1.5"><polyline points="9 18 15 12 9 6"/></svg>
                </button>
              )}
            </div>
          </div>

          {/* ── Product Info ── */}
          <div className="flex flex-col py-4">
            <h1 className="font-display font-light text-charcoal leading-tight mb-4" style={{ fontSize: 'clamp(2rem, 3vw, 2.5rem)', letterSpacing: '-0.02em' }}>
              {product.name}
            </h1>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={i < Math.floor(product.rating) ? '#171717' : 'none'} stroke="#171717" strokeWidth="1">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                ))}
              </div>
              <span className="text-xs font-sans text-charcoal/60 underline decoration-sand underline-offset-4 cursor-pointer">{product.reviews} REVIEWS</span>
            </div>

            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-2xl font-sans font-semibold text-charcoal">₹{product.price.toLocaleString('en-IN')}</span>
              <span className="text-base text-charcoal/40 line-through font-sans">₹{product.mrp.toLocaleString('en-IN')}</span>
              <span className="text-xs tracking-widest text-gold font-sans font-bold">{disc}% OFF</span>
            </div>

            <p className="text-charcoal/70 text-sm font-sans leading-relaxed mb-10 italic">
              "Crafted for celebrations. Designed to stay timeless."
            </p>

            {/* Color */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <p className="text-[10px] tracking-[0.2em] font-sans font-semibold text-charcoal">COLOR:</p>
                <p className="text-[10px] tracking-widest font-sans text-charcoal/60">{selectedColor.toUpperCase()}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                {product.colors.map((c) => (
                  <button
                    key={c.name}
                    title={c.name}
                    onClick={() => setSelectedColor(c.name)}
                    className={`w-10 h-10 transition-all ${
                      selectedColor === c.name ? 'ring-1 ring-charcoal ring-offset-2 ring-offset-ivory' : 'hover:ring-1 hover:ring-sand hover:ring-offset-1'
                    }`}
                    style={{ backgroundColor: c.hex, border: c.hex === '#F7F3EC' || c.hex === '#FFFFFF' ? '1px solid #D8CBB8' : 'none' }}
                  />
                ))}
              </div>
            </div>

            {/* Size */}
            <div className="mb-10">
              <div className="flex items-center justify-between mb-4">
                <p className={`text-[10px] tracking-[0.2em] font-sans font-semibold ${sizeError ? 'text-maroon' : 'text-charcoal'}`}>
                  SIZE {sizeError && <span className="text-maroon ml-2 normal-case italic font-normal tracking-normal">— Please select a size</span>}
                </p>
                <button className="text-[10px] tracking-widest font-sans text-charcoal/60 hover:text-charcoal border-b border-charcoal/30 pb-0.5 transition-colors rounded-sm">
                  SIZE GUIDE
                </button>
              </div>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((sz) => (
                  <button
                    key={sz}
                    onClick={() => { setSelectedSize(sz); setSizeError(false); }}
                    className={`w-14 h-12 flex items-center justify-center text-[13px] font-sans transition-all ${
                      selectedSize === sz
                        ? 'bg-brown text-ivory border border-charcoal'
                        : 'bg-transparent text-charcoal border border-charcoal/20 hover:border-charcoal'
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <div className="flex items-center border border-charcoal/20 w-fit h-14">
                <button onClick={() => setQty(q => Math.max(1, q - 1))} className="w-12 h-full flex items-center justify-center text-charcoal hover:bg-sand transition-colors rounded-sm">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="5" y1="12" x2="19" y2="12"/></svg>
                </button>
                <span className="w-10 text-center font-sans font-semibold text-[13px] text-charcoal">{qty}</span>
                <button onClick={() => setQty(q => q + 1)} className="w-12 h-full flex items-center justify-center text-charcoal hover:bg-sand transition-colors rounded-sm">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className={`flex-1 h-14 text-[11px] tracking-[0.2em] font-sans font-semibold transition-all ${
                  added ? 'bg-gold text-charcoal' : 'bg-brown text-ivory hover:bg-brown/90'
                }`}
              >
                {added ? 'ADDED TO CART' : 'ADD TO CART'}
              </button>

              <button
                onClick={() => onWishlist(product.id)}
                className={`w-14 h-14 border flex items-center justify-center flex-shrink-0 transition-all ${
                  wished ? 'border-charcoal bg-sand text-charcoal' : 'border-charcoal/20 hover:border-charcoal text-charcoal'
                }`}
                aria-label="Wishlist"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill={wished ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.5">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
                </svg>
              </button>
            </div>

            {/* Trust */}
            <div className="grid grid-cols-2 gap-4 py-6 border-y border-sand mb-8">
              {[
                { icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z', label: 'MADE IN INDIA' },
                { icon: 'M22 11.08V12a10 10 0 11-5.93-9.14 M22 4L12 14.01l-3-3', label: 'QUALITY CHECKED' },
                { icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z M12 8v4 M12 16h.01', label: 'SECURE PAYMENTS' },
                { icon: 'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z', label: 'EASY RETURNS' },
              ].map((b) => (
                <div key={b.label} className="flex items-center gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#171717" strokeWidth="1.2">
                    <path d={b.icon} />
                  </svg>
                  <span className="text-[10px] tracking-widest font-sans font-semibold text-charcoal/60">{b.label}</span>
                </div>
              ))}
            </div>

            {/* Accordions */}
            <div className="space-y-0">
              {ACCORDION_ITEMS.map((item) => (
                <div key={item.id} className="border-b border-sand">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === item.id ? '' : item.id)}
                    className="w-full flex items-center justify-between py-5 text-[11px] tracking-[0.15em] font-sans font-semibold text-charcoal hover:text-gold transition-colors rounded-sm"
                  >
                    {item.label}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={`transition-transform duration-300 ${openAccordion === item.id ? 'rotate-180' : ''}`}>
                      <polyline points="6 9 12 15 18 9"/>
                    </svg>
                  </button>
                  {openAccordion === item.id && (
                    <div className="pb-6 text-charcoal/70 text-[14px] font-sans leading-relaxed">
                      {accordionContent[item.id]}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Complete the Look ── */}
      <section className="bg-sand py-24 mt-12">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-[10px] tracking-[0.3em] text-charcoal/60 font-sans font-semibold mb-3">CURATIONS</p>
              <h2 className="font-display font-light text-charcoal" style={{ fontSize: 'clamp(2rem, 3vw, 2.5rem)', letterSpacing: '-0.02em' }}>
                COMPLETE THE LOOK
              </h2>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Dupatta', sub: 'Woven in Banaras', img: 'https://images.unsplash.com/photo-1781106699853-db5cad3a5dbd?w=600&h=800&fit=crop' },
              { label: 'Mojari', sub: 'Handcrafted footwear', img: 'https://images.unsplash.com/photo-1783188223126-69e5d0b56f39?w=600&h=800&fit=crop' },
              { label: 'Stole', sub: 'Kashmiri pashmina', img: 'https://images.unsplash.com/photo-1785612515427-ca9180ea2bbc?w=600&h=800&fit=crop' },
              { label: 'Jacket', sub: 'Reversible bandhgala', img: 'https://images.unsplash.com/photo-1661492814674-f7917394884f?w=600&h=800&fit=crop' },
            ].map((item) => (
              <button key={item.label} onClick={() => navigate('plp')} className="text-left group cursor-pointer block">
                <div className="overflow-hidden bg-brown mb-4" style={{ aspectRatio: '3/4' }}>
                  <img src={item.img} alt={item.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
                </div>
                <h3 className="text-[12px] tracking-[0.1em] font-sans font-semibold text-charcoal group-hover:text-gold transition-colors rounded-sm">{item.label.toUpperCase()}</h3>
                <p className="text-[13px] text-charcoal/60 font-sans mt-1">{item.sub}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Products ── */}
      <section className="bg-ivory py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-[10px] tracking-[0.3em] text-charcoal/60 font-sans font-semibold mb-3">DISCOVER</p>
              <h2 className="font-display font-light text-charcoal" style={{ fontSize: 'clamp(2rem, 3vw, 2.5rem)', letterSpacing: '-0.02em' }}>
                YOU MAY ALSO LIKE
              </h2>
            </div>
            <button onClick={() => navigate('plp')} className="text-[11px] tracking-widest font-sans font-semibold text-charcoal border-b border-charcoal pb-0.5 hover:text-gold hover:border-gold transition-colors hidden sm:block">
              VIEW ALL
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} navigate={navigate} wishlist={wishlist} onWishlist={onWishlist} onAddToCart={onAddToCart} />
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 inset-x-0 z-40 bg-ivory border-t border-sand flex lg:hidden">
        <button
          onClick={handleAddToCart}
          className="flex-1 h-[60px] bg-brown text-ivory text-[11px] tracking-[0.2em] font-sans font-semibold hover:bg-gold hover:text-charcoal transition-colors rounded-sm"
        >
          {added ? 'ADDED TO CART' : 'ADD TO CART'}
        </button>
      </div>
    </main>
  );
}
