import { useState } from 'react';
import type { Product } from '@/data/products';
import type { Page } from '@/App';

type Props = {
  product: Product;
  navigate: (page: Page, pid?: string) => void;
  wishlist: Set<string>;
  onWishlist: (id: string) => void;
  onAddToCart: () => void;
};

function discount(price: number, mrp: number) {
  return Math.round(((mrp - price) / mrp) * 100);
}

export default function ProductCard({ product, navigate, wishlist, onWishlist, onAddToCart }: Props) {
  const [hovered, setHovered] = useState(false);
  const wished = wishlist.has(product.id);
  const disc = discount(product.price, product.mrp);

  return (
    <div
      className="group relative cursor-pointer flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => navigate('pdp', product.id)}
    >
      <div className="relative overflow-hidden bg-sand mb-4" style={{ aspectRatio: '2/3' }}>
        <img
          src={product.img}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${hovered ? 'opacity-0' : 'opacity-100'}`}
        />
        <img
          src={product.imgHover}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${hovered ? 'opacity-100' : 'opacity-0'}`}
        />

        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
          {disc > 0 && (
            <span className="text-[10px] tracking-wide font-sans px-2.5 py-1 bg-brown/40 backdrop-blur-md text-ivory/90 rounded-sm block">
              SAVE ₹{(product.mrp - product.price).toLocaleString('en-IN')}
            </span>
          )}
          <span className="text-[9px] tracking-wide font-sans px-2.5 py-1 bg-gold/80 backdrop-blur-md text-charcoal font-semibold rounded-sm block">
            {SCARCITY[parseInt(product.id) % 3]}
          </span>
        </div>

        <button
          onClick={(e) => { e.stopPropagation(); onWishlist(product.id); }}
          className={`absolute top-3 right-3 w-8 h-8 flex items-center justify-center transition-all duration-300 z-10 ${
            hovered || wished ? 'opacity-100' : 'opacity-0'
          }`}
          aria-label="Wishlist"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill={wished ? '#F7F3EC' : 'none'} stroke="#F7F3EC" strokeWidth="1.5">
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
          </svg>
        </button>

        <div className={`absolute bottom-0 inset-x-0 transition-transform duration-500 z-10 ${hovered ? 'translate-y-0' : 'translate-y-full'}`}>
          <button
            onClick={(e) => { e.stopPropagation(); onAddToCart(); }}
            className="w-full bg-ivory/95 backdrop-blur-sm text-charcoal text-[10px] tracking-[0.2em] font-sans font-semibold py-3.5 hover:bg-gold transition-colors"
          >
            QUICK ADD
          </button>
        </div>
      </div>

      <div className="text-center px-2 pb-2">
        <h3 className="text-[11px] tracking-widest font-sans font-medium text-charcoal leading-snug mb-1.5 uppercase group-hover:text-gold transition-colors">
          {product.name}
        </h3>
        <div className="flex justify-center items-baseline gap-2">
          {product.mrp > product.price && (
            <span className="text-[11px] text-charcoal/40 line-through font-sans">RS. {product.mrp.toLocaleString('en-IN')}</span>
          )}
          <span className="text-[11px] font-sans text-charcoal">FROM RS. {product.price.toLocaleString('en-IN')}</span>
        </div>
      </div>
    </div>
  );
}
