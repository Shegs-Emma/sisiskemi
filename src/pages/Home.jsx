import HeroSlider from '../components/HeroSlider';
import Categories from '../components/Categories';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import BottomProd from '../components/BottomProd';

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <Categories />
      <Products />
      <Newsletter />
      <BottomProd />
    </div>
  );
};

export default Home;
