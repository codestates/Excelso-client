import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
  padding: 0;
  margin: 0;
}
`;

// ========== signup ===========

export const Navbar = styled.div`
  height: 4rem;
  width: 100%;
  background-color: yellow;
`

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


// ========== mypage ===========

export const MpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

