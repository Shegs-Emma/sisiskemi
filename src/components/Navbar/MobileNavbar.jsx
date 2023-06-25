import { FiMenu } from 'react-icons/fi';
import { BiSearch } from 'react-icons/bi';
import { GrCart } from 'react-icons/gr';
import { AiOutlineClose } from 'react-icons/ai';
import Logo from '@/assets/images/logo.svg';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Links = [
  { link: 'newin', label: 'new in' },
  { link: 'shop', label: 'shop' },
  { link: 'sale', label: 'sale' },
  { link: 'rtw', label: 'rtw' },
  { link: 'collections', label: 'collections' },
  { link: 'bridal', label: 'bridal' },
];

const MobileNavbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className='relative'>
      <div className='flex justify-between items-center px-4 py-2  bg-[#FAFAFA] border-b border-[#E0E0E0] sticky top-0'>
        {/* Hamburger */}
        <button className='outline-none' onClick={() => setShowMenu(true)}>
          <FiMenu size={24} />
        </button>
        {/* Logo */}
        <div className='w-[62px] h-[36px]'>
          <img src={Logo} alt='Logo' />
        </div>
        {/* Search and Cart */}
        <div className='flex gap-6 items-center'>
          <button className='outline-0'>
            <BiSearch size={20} />
          </button>
          <button className='outline-0'>
            <GrCart size={20} />
          </button>
        </div>
      </div>

      {/* Menu */}
      {showMenu && (
        <div className='fixed top-0 left-0 py-4 px-[22px] bg-white z-50 w-full min-h-screen'>
          <button
            className='flex justify-end w-full mb-5'
            onClick={() => setShowMenu(false)}
          >
            <AiOutlineClose size={28} />
          </button>
          <div>
            <nav>
              <ul className='flex flex-col gap-8 w-full'>
                {Links.map((item) => (
                  <li key={item.link}>
                    <NavLink
                      className='py-2.5 border-b-[0.8px] border-[#C4C4C4] block uppercase font-medium'
                      to={`/${item.link}`}
                      onClick={() => setShowMenu(false)}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
                <div className='mt-2 flex flex-col gap-6'>
                  <li>
                    <NavLink className='text-white py-3 bg-primary rounded-[4px] block text-center'>
                      My Account
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className='py-3 border border-[#4F4F4F]rounded-[4px] block text-center'>
                      Sign in
                    </NavLink>
                  </li>
                </div>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
