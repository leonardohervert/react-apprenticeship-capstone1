import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
`;

const SearchBar = ({ ...props }) => {
  const { className } = props;
  return (
    <StyledDiv className={className}>
      <i className="bi bi-search"></i>
      <input />
    </StyledDiv>
  );
};

export default SearchBar;
