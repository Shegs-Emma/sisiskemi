import { useLocation } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';
import { useState, useEffect } from 'react';

const Layout = ({ children }) => {
  const [showFooter, setShowFooter] = useState(true);
  const [isMobile, setIsMobile] = useState(true);
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    if (
      path ===
      ('/cart/checkout' ||
        '/cart/checkout/shipping' ||
        '/cart/checkout/shipping/payment')
    ) {
      setShowFooter(false);
    }
  }, [path]);

  // Checks whether to show Header or not
  useEffect(() => {
    const handleResize = () => {
      if (
        path ===
        ('/cart/checkout' ||
          '/cart/checkout/shipping' ||
          '/cart/checkout/shipping/payment')
      ) {
        // Adjust the breakpoint value according to your needs
        setIsMobile(window.innerWidth < 768);
      }
    };

    // Set initial mobile state and add event listener
    handleResize();
    window.addEventListener('resize', handleResize);

    // Clean up the event listener
    return () => window.removeEventListener('resize', handleResize);
  }, [path]);

  return (
    <div>
      {/* <ScrollToTop /> */}
      <div>
        {isMobile && <Header />}
        <div>
          <main>{children}</main>
        </div>
        {showFooter && <Footer />}
      </div>
    </div>
  );
};

export default Layout;
