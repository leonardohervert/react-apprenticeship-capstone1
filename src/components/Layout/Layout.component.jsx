import React from 'react';
import './Layout.styles.css';
import styled from 'styled-components';

const StyledMain = styled.main`
  width: 100vw;
  height: 100vh;
`;
// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  return <StyledMain>{children}</StyledMain>;
}

export default Layout;
