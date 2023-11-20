import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  padding: 2rem;
`;

const About = () => {
    return (
        <AboutContainer id="about">
            <h2>About Me</h2>
            <p>This is the about section of the portfolio.</p>
        </AboutContainer>
    );
};

export default About;
