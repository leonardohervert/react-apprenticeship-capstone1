import React from 'react';
import styled from 'styled-components';
import Label from '../Label';
import SearchBar from '../SearchBar';
import Sidebar from '../Sidebar';

const StyledNavbar = styled.div`
  height: 55px;
  background-color: #1c5476;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledNav = styled.div`
  margin-left: auto;
  display: flex;
  flex-direction: row;
`;

const StyledDiv = styled.div`
  flex: 1;
`;
const StyledSearchBar = styled(SearchBar)`
  margin-left: 70px;
`;

const Header = () => {
  return (
    <StyledDiv>
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <StyledNavbar>
        <StyledSearchBar />
        <StyledNav>
          <Label className="text-light">Dark Mode</Label>
          <Label className="text-light">login</Label>
        </StyledNav>
      </StyledNavbar>
    </StyledDiv>
  );
};

export default Header;
