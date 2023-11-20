import React from 'react';
import styled from 'styled-components';

const ServicesContainer = styled.section`
  padding: 2rem;
`;

const Services = () => {
    return (
        <ServicesContainer id="services">
            <h2>Services</h2>
            <ul>
                <li>Service 1</li>
                <li>Service 2</li>
                <li>Service 3</li>
            </ul>
        </ServicesContainer>
    );
};

export default Services;
