import { useLocation } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';
import { useState, useEffect } from 'react';
import ScrollToTop from './ScrollToTop';

const Layout = ({ children }) => {
  const [showLayoutComponents, setShowLayoutComponents] = useState(true);
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    if (
      path ===
      ('/cart/checkout' ||
        '/cart/checkout/shipping' ||
        '/cart/checkout/shipping/payment')
    ) {
      setShowLayoutComponents(false);
    }
  }, [path]);

  return (
    <div>
      <ScrollToTop />
      <div>
        <div className={`${!showLayoutComponents && 'md:hidden'}`}>
          <Header />
        </div>
        <div>
          <main>{children}</main>
        </div>
        {showLayoutComponents && <Footer />}
      </div>
    </div>
  );
};

export default Layout;
