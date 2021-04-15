import React from 'react';
import styled from '@emotion/styled';
import GithubLogo from './assets/GitHub-Mark-32px.png';
import LinkedinLogo from './assets/LI-In-Bug.png';


const AppContainer = styled.div`
  label: AppContainer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


const NameAndLogosContainer = styled.div`
  label: NamesAndLogosContainer;
  text-align: center;
`;

const NameText = styled.h1`
  background-image: radial-gradient(#ffffff 1px, #A0CED9 1px);
  background-size: 20px 20px;
  label: NameText;
  font-family: Futura, "Trebuchet MS", Arial, sans-serif;
  font-variant: normal;
  font-size: 91px; 
  font-style: italic; 
  font-weight: 900;
  color: #ADF7B6;
  margin-bottom: 0px;
`;

const PositionText = styled.h2`
  font-weight: 500;
  label: PositionText;
  margin-top: 0px;
  padding-top: 0px;
  font-size: 24px;
  margin-top: 12px;
`;

const LogosContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const LogoImage = styled.img`
  width: 40px;
  margin-right: 20px;
`


function App() {
  return (
    <AppContainer>
      <NameAndLogosContainer>
        <NameText>Dan Ross</NameText>
        <PositionText>Front-end Engineer · Turo · San Francisco, CA</PositionText>
        <LogosContainer>
          <a href="https://github.com/dross15" target="_blank" rel="noreferrer">
            <LogoImage alt="Github Logo" src={GithubLogo}/>
          </a>
          <a href="https://www.linkedin.com/in/daniel-ross" target="_blank" rel="noreferrer">
            <LogoImage alt="Linkedin Logo" src={LinkedinLogo}/>
          </a>
        </LogosContainer>
      </NameAndLogosContainer>
    </AppContainer>
  );
}

export default App;
