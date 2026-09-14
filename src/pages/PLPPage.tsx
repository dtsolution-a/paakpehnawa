import { useState } from 'react';
import { PRODUCTS } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import type { Page } from '@/App';

type Props = {
  navigate: (page: Page, pid?: string) => void;
  wishlist: Set<string>;
  onWishlist: (id: string) => void;
  onAddToCart: () => void;
};

const SORT_OPTIONS = ['Featured', 'Newest', 'Price: Low to High', 'Price: High to Low', 'Best Selling'];

const FILTERS = {
  Category: ['Kurtas', 'Indo-Western', 'Jodhpuri', 'Sherwani', 'Premium Sherwani', 'Lucknowi', 'Readymade', 'Embroidery'],
  Size: ['38', '40', '42', '44', '46', '48'],
  Color: ['Ivory', 'Maroon', 'Navy Blue', 'Black', 'Forest Green', 'Saffron'],
  Price: ['Under ₹1,000', '₹1,000–₹3,000', '₹3,000–₹6,000', 'Above ₹6,000'],
  Availability: ['In Stock', 'Pre-Order'],
  Collection: ['Wedding', 'Festive', 'Celebration', 'Signature', 'New Arrivals'],
};

export default function PLPPage({ navigate, wishlist, onWishlist, onAddToCart }: Props) {
  const [sort, setSort] = useState('Featured');
  const [openFilter, setOpenFilter] = useState<string | null>('Category');
  const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>({});
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleFilter = (group: string, value: string) => {
    setActiveFilters(prev => {
      const current = prev[group] || [];
      const updated = current.includes(value)
        ? current.filter(v => v !== value)
        : [...current, value];
      return { ...prev, [group]: updated };
    });
  };

  const activeCount = Object.values(activeFilters).flat().length;

  return (
    <main className="bg-ivory min-h-screen">
      <div className="bg-ivory border-b border-sand">
        <div className="max-w-[1400px] mx-auto px-6 py-16 md:py-24 text-center">
          <div className="flex items-center justify-center gap-2 text-[10px] tracking-[0.2em] font-sans text-charcoal/50 mb-8">
            <button onClick={() => navigate('home')} className="hover:text-gold transition-colors rounded-sm">HOME</button>
            <span>/</span>
            <span className="text-charcoal/80">SHOP</span>
            <span>/</span>
            <span className="text-charcoal font-semibold">KURTAS</span>
          </div>
          <h1 className="font-display font-light text-charcoal mb-6" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.02em' }}>
            KURTAS
          </h1>
          <p className="text-charcoal/60 font-sans text-base max-w-lg mx-auto italic">
            Timeless Indian silhouettes, crafted for modern celebrations.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 py-12">
        <div className="flex items-center justify-between gap-4 mb-10 pb-6 border-b border-sand">
          <div className="flex items-center gap-6">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="flex items-center gap-2 text-[11px] tracking-[0.2em] font-sans font-semibold text-charcoal hover:text-gold transition-colors rounded-sm"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="4" y1="6" x2="20" y2="6"/><line x1="8" y1="12" x2="20" y2="12"/><line x1="12" y1="18" x2="20" y2="18"/>
              </svg>
              FILTER {activeCount > 0 && <span className="bg-gold text-charcoal text-[9px] w-4 h-4 rounded-full flex items-center justify-center">{activeCount}</span>}
            </button>
            {activeCount > 0 && (
              <button
                onClick={() => setActiveFilters({})}
                className="text-[10px] tracking-widest font-sans text-charcoal/40 hover:text-charcoal transition-colors border-b border-transparent hover:border-charcoal pb-0.5"
              >
                CLEAR ALL
              </button>
            )}
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[10px] tracking-[0.2em] font-sans text-charcoal/50 hidden sm:block">SORT</span>
            <select
              value={sort}
              onChange={e => setSort(e.target.value)}
              className="bg-transparent text-[11px] tracking-widest font-sans text-charcoal py-1 outline-none cursor-pointer border-b border-charcoal/20 hover:border-gold transition-colors rounded-sm"
            >
              {SORT_OPTIONS.map(o => <option key={o}>{o}</option>)}
            </select>
          </div>
        </div>

        <div className="flex gap-12 lg:gap-16">
          <aside className={`flex-shrink-0 w-64 transition-all duration-500 ${sidebarOpen ? 'block' : 'hidden'}`}>
            <div className="sticky top-28">
              {Object.entries(FILTERS).map(([group, options]) => (
                <div key={group} className="border-b border-sand py-5">
                  <button
                    onClick={() => setOpenFilter(openFilter === group ? null : group)}
                    className="w-full flex items-center justify-between text-[11px] tracking-[0.15em] font-sans font-semibold text-charcoal hover:text-gold transition-colors rounded-sm"
                  >
                    {group.toUpperCase()}
                    <svg
                      width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                      className={`transition-transform duration-300 ${openFilter === group ? 'rotate-180' : ''}`}
                    >
                      <polyline points="6 9 12 15 18 9"/>
                    </svg>
                  </button>
                  {openFilter === group && (
                    <div className="pt-5 space-y-3">
                      {options.map((opt) => {
                        const checked = (activeFilters[group] || []).includes(opt);
                        return (
                          <label key={opt} className="flex items-center gap-3 cursor-pointer group">
                            <div
                              onClick={() => toggleFilter(group, opt)}
                              className={`w-4 h-4 flex-shrink-0 flex items-center justify-center transition-all cursor-pointer ${
                                checked ? 'bg-brown' : 'border border-charcoal/30 group-hover:border-gold'
                              }`}
                            >
                              {checked && (
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#F7F3EC" strokeWidth="2">
                                  <polyline points="20 6 9 17 4 12"/>
                                </svg>
                              )}
                            </div>
                            <span
                              onClick={() => toggleFilter(group, opt)}
                              className={`text-[13px] font-sans cursor-pointer ${checked ? 'text-charcoal font-medium' : 'text-charcoal/60 hover:text-charcoal'}`}
                            >
                              {opt}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </aside>

          <div className="flex-1 min-w-0">
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
              {PRODUCTS.map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  navigate={navigate}
                  wishlist={wishlist}
                  onWishlist={onWishlist}
                  onAddToCart={onAddToCart}
                />
              ))}
            </div>

            <div className="text-center mt-20 border-t border-sand pt-12">
              <p className="text-[10px] tracking-widest text-charcoal/40 font-sans mb-6">SHOWING {PRODUCTS.length} OF {PRODUCTS.length} PRODUCTS</p>
              <div className="w-full max-w-xs h-px bg-sand mx-auto relative mb-12">
                <div className="absolute left-0 top-0 h-full bg-brown w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
