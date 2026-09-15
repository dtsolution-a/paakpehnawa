import fs from 'fs';

// -------------------------------------------------------------
// 1. Add Pincode Validator to PDPPage.tsx
// -------------------------------------------------------------
let pdpContent = fs.readFileSync('src/pages/PDPPage.tsx', 'utf8');

// Add states
if (!pdpContent.includes('const [pincode,')) {
  pdpContent = pdpContent.replace(
    /const \[sizeError, setSizeError\] = useState\(false\);/,
    `const [sizeError, setSizeError] = useState(false);
  const [pincode, setPincode] = useState('');
  const [deliveryInfo, setDeliveryInfo] = useState<{city: string, days: number} | null>(null);
  const [pincodeError, setPincodeError] = useState(false);

  const checkPincode = () => {
    if (pincode.length !== 6 || isNaN(Number(pincode))) {
      setPincodeError(true);
      setDeliveryInfo(null);
      return;
    }
    setPincodeError(false);
    const cities = ['Mumbai', 'Delhi', 'Bengaluru', 'Hyderabad', 'Ahmedabad', 'Chennai', 'Kolkata', 'Surat', 'Pune', 'Jaipur'];
    const city = cities[parseInt(pincode) % cities.length];
    const days = (parseInt(pincode) % 4) + 2; // 2 to 5 days
    setDeliveryInfo({ city, days });
  };`
  );

  // Add UI before Trust section
  const pincodeUI = `
            {/* ── Pincode Validator ── */}
            <div className="mb-10">
              <div className="flex items-center justify-between mb-4">
                <p className="text-[10px] tracking-[0.2em] font-sans font-semibold text-charcoal">CHECK DELIVERY & SERVICES</p>
              </div>
              <div className="flex">
                <input 
                  type="text" 
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  placeholder="Enter Pincode" 
                  className="flex-1 h-14 border border-charcoal/20 px-4 text-[13px] font-sans focus:outline-none focus:border-charcoal bg-transparent"
                  maxLength={6}
                />
                <button 
                  onClick={checkPincode}
                  className="h-14 px-8 bg-charcoal text-ivory text-[10px] tracking-widest font-sans font-semibold hover:bg-gold hover:text-charcoal transition-colors"
                >
                  CHECK
                </button>
              </div>
              {pincodeError && <p className="text-[11px] text-maroon font-sans mt-2">Please enter a valid 6-digit pincode.</p>}
              {deliveryInfo && (
                <div className="mt-4 p-4 border border-gold/30 bg-gold/5 flex items-start gap-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B89A5A" strokeWidth="1.5" className="mt-0.5 shrink-0">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <div>
                    <p className="text-[13px] font-sans font-medium text-charcoal mb-1">
                      Delivery to {deliveryInfo.city} available.
                    </p>
                    <p className="text-[12px] font-sans text-charcoal/70">
                      Expect delivery in <span className="font-semibold text-charcoal">{deliveryInfo.days} - {deliveryInfo.days + 2} days</span>. Pay on delivery might be available.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Trust */}`;
  
  pdpContent = pdpContent.replace(`{/* Trust */}`, pincodeUI);
  fs.writeFileSync('src/pages/PDPPage.tsx', pdpContent);
  console.log('✅ PDPPage.tsx updated with Pincode Validator');
}

// -------------------------------------------------------------
// 2. Add Offers Section to HomePage.tsx
// -------------------------------------------------------------
let homeContent = fs.readFileSync('src/pages/HomePage.tsx', 'utf8');

if (!homeContent.includes('EXCLUSIVE OFFERS')) {
  const offersSection = `
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
`;

  // Insert it after the Hero section
  homeContent = homeContent.replace(
    `      {/* ── SOCIAL REELS SLIDER ── */}`,
    offersSection + `\n      {/* ── SOCIAL REELS SLIDER ── */}`
  );
  fs.writeFileSync('src/pages/HomePage.tsx', homeContent);
  console.log('✅ HomePage.tsx updated with Offers section');
}
