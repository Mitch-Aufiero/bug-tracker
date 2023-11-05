import React, { useState, useEffect } from 'react';
import {Nav, NavList,NavSection, NavItem} from './navStyles';

const NavBar = () => {
    return (
      <Nav>
        <NavList>
          <NavSection alignment="left">
            <NavItem>
              <a href="/">Bug Tracker</a>
            </NavItem>
            <NavItem>
              <a href="/projects">Projects</a>
            </NavItem>
            <NavItem>
              <a href="/bugs">Bugs</a>
            </NavItem>
          </NavSection>

          <NavSection>
            <NavItem>
              <a href="/account">Account</a>
            </NavItem>
          </NavSection>
        </NavList>
      </Nav>
    );
  };
  
  export default NavBar;