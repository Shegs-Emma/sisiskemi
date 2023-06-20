import React, { useState } from 'react';
import { styled } from 'styled-components';
import LogoImg from '../../assets/images/logo.svg';
import { BsPerson } from 'react-icons/bs';
import { IoSearchOutline } from 'react-icons/io5';
import { MdClose } from 'react-icons/md';
import {
  AccountCircleOutlined,
  ExpandMoreOutlined,
  LocalMallOutlined,
  Search,
  SearchOutlined,
} from '@mui/icons-material';
import { GiHamburgerMenu } from 'react-icons/gi';
// import { NavLink } from 'react-router-dom';
import { Nav, StyledNavLink } from './Navbar.styled';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const linkClick = [
    { page: 'NEWIN', href: '/NewIn' },
    { page: 'SHOP', href: '/Shop' },
    { page: 'SALE', href: '/Sale' },
    { page: 'RTW', href: '/Rtw' },
    { page: 'COLLECTION', href: '/collection' },
    { page: 'BRIDAL', href: '/Bridal' },
    // {page: "RTW", href: "/Rtw"},
  ];

  const html = document.querySelector('html');
  html.addEventListener('click', (e) => setIsNavOpen(false));

  return (
    <>
      <Nav state={isNavOpen ? 1 : 0}>
        <div className='brand'>
          <img src={LogoImg} alt='' />
        </div>
        <div className='toggle'>
          {isNavOpen ? (
            <MdClose onClick={() => setIsNavOpen(false)} />
          ) : (
            <GiHamburgerMenu
              onClick={(e) => {
                e.stopPropagation();
                setIsNavOpen(true);
              }}
            />
          )}
        </div>

        <div className={`links ${isNavOpen ? 'show' : ''}`}>
          <ul>
            {linkClick.map((link) => (
              <StyledNavLink
                activeclassname='active'
                key={link.page}
                to={link.href}
              >
                {link.page}
              </StyledNavLink>
            ))}
          </ul>
        </div>
        <div className={`account-info ${isNavOpen ? 'show' : ''}`}>
          <div className='account'>
            <StyledNavLink to='/Login'>
              <span>
                <AccountCircleOutlined />
              </span>
            </StyledNavLink>

            <div className='account'>
              <span>
                <SearchOutlined />
              </span>
            </div>

            <StyledNavLink to='/Cart'>
              <div className='search'>
                <LocalMallOutlined />
              </div>
            </StyledNavLink>
          </div>
        </div>
      </Nav>
    </>
  );
};

export default Navbar;
