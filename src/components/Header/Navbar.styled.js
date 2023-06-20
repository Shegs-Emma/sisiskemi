import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
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

export const StyledNavLink = styled(NavLink)`
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
