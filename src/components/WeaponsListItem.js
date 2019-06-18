import React from 'react';
import styled from 'styled-components';

const StyledLi = styled.li`
  border: solid 2px ${ props => props.color };
`;

// should make a slots item in FittingPage cmp

const WeaponsListItem = ( {type} ) => {
  let color = 'white';
  switch ( type ) {
    case 'ENERGY':
      color = 'blue';
      break;
    case 'BALLISTIC':
      color = 'yellow';
      break;
    case 'MISSILE':
      color = 'green';
      break;
    default:
      color = 'black';
  }
  ;
  return (
      <StyledLi color={ color }>
        <div>sprite</div>
        <span>some description</span>
      </StyledLi>
  );
};

export default WeaponsListItem;