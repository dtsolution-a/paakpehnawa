const urls = [
  'https://kunthelabel.com/products/bijli-black-bead-embroidered-kurta-set',
  'https://kunthelabel.com/products/kajal-black-bead-embroidered-kurta-set',
  'https://kunthelabel.com/products/rakt-red-bead-embroidered-kurta-set',
  'https://kunthelabel.com/products/gajraj-navy-bead-embroidered-kurta-set',
  'https://kunthelabel.com/products/gulbahar-pink-bead-embroidered-kurta-set',
  'https://kunthelabel.com/products/grey-golden-weave-kurta-set',
  'https://kunthelabel.com/products/neel-pushp-bead-embroidered-kurta-set',
  'https://kunthelabel.com/products/ice-blue-golden-weave-kurta-set',
  'https://kunthelabel.com/products/light-mehendi-golden-weave-kurta-set',
  'https://kunthelabel.com/products/purple-velvet-brasso-lycra-kurta-patiyala-set',
  'https://kunthelabel.com/products/coral-azure-printed-kurta-jacket-set',
  'https://kunthelabel.com/products/tussar-silk-celebration-kurta-jacket-set',
  'https://kunthelabel.com/products/regal-tussar-silk-kurta-jacket-set',
  'https://kunthelabel.com/products/peach-ghicha-print-kurta-jacket-set'
];

async function run() {
  for (const url of urls) {
    try {
      const res = await fetch(url);
      const text = await res.text();
      const match = text.match(/<meta property="og:image"\s+content="([^"]+)"/);
      console.log(match ? match[1] : 'not found', '---', url.split('/').pop());
    } catch(e) {
      console.log('error', url);
    }
  }
}
run();
