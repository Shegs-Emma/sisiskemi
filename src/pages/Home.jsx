import React from 'react';
import Navbar from '../components/Navbar';
import HeroSlider from '../components/HeroSlider';
import Categories from '../components/Categories';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import BottomProd from '../components/BottomProd';
import Footer from '../components/Footer';


const Home = () => {
  return (
    <div>
        <Navbar />
        <HeroSlider />
        <Categories />
        <Products />
        <Newsletter />
        <BottomProd />
        <Footer />
    </div>
  )
}

export default Home