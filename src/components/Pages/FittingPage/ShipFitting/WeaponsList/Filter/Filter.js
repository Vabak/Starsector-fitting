import React from 'react';
import styled from 'styled-components';

const StyledFilter = styled.div`
  height: 25px;
  color: white;
  background-color: #2b3944;
  border: #000000 solid 2px;
  outline: 2px solid #2b3944;
  margin-top: 2px;
  cursor: pointer;
  & span {
  line-height: 29px;
  }
  :hover {
    background-color: #3d4d59;
  }
  :active {
    background-color: #51616e;
  }
`;

const Filter = ( {filterType, ...props} ) => {
  return (
      <StyledFilter>
        <span>{props.children}</span>
      </StyledFilter>
  );
};

export default Filter;
