import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Bridal from './pages/Bridal';
import Checkout from './pages/Checkout';
import Sale from './components/Sale';
import Rtw from './pages/Rtw';
import Product from './components/Product';
import Shop from './pages/Shop';
import NewIn from './pages/Bridal';
import Register from './pages/Register';
import Login from './pages/Login';
import Collection from './pages/Collection';
import Cart from './pages/Cart';
import Layout from './components/Layout';
import PageNotFound from './pages/PageNotFound';
import Shipping from './pages/Shipping';
import Payment from './pages/Payment';
import PageLoader from '@/components/Loader/PageLoader';
import { Suspense } from 'react';

function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/bridal' element={<Bridal />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/cart/checkout' element={<Checkout />} />
            <Route path='/cart/checkout/shipping' element={<Shipping />} />
            <Route
              path='/cart/checkout/shipping/payment'
              element={<Payment />}
            />
            <Route path='/collections' element={<Collection />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/newin' element={<NewIn />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/product' element={<Product />} />
            <Route path='/rtw' element={<Rtw />} />
            <Route path='/sale' element={<Sale />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;
