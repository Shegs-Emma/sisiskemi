import DesktopNavbar from './DesktopNavbar';
import MediumNavbar from './MediumNavbar';
import MobileNavbar from './MobileNavbar';

const Navbar = () => {
  return (
    <div>
      <div className='sm:hidden'>
        <MobileNavbar />
      </div>
      <div className='hidden sm:block lg:hidden'>
        <MediumNavbar />
      </div>
      <div className='hidden lg:block'>
        <DesktopNavbar />
      </div>
    </div>
  );
};

export default Navbar;
