import React from 'react';
import styled from 'styled-components';

const StyledFilter = styled.div`
  height: 25px;
  background-color: aqua;
  border: #000000 solid 2px;
  outline: 2px solid aqua;
  margin-top: 2px;
`;

const Filter = ( {filterType, ...props} ) => {
  return (
      <StyledFilter>
        <span>{props.children}</span>
      </StyledFilter>
  );
};

export default Filter;
