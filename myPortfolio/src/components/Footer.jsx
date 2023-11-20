import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 1rem;
  text-align: center;
`;

const Footer = () => {
    return <FooterContainer>&copy; 2023 Your Name</FooterContainer>;
};

export default Footer;
