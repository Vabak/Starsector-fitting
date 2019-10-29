import React from 'react';
import styled from 'styled-components';
import Angle from './Angle/Angle';
import WeaponsList from '../WeaponsList/WeaponsList';
import EquippedWeapon from './EquippedWeapon/EquppedWeapon';
import { chooseColorByType } from '../../../../../utility/utility';

const StyledSlot = styled.div`
    justify-content: center;
    display: flex;
    width: 12px;
    height: 12px;
    box-sizing: border-box;
    position: absolute;
    align-items: center;
    left: ${ props => props.locations.left + 'px' };
    bottom: ${ props => props.locations.bottom + 'px' };
    overflow: visible;
    ::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      left: -2px;
      border: solid 2px ${ props => props.color };
      border-radius: 2px;
      transform: rotate(${ props => props.angle + 'deg' });
      opacity: 0.6;
    }
    & svg {
      opacity: ${ props => props.selected === props.id ? 1 : 0 };
    }
    &:hover {
      ::before {
        opacity: 1;
      }
      & svg {
        opacity: 1;
      }
    }
`;


const Slot = ( { type, angle, arc, size, id, selectedSlot, weapon, ...props } ) => {

  const color = chooseColorByType( type )

  const rotateAngle = -90 - angle;
  return (
      <StyledSlot
          locations={ props.locations }
          angle={rotateAngle}
          color={ color }
          id={ id }
          selected={ selectedSlot }
          onClick={ ( e ) => {
            e.stopPropagation()
            props.selectSlot( id )
          } }>
        <Angle angle={ angle } arc={ arc } color={ color }/>
        <EquippedWeapon weapon={ weapon } angle={ angle }/>
        { selectedSlot === id ?
            <WeaponsList size={ size } type={ type } slotId={ id } resetSlot={ props.resetSlot }/> : null }
      </StyledSlot>
  );
}

export default Slot;
