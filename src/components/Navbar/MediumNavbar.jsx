import Logo from '@/assets/images/logo.svg';
import { NavLink } from 'react-router-dom';
import { BiSearch, BiChevronDown } from 'react-icons/bi';
import { GrCart } from 'react-icons/gr';
import { RxAvatar } from 'react-icons/rx';

const MediumNavbar = () => {
  return (
    <div>
      <div className='flex justify-between items-center  py-4 sm:px-8 md:px-16'>
        {/* Logo */}
        <div className='w-[70px] h-[40px]'>
          <img src={Logo} alt='Logo' />
        </div>
        {/* NavLinks */}
        <nav className='text-sm'>
          <ul className='flex justify-between items-center sm:gap-5 md:gap-8'>
            <li>
              <NavLink>NEW IN</NavLink>
            </li>
            <li>
              <NavLink>SHOP</NavLink>
            </li>
            <li>
              <NavLink>SALE</NavLink>
            </li>
            <li>
              <NavLink>RTW</NavLink>
            </li>
            <li>
              <NavLink>COLLECTIONS</NavLink>
            </li>
            <li>
              <NavLink>BRIDAL</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      {/* User Links */}
      <div className='flex justify-center items-center gap-8'>
        {/* Currency Drop Down */}
        <div className='flex justify-between items-center'>
          <span>NGN N</span>
          <span>
            <BiChevronDown />
          </span>
        </div>
        {/* Profile */}
        <RxAvatar />
        {/* Search */}
        <BiSearch />
        {/* Cart */}
        <GrCart />
      </div>
    </div>
  );
};

export default MediumNavbar;
