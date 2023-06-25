import Logo from '@/assets/images/logo.svg';
import { NavLink } from 'react-router-dom';
import { BiSearch, BiChevronDown } from 'react-icons/bi';
import { GrCart } from 'react-icons/gr';
import { RxAvatar } from 'react-icons/rx';

const Links = ['new in', 'shop', 'sale', 'rtw', 'collections', 'bridal'];

const MediumNavbar = () => {
  return (
    <div className=' bg-[#FAFAFA] border-b border-[#E0E0E0] pb-4'>
      <div className='flex justify-between items-center  py-4 sm:px-8 md:px-16'>
        {/* Logo */}
        <div className='w-[70px] h-[40px]'>
          <img src={Logo} alt='Logo' />
        </div>
        {/* NavLinks */}
        <nav className='text-sm'>
          <ul className='flex justify-between items-center sm:gap-5 md:gap-8'>
            {Links.map((item, index) => (
              <li key={index}>
                <NavLink className='uppercase font-medium'>{item}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {/* User Links */}
      <div className='flex justify-center items-center gap-8'>
        {/* Currency Drop Down */}
        <div className='flex justify-between items-center'>
          <span>NGN N</span>
          <span>
            <BiChevronDown size={18} />
          </span>
        </div>
        {/* Profile */}
        <RxAvatar size={20} />
        {/* Search */}
        <BiSearch size={20} />
        {/* Cart */}
        <GrCart size={20} />
      </div>
    </div>
  );
};

export default MediumNavbar;
