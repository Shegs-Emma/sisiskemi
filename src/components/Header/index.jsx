import Navbar from '@/components/Navbar/index';
import Announcement from './Announcement';
import '@/index.css';

const Header = () => {
  return (
    <div>
      <Announcement />
      <div className='sticky top-0 z-50'>
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
