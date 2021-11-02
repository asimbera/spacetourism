import { ClassNames } from '@emotion/react';
import styled from '@emotion/styled';
import media from 'css-in-js-media';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getAssetUrl } from '../utils';

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
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

  &:hover {
    border-bottom: 3px solid #979797;
  }

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

const Sidebar = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 254px;
  height: 100vh;
  z-index: 101;
  padding: 24px;
  padding-right: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: hsla(0, 0%, 100%, 0.04);
  backdrop-filter: blur(32px);

  ${media('>=tablet')} {
    display: none;
  }
`;

const HamburgerClose = styled.button`
  background-color: transparent;
  border: 0;
  align-self: flex-end;
  padding-right: 24px;
`;

const SidebarMenu = styled.ul`
  margin-top: 64px;
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;

  * + * {
    margin-top: 32px;
  }
`;

const SidebarMenuItem = styled.li`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 16px;
  letter-spacing: 2.7px;
  color: var(--clr-white);
  width: 100%;
  display: flex;
  align-items: center;
`;

const SidebarMenuItemNumber = styled.b`
  &::after {
    content: '       ';
    width: 14px;
  }
`;

export default () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const openSidebar = () => setSidebarOpen(true);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <React.Fragment>
      <Header>
        <Logo src={getAssetUrl('/images/shared/logo.svg')} alt='Logo' />
        <Hamburger onClick={openSidebar}>
          <img
            src={getAssetUrl('/images/shared/icon-hamburger.svg')}
            alt='Hamburger'
          />
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
      <AnimatePresence exitBeforeEnter>
        {sidebarOpen && (
          <Sidebar
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5 }}
          >
            <HamburgerClose onClick={closeSidebar}>
              <img
                src={getAssetUrl('/images/shared/icon-close.svg')}
                alt='Close'
              />
            </HamburgerClose>
            <ClassNames>
              {({ css, cx }) => {
                const active = css`
                  border-right: 3px solid #ffffff;
                `;
                const inactive = css`
                  width: 100%;
                  color: #ffffff;
                `;

                return (
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <NavLink
                        to='/home'
                        className={inactive}
                        activeClassName={active}
                      >
                        <SidebarMenuItemNumber>00</SidebarMenuItemNumber>Home
                      </NavLink>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <NavLink
                        to='/dest'
                        className={inactive}
                        activeClassName={active}
                      >
                        <SidebarMenuItemNumber>01</SidebarMenuItemNumber>
                        Destination
                      </NavLink>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <NavLink
                        to='/crew'
                        className={inactive}
                        activeClassName={active}
                      >
                        <SidebarMenuItemNumber>02</SidebarMenuItemNumber>Crew
                      </NavLink>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <NavLink
                        to='/tech'
                        className={inactive}
                        activeClassName={active}
                      >
                        <SidebarMenuItemNumber>03</SidebarMenuItemNumber>
                        Technology
                      </NavLink>
                    </SidebarMenuItem>
                  </SidebarMenu>
                );
              }}
            </ClassNames>
          </Sidebar>
        )}
      </AnimatePresence>
    </React.Fragment>
  );
};
