import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
`;

const Label = ({ ...props }) => {
  const { children, className } = props;
  return <StyledLabel className={className}>{children}</StyledLabel>;
};

export default Label;
