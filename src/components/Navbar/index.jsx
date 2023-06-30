import DesktopNavbar from './DesktopNavbar';
import MediumNavbar from './MediumNavbar';
import MobileNavbar from './MobileNavbar';

const Navbar = () => {
  return (
    <div>
      <div className='relative sm:hidden'>
        <MobileNavbar />
      </div>
      <div className='relative hidden sm:block lg:hidden'>
        <MediumNavbar />
      </div>
      <div className='relative hidden lg:block'>
        <DesktopNavbar />
      </div>
    </div>
  );
};

export default Navbar;
