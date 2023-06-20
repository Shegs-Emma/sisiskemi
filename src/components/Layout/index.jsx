import React from 'react';
import Footer from '../Footer';
import Header from '../Header';

const Layout = ({ children }) => {
  return (
    <div>
      {/* <ScrollToTop /> */}
      <div>
        <Header />
        <div>
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
