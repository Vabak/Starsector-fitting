import React from 'react';
import styled from 'styled-components';
import Angle from "./Angle/Angle";

const StyledSlot = styled.div`
    width: 5px;
    height: 5px;
    border: solid 2px ${ props => props.color };
    border-radius: 2px;
    z-index: 99;
    position: absolute;
    left: ${ props => props.locations.left + 'px' };
    bottom: ${ props => props.locations.bottom + 'px' };
`;




const Slot = ( { type, angle, arc, ...props } ) => {
      let color;
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
      color = 'white';
  }
  ;

  return (
      <StyledSlot locations={ props.locations } color={ color }>
        <Angle angle={angle} arc={arc} />
      </StyledSlot>
  );
}

export default Slot;
