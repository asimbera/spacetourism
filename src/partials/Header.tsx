import { ClassNames } from '@emotion/react';
import styled from '@emotion/styled';
import media from 'css-in-js-media';
import { NavLink } from 'react-router-dom';

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${media('>=tablet')} {
    padding: 0;
    padding-left: 39px;
  }
  ${media('>=desktop')} {
    padding: 40px 0;
    padding-left: 55px;
  }
`;
const Logo = styled.img`
  height: 40px;
  width: 40px;
`;
const Hamburger = styled.button`
  background: transparent;
  border: 0;
  ${media('>=tablet')} {
    display: none;
  }
`;
const Navbar = styled.nav`
  display: none;
  background-color: var(--clr-primary);

  * + * {
    margin-left: 37px;
  }

  ${media('>=tablet')} {
    display: flex;
    padding: 0 46px;
    background-color: hsla(0, 0%, 100%, 0.04);
  }

  ${media('>=desktop')} {
    display: flex;
    padding: 0 165px 0 123px;
    background-color: hsla(0, 0%, 100%, 0.04);
    backdrop-filter: blur(81px);
  }
`;
const NavItem = styled(NavLink)`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 16px;
  letter-spacing: 2.7px;
  padding: 39px 0;
  color: var(--clr-white);

  ${media('>=desktop')} {
    padding: 39px 0;
    color: var(--clr-white);
  }
`;
const DesktopOnly = styled.b`
  display: none;
  ${media('>=desktop')} {
    display: inline;
    &::after {
      content: '';
      margin-right: 5px;
    }
  }
`;

export default () => (
  <Header>
    <Logo src='/src/assets/shared/logo.svg' alt='Logo' />
    <Hamburger>
      <img src='/src/assets/shared/icon-hamburger.svg' alt='Hamburger' />
    </Hamburger>
    <ClassNames>
      {({ css, cx }) => {
        const activeStyle = css`
          border-bottom: 3px solid var(--clr-white);
        `;
        return (
          <Navbar>
            <NavItem to='/home' activeClassName={activeStyle}>
              <DesktopOnly>00</DesktopOnly> Home
            </NavItem>
            <NavItem to='/dest' activeClassName={activeStyle}>
              <DesktopOnly>01</DesktopOnly> Destination
            </NavItem>
            <NavItem to='/crew' activeClassName={activeStyle}>
              <DesktopOnly>02</DesktopOnly> Crew
            </NavItem>
            <NavItem to='/tech' activeClassName={activeStyle}>
              <DesktopOnly>03</DesktopOnly> Technology
            </NavItem>
          </Navbar>
        );
      }}
    </ClassNames>
  </Header>
);
