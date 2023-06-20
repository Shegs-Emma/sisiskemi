import React, { useState } from 'react';
import { styled } from 'styled-components';
import LogoImg from '../images/logo.svg';
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
import { NavLink } from 'react-router-dom';
import Announcement from './Announcement';

const Nav = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  /* width: 90%; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 5rem;
  z-index: 999;
  background-color: #fff;
  padding: 1rem 1rem;
  box-sizing: border-box;
  .brand {
    img {
      cursor: pointer;
    }
  }
  .toggle {
    display: none;
  }
  .links {
    ul {
      /* display: flex;
            list-style-type: none;
            gap: 3rem;
            li{
                a{
                    text-decoration: none;
                    color: #000;
                    cursor: pointer !important;
                    transition: 1s ease;
                    &:hover{
                        color: #a86728;
                    }
                }
            } */
    }
  }
  .account-info {
    display: flex;

    gap: 2rem;
    .account {
      display: flex;
      gap: 0.5rem;
      cursor: pointer;
    }
    .search {
      cursor: pointer;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    position: relative;
    padding: 1rem 0.5rem;
    z-index: 10;
    margin: 0 1rem;
    .account-info {
      display: none;
    }
    .brand {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
    .toggle {
      padding-right: 1rem;
      display: block;
      z-index: 1;
    }
    .show {
      opacity: 1 !important;
      visibility: visible !important;
    }
    .links {
      position: absolute;
      overflow-x: hidden;
      top: 0;
      right: 0;
      width: ${({ state }) => (state ? '60%' : '0%')};
      height: 100vh;
      background-color: var(--primary-color);
      opacity: 0;
      visibility: hidden;
      transition: 0.4s ease-in-out;
      ul {
        flex-direction: column;
        text-align: center;
        height: 100%;
        justify-content: center;
        li {
          a {
            color: white;
          }
        }
      }
    }
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  transition: 0.2s;
  color: #000;
  margin-left: 2rem;

  &.${(props) => props.activeclassname} {
    color: #a86728;
  }

  &:hover {
    color: #a86728;
  }

  @media (max-width: 704px) {
    display: block;
    margin: 3rem auto;
  }
`;

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
      <Announcement />
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
