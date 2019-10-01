import React from 'react';
import styled from 'styled-components';
import Angle from './Angle/Angle';
import WeaponsList from '../WeaponsList/WeaponsList';
import EquippedWeapon from './EquippedWeapon/EquppedWeapon';

const StyledSlot = styled.div`
    width: 14px;
    height: 14px;
    border: solid 2px rgb(127, 0, 0.6);
    border-radius: 2px;
    z-index: 99;
    position: absolute;
    align-items: center;
    align-content: center;
    left: ${ props => props.locations.left + 'px' };
    bottom: ${ props => props.locations.bottom + 'px' };
    & svg {
      opacity: ${ props => props.selected === props.id ? 1 : 0 };
    }
    &:hover {
      opacity: 1;
      & svg {
      opacity: 1;
      }
    }
`;


const Slot = ( { type, angle, arc, size, id, selectedSlot, weapon, ...props } ) => {
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
      <StyledSlot
          locations={ props.locations }
          color={ color }
          id={ id }
          selected={ selectedSlot }
          onClick={ (e) => {
            e.stopPropagation()
            props.selectSlot( id )
          } }>
        <Angle angle={ angle } arc={ arc } color={ color }/>
        <EquippedWeapon weapon={weapon} />
        { selectedSlot === id ? <WeaponsList size={ size } type={ type } slotId={ id } resetSlot={props.resetSlot}/> : null }
      </StyledSlot>
  );
}

export default Slot;
