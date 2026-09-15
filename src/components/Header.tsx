import { useState, useEffect } from 'react';
import logo from '@/imports/image.png';
import type { Page } from '@/App';

type Props = {
  navigate: (page: Page, pid?: string) => void;
  cartCount: number;
  wishlist: Set<string>;
};

const SHOP_ITEMS = ['Kurtas', 'Kurta Sets', 'Indo-Western', 'Jodhpuri', 'Sherwani', 'Premium Sherwani'];
const COLLECTION_ITEMS = ['New Arrivals', 'Signature Collection', 'Wedding', 'Festive', 'Celebration', 'Exclusive Edit'];

export default function Header({ navigate, cartCount, wishlist }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [annIdx, setAnnIdx] = useState(0);
  const ANN_MESSAGES = [
    "FREE SHIPPING ON ORDERS ABOVE ₹1,999",
    "NEW WEDDING COLLECTION IS LIVE — SHOP NOW",
    "HANDCRAFTED IN INDIA · DELIVERED TO YOUR DOOR",
  ];
  useEffect(() => {
    const t = setInterval(() => setAnnIdx(p => (p + 1) % 3), 4000);
    return () => clearInterval(t);
  }, []);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <>
      <div className="bg-brown text-ivory text-center py-2 text-[10px] tracking-[0.2em] font-sans">
        {ANN_MESSAGES[annIdx]}
      </div>

      <header
        className={`sticky top-0 z-50 w-full transition-all duration-500 ${
          scrolled ? 'bg-ivory shadow-sm h-[60px]' : 'bg-ivory h-[72px]'
        } flex items-center border-b border-sand`}
        onMouseLeave={() => setOpenMenu(null)}
      >
        <div className="mx-auto max-w-[1400px] px-6 w-full flex items-center justify-between">
          <button
            onClick={() => navigate('home')}
            className="flex-shrink-0 flex items-center"
            aria-label="Paak Pehnawa home"
          >
            <img
              src={logo}
              alt="Paak Pehnawa"
              className="h-10 w-auto object-contain"
            />
          </button>

          <nav className="hidden lg:flex items-center gap-8">
            {(['HOME', 'SHOP', 'KURTAS', 'INDO-WESTERN', 'JODHPURI', 'SHERWANI', 'COLLECTIONS'] as const).map((item) => {
              const hasDrop = item === 'SHOP' || item === 'COLLECTIONS';
              return (
                <div
                  key={item}
                  className="relative group h-[60px] flex items-center"
                  onMouseEnter={() => hasDrop && setOpenMenu(item)}
                >
                  <button
                    onClick={() => {
                      if (item === 'HOME') navigate('home');
                      else navigate('plp');
                      setOpenMenu(null);
                    }}
                    className={`text-[11px] tracking-[0.15em] font-sans transition-colors duration-200 ${
                      openMenu === item
                        ? 'text-gold'
                        : 'text-charcoal hover:text-gold'
                    }`}
                  >
                    {item}
                  </button>

                  {hasDrop && openMenu === item && (
                    <div className="absolute top-[60px] left-1/2 -translate-x-1/2 mt-0 bg-ivory border border-sand shadow-lg w-[400px] z-50 flex animate-fade-up">
                      <div className="p-6 flex-1 border-r border-sand">
                        <p className="text-[9px] tracking-widest text-gold font-display font-bold mb-4">{item}</p>
                        {(item === 'SHOP' ? SHOP_ITEMS : COLLECTION_ITEMS).map((sub) => (
                          <button
                            key={sub}
                            onClick={() => { navigate('plp'); setOpenMenu(null); }}
                            className="block w-full text-left py-2 text-[12px] font-sans text-charcoal hover:text-gold transition-colors"
                          >
                            {sub}
                          </button>
                        ))}
                      </div>
                      <div className="w-[160px] bg-sand relative overflow-hidden">
                        <img 
                          src={item === 'SHOP' ? "https://images.unsplash.com/photo-1781106699855-ce0090fcbf22?w=300&h=400&fit=crop" : "https://images.unsplash.com/photo-1781106785641-ae55a05ad4fe?w=300&h=400&fit=crop"} 
                          alt="Featured" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-5">
            <button onClick={() => setSearchOpen(true)} className="text-charcoal hover:text-gold transition-colors" aria-label="Search">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
            </button>

            <button className="hidden sm:block text-charcoal hover:text-gold transition-colors" aria-label="Account">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </button>

            <button className="hidden sm:block relative text-charcoal hover:text-gold transition-colors" aria-label="Wishlist">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
              {wishlist.size > 0 && <span className="absolute -top-1.5 -right-1.5 bg-gold text-[9px] text-charcoal w-4 h-4 rounded-full flex items-center justify-center font-semibold">{wishlist.size}</span>}
            </button>

            <button className="relative text-charcoal hover:text-gold transition-colors" aria-label="Cart">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
              {cartCount > 0 && <span className="absolute -top-1.5 -right-1.5 bg-brown text-[9px] text-ivory w-4 h-4 rounded-full flex items-center justify-center font-semibold">{cartCount}</span>}
            </button>

            <button className="lg:hidden text-charcoal" onClick={() => setMobileOpen(true)} aria-label="Menu">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
            </button>
          </div>
        </div>
      </header>

      {searchOpen && (
        <div className="fixed inset-0 z-[60] bg-brown/80 flex items-start justify-center pt-32" onClick={() => setSearchOpen(false)}>
          <div className="w-full max-w-2xl mx-4 animate-fade-up" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center bg-ivory border-b border-sand px-6 py-4">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#171717" strokeWidth="1.5" className="flex-shrink-0"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
              <input autoFocus placeholder="Search kurtas, sherwanis, jodhpuri..." className="flex-1 ml-4 bg-transparent outline-none text-charcoal placeholder-charcoal/40 font-sans text-lg" />
              <button onClick={() => setSearchOpen(false)} className="text-charcoal hover:text-gold"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
            </div>
            <div className="bg-ivory px-6 pt-6 pb-8">
              <p className="text-[10px] tracking-widest text-gold font-display font-bold mb-4">SUGGESTED SEARCHES</p>
              <div className="flex flex-wrap gap-2">
                {['Premium Sherwani', 'Wedding Kurta', 'Indo-Western Set', 'Jodhpuri'].map((s) => (
                  <button key={s} onClick={() => { navigate('plp'); setSearchOpen(false); }} className="text-sm font-sans text-charcoal border border-sand px-4 py-2 hover:border-gold hover:text-gold transition-colors">{s}</button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-ivory flex flex-col">
          <div className="flex items-center justify-between px-6 h-[72px] border-b border-sand">
            <img src={logo} alt="Paak Pehnawa" className="h-8 w-auto" />
            <button onClick={() => setMobileOpen(false)}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
          </div>
          <div className="flex-1 overflow-auto py-8 px-6 space-y-4">
            {['HOME', 'KURTAS', 'INDO-WESTERN', 'JODHPURI', 'SHERWANI', 'COLLECTIONS'].map((item) => (
              <button key={item} onClick={() => { navigate(item === 'HOME' ? 'home' : 'plp'); setMobileOpen(false); }} className="block w-full text-left py-2 text-[14px] tracking-[0.15em] font-sans text-charcoal hover:text-gold">{item}</button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
