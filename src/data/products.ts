export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  mrp: number;
  badge?: string;
  img: string;
  imgHover: string;
  rating: number;
  reviews: number;
  colors: { name: string; hex: string }[];
  sizes: string[];
  desc: string;
  fabric: string;
  care: string;
  shipping: string;
};

// 13 valid Kun the Label images
const I = [
  'http://kunthelabel.com/cdn/shop/files/DSC09851.jpg?v=1786940227', // 0
  'http://kunthelabel.com/cdn/shop/files/DSC09814.jpg?v=1786940058', // 1
  'http://kunthelabel.com/cdn/shop/files/DSC09771.jpg?v=1786939843', // 2
  'http://kunthelabel.com/cdn/shop/files/DSC03509.jpg?v=1771574788', // 3
  'http://kunthelabel.com/cdn/shop/files/DSC04210.jpg?v=1754898839', // 4
  'http://kunthelabel.com/cdn/shop/files/DSC03734.jpg?v=1771575062', // 5
  'http://kunthelabel.com/cdn/shop/files/DSC04236.jpg?v=1754898838', // 6
  'http://kunthelabel.com/cdn/shop/files/DSC04326.jpg?v=1754898832', // 7
  'http://kunthelabel.com/cdn/shop/files/DSC04797.jpg?v=1754898801', // 8
  'http://kunthelabel.com/cdn/shop/files/DSC04220_ca28772a-fd6e-47a1-859c-f6a15a590043.jpg?v=1771772415', // 9
  'http://kunthelabel.com/cdn/shop/files/DSC04602_2f71a679-9862-43dc-acb3-c8d063da2ad2.jpg?v=1771586734', // 10
  'http://kunthelabel.com/cdn/shop/files/DSC04628.jpg?v=1771586341', // 11
  'http://kunthelabel.com/cdn/shop/files/DSC04965_66094ee8-3241-4338-a142-22d030ffee33.jpg?v=1765522397', // 12
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'BIJLI BLACK BEAD EMBROIDERED KURTA SET',
    category: 'Kurtas',
    price: 9495,
    mrp: 10495,
    badge: '10% Off',
    img: I[0],
    imgHover: I[1],
    rating: 4.8,
    reviews: 124,
    colors: [{ name: 'Black', hex: '#171717' }],
    sizes: ['38', '40', '42', '44', '46'],
    desc: 'Signature bead embroidery on a classic black silhouette.',
    fabric: 'Premium Silk Blend',
    care: 'Dry clean only.',
    shipping: 'Free shipping on all orders.',
  },
  {
    id: '2',
    name: 'KAJAL BLACK BEAD EMBROIDERED KURTA SET',
    category: 'Kurtas',
    price: 9495,
    mrp: 10495,
    badge: 'Sold out',
    img: I[2],
    imgHover: I[3],
    rating: 4.9,
    reviews: 89,
    colors: [{ name: 'Black', hex: '#171717' }],
    sizes: ['38', '40', '42', '44', '46'],
    desc: 'Intricate kajal beadwork tailored for evening celebrations.',
    fabric: 'Premium Silk Blend',
    care: 'Dry clean only.',
    shipping: 'Free shipping on all orders.',
  },
  {
    id: '3',
    name: 'RAKT RED BEAD EMBROIDERED KURTA SET',
    category: 'Kurtas',
    price: 9495,
    mrp: 10995,
    badge: '14% Off',
    img: I[4],
    imgHover: I[5],
    rating: 4.7,
    reviews: 56,
    colors: [{ name: 'Red', hex: '#8B0000' }],
    sizes: ['38', '40', '42', '44', '46'],
    desc: 'Vibrant rakt red with exquisite hand-beaded detailing.',
    fabric: 'Premium Silk Blend',
    care: 'Dry clean only.',
    shipping: 'Free shipping on all orders.',
  },
  {
    id: '4',
    name: 'GAJRAJ NAVY BEAD EMBROIDERED KURTA SET',
    category: 'Kurtas',
    price: 10995,
    mrp: 11995,
    badge: '8% Off',
    img: I[6],
    imgHover: I[7],
    rating: 4.9,
    reviews: 203,
    colors: [{ name: 'Navy', hex: '#000080' }],
    sizes: ['38', '40', '42', '44', '46', '48'],
    desc: 'Deep navy accented with metallic gajraj embroidery.',
    fabric: 'Premium Silk Blend',
    care: 'Dry clean only.',
    shipping: 'Free shipping on all orders.',
  },
  {
    id: '5',
    name: 'GULBAHAR PINK BEAD EMBROIDERED KURTA SET',
    category: 'Kurtas',
    price: 9495,
    mrp: 10495,
    badge: 'Trending',
    img: I[8],
    imgHover: I[9],
    rating: 4.6,
    reviews: 178,
    colors: [{ name: 'Pink', hex: '#FFC0CB' }],
    sizes: ['38', '40', '42', '44', '46'],
    desc: 'Soft pink canvas with detailed bead embroidery.',
    fabric: 'Silk Blend',
    care: 'Dry clean only.',
    shipping: 'Free shipping on all orders.',
  },
  {
    id: '6',
    name: 'GREY GOLDEN WEAVE KURTA SET',
    category: 'Kurtas',
    price: 8495,
    mrp: 9495,
    badge: 'Bestseller',
    img: I[10],
    imgHover: I[11],
    rating: 5.0,
    reviews: 41,
    colors: [{ name: 'Grey', hex: '#808080' }],
    sizes: ['38', '40', '42', '44', '46'],
    desc: 'Subtle grey tones lifted by intricate golden weave.',
    fabric: 'Jacquard Silk',
    care: 'Dry clean only.',
    shipping: 'Free shipping on all orders.',
  },
  {
    id: '7',
    name: 'NEEL PUSHP BEAD EMBROIDERED KURTA SET',
    category: 'Kurtas',
    price: 9495,
    mrp: 10495,
    badge: '10% Off',
    img: I[12],
    imgHover: I[0],
    rating: 4.5,
    reviews: 312,
    colors: [{ name: 'Blue', hex: '#0000FF' }],
    sizes: ['38', '40', '42', '44', '46', '48'],
    desc: 'Deep blue hues with floral bead embroidery.',
    fabric: 'Premium Silk Blend',
    care: 'Dry clean only.',
    shipping: 'Free shipping on all orders.',
  },
  {
    id: '8',
    name: 'ICE BLUE GOLDEN WEAVE KURTA SET',
    category: 'Kurtas',
    price: 8495,
    mrp: 9495,
    badge: 'Few left',
    img: I[1],
    imgHover: I[2],
    rating: 4.9,
    reviews: 28,
    colors: [{ name: 'Ice Blue', hex: '#A5F2F3' }],
    sizes: ['38', '40', '42', '44', '46'],
    desc: 'Cool ice blue enhanced with a signature golden weave.',
    fabric: 'Jacquard Silk',
    care: 'Dry clean only.',
    shipping: 'Free shipping on all orders.',
  },
  {
    id: '9',
    name: 'CORAL AZURE PRINTED KURTA JACKET SET',
    category: 'Indo-Western',
    price: 14495,
    mrp: 16995,
    badge: 'New',
    img: I[3],
    imgHover: I[4],
    rating: 4.9,
    reviews: 28,
    colors: [{ name: 'Coral', hex: '#FF7F50' }],
    sizes: ['38', '40', '42', '44', '46'],
    desc: 'A vibrant coral and azure printed layered set.',
    fabric: 'Silk Blend',
    care: 'Dry clean only.',
    shipping: 'Free shipping on all orders.',
  }
];

export const CATEGORIES = [
  { name: 'KURTAS', tagline: 'Timeless silhouettes', img: I[5] },
  { name: 'INDO-WESTERN', tagline: 'Heritage reinterpreted', img: I[6] },
  { name: 'JODHPURI', tagline: 'Commanding silhouette', img: I[7] },
  { name: 'SHERWANI', tagline: 'Made for memories', img: I[8] },
  { name: 'PREMIUM SHERWANI', tagline: 'The pinnacle of occasion wear', img: I[9] },
  { name: 'LUCKNOWI', tagline: 'Chikankari legacy', img: I[10] },
  { name: 'READYMADE', tagline: 'Festive-ready', img: I[11] },
  { name: 'EMBROIDERY', tagline: 'Crafted stitch by stitch', img: I[12] }
];
