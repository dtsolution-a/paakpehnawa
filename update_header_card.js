import fs from 'fs';

// 1. Header — rotating announcement bar
let header = fs.readFileSync('src/components/Header.tsx', 'utf8');

// Add useState/useEffect if not there
if (!header.includes('annIdx')) {
  header = header.replace(
    `const [scrolled, setScrolled] = useState(false);`,
    `const [scrolled, setScrolled] = useState(false);
  const [annIdx, setAnnIdx] = useState(0);
  const ANN_MESSAGES = [
    "FREE SHIPPING ON ORDERS ABOVE ₹1,999",
    "NEW WEDDING COLLECTION IS LIVE — SHOP NOW",
    "HANDCRAFTED IN INDIA · DELIVERED TO YOUR DOOR",
  ];
  useEffect(() => {
    const t = setInterval(() => setAnnIdx(p => (p + 1) % 3), 4000);
    return () => clearInterval(t);
  }, []);`
  );

  header = header.replace(
    `THE NEW STANDARD OF INDIAN MENSWEAR`,
    `{ANN_MESSAGES[annIdx]}`
  );
}

fs.writeFileSync('src/components/Header.tsx', header);
console.log('✅ Header updated with rotating announcement bar');

// 2. ProductCard — scarcity badges
let card = fs.readFileSync('src/components/ProductCard.tsx', 'utf8');

const SCARCITY = ['Only 3 Left', 'Selling Fast', 'Limited Edition'];

// Add scarcity logic after the discount function
card = card.replace(
  `function discount(price: number, mrp: number) {
  return Math.round(((mrp - price) / mrp) * 100)
}`,
  `function discount(price: number, mrp: number) {
  return Math.round(((mrp - price) / mrp) * 100)
}
const SCARCITY = ['Only 3 Left', 'Selling Fast', 'Limited Edition'];`
);

// Replace the badge element to show scarcity as a second badge
card = card.replace(
  `        <div className="absolute top-3 left-3 z-10">
          <span className="text-[10px] tracking-wide font-sans px-2.5 py-1 bg-brown/40 backdrop-blur-md text-ivory/90 rounded-sm">
            {disc > 0 ? \`\${disc}% Off\` : product.badge}
          </span>
        </div>`,
  `        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
          {disc > 0 && (
            <span className="text-[10px] tracking-wide font-sans px-2.5 py-1 bg-brown/40 backdrop-blur-md text-ivory/90 rounded-sm block">
              SAVE ₹{(product.mrp - product.price).toLocaleString('en-IN')}
            </span>
          )}
          <span className="text-[9px] tracking-wide font-sans px-2.5 py-1 bg-gold/80 backdrop-blur-md text-charcoal font-semibold rounded-sm block">
            {SCARCITY[parseInt(product.id) % 3]}
          </span>
        </div>`
);

fs.writeFileSync('src/components/ProductCard.tsx', card);
console.log('✅ ProductCard updated with scarcity badges');
