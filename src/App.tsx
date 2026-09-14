import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PLPPage from './pages/PLPPage';
import PDPPage from './pages/PDPPage';

export type Page = 'home' | 'plp' | 'pdp';

export default function App() {
  const [page, setPage] = useState<Page>('home');
  const [productId, setProductId] = useState('1');
  const [cartCount, setCartCount] = useState(0);
  const [wishlist, setWishlist] = useState<Set<string>>(new Set());

  const navigate = (to: Page, pid?: string) => {
    setPage(to);
    if (pid) setProductId(pid);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const onWishlist = (id: string) => {
    setWishlist(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const onAddToCart = () => setCartCount(c => c + 1);

  const ctx = { navigate, wishlist, onWishlist, onAddToCart };

  return (
    <div className="min-h-screen bg-ivory font-sans">
      <Header navigate={navigate} cartCount={cartCount} wishlist={wishlist} />
      {page === 'home' && <HomePage {...ctx} />}
      {page === 'plp' && <PLPPage {...ctx} />}
      {page === 'pdp' && <PDPPage {...ctx} productId={productId} />}
      <Footer navigate={navigate} />
    </div>
  );
}
