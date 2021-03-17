import React from 'react';
import styled from '@emotion/styled';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

function App() {
  return (
    <AppContainer>
      <h1>Dan Ross</h1>
      <h2>Front-end Engineer at Turo</h2>
      <h3>San Francisco, CA</h3>
    </AppContainer>
  );
}

export default App;
