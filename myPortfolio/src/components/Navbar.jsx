import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  background-color: #333;
  padding: 1rem;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Navbar = () => {
    return (
        <NavbarContainer>
            <div>Logo</div>
            <div>
                <a href="#about">About</a>
                <a href="#services">Services</a>
            </div>
        </NavbarContainer>
    );
};

export default Navbar;
