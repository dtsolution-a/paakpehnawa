import logo from '@/imports/image.png';
import type { Page } from '@/App';

type Props = { navigate: (page: Page) => void };

export default function Footer({ navigate }: Props) {
  return (
    <footer className="bg-brown text-ivory">
      {/* Newsletter */}
      <div className="border-b border-ivory/10">
        <div className="max-w-[1400px] mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-lg text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-display font-light text-ivory mb-4">JOIN THE LEGACY.</h3>
            <p className="text-ivory/60 text-[15px] font-sans leading-relaxed">
              Be the first to discover new collections, occasion edits and stories from Paak Pehnawa.
            </p>
          </div>
          <div className="flex w-full md:w-[480px]">
            <input
              type="email"
              placeholder="ENTER YOUR EMAIL"
              className="flex-1 bg-transparent border-b border-ivory/30 px-0 py-4 text-[11px] tracking-[0.2em] font-sans text-ivory placeholder-ivory/40 outline-none focus:border-gold transition-colors min-w-0"
            />
            <button className="text-gold border-b border-ivory/30 hover:border-gold px-6 py-4 text-[11px] tracking-[0.2em] font-sans font-semibold transition-colors whitespace-nowrap">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12 gap-x-8">
          
          {/* Brand */}
          <div className="col-span-2 md:col-span-2 md:pr-12">
            <img src={logo} alt="Paak Pehnawa" className="h-10 w-auto mb-8 brightness-0 invert opacity-90" />
            <p className="text-ivory/60 text-sm font-sans italic mb-10 max-w-xs">
              "Tradition, tailored for today."
            </p>
            <div className="flex gap-6">
              {['Instagram', 'Facebook', 'WhatsApp'].map((s) => (
                <button key={s} className="text-[11px] tracking-widest font-sans font-semibold text-ivory/50 hover:text-gold transition-colors uppercase">
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <p className="text-[10px] tracking-[0.2em] font-sans font-semibold text-gold mb-8">SHOP</p>
            <div className="space-y-4">
              {['Kurtas', 'Indo-Western', 'Jodhpuri', 'Sherwani', 'Premium Sherwani', 'Lucknowi', 'Ready Made'].map((item) => (
                <button key={item} onClick={() => navigate('plp')} className="block text-ivory/60 hover:text-ivory text-[13px] font-sans transition-colors text-left">
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* About */}
          <div>
            <p className="text-[10px] tracking-[0.2em] font-sans font-semibold text-gold mb-8">ABOUT</p>
            <div className="space-y-4">
              {['Our Story', 'Craftsmanship', 'Contact Us'].map((item) => (
                <button key={item} className="block text-ivory/60 hover:text-ivory text-[13px] font-sans transition-colors text-left">
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Help */}
          <div>
            <p className="text-[10px] tracking-[0.2em] font-sans font-semibold text-gold mb-8">HELP</p>
            <div className="space-y-4">
              {['Shipping', 'Returns', 'Cancellation Policy', 'Size Guide', 'FAQs'].map((item) => (
                <button key={item} className="block text-ivory/60 hover:text-ivory text-[13px] font-sans transition-colors text-left">
                  {item}
                </button>
              ))}
            </div>
          </div>
          
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-ivory/10">
        <div className="max-w-[1400px] mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-ivory/30 text-[10px] tracking-[0.15em] font-sans">
            © 2026 PAAK PEHNAWA. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-ivory/30 text-[10px] tracking-widest font-sans hover:text-ivory transition-colors cursor-pointer">PRIVACY</span>
            <span className="text-ivory/30 text-[10px] tracking-widest font-sans hover:text-ivory transition-colors cursor-pointer">TERMS</span>
            <span className="text-ivory/30 text-[10px] tracking-widest font-sans hover:text-ivory transition-colors cursor-pointer">WEAR THE LEGACY</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
