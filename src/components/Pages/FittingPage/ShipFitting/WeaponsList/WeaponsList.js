import React from 'react';
import styled from 'styled-components';
import Filter from './Filter/Filter';
import { useSelector, shallowEqual } from 'react-redux'
import WeaponCard from '../../../../WeaponCard';

const StyledCont = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000000;  
  border-left: #3ac7e4 solid 2px;
  width: 300px;
`;

const StyledList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none; 
`;

const WeaponsList = ( { type, size, slotId, resetSlot } ) => {

  const availableWeapons = useSelector( state => state.shipFitting.availableWeapons, shallowEqual );
  const weapons = availableWeapons
      .filter( weapon => {
        return ( type === 'COMPOSITE' || type === weapon.weapon_type ) && size === weapon.size
      } )
      .map( weapon => <WeaponCard key={ weapon.weapon_id } weapon={ weapon } slotId={slotId} resetSlot={resetSlot}/> );
  return (
      <StyledCont>
        <div>
          <Filter filterType='damage'>By damage</Filter>
          <Filter filterType='dps'>By dps</Filter>
          <Filter filterType='ops'>By ops</Filter>
        </div>
        <StyledList>
          { weapons }
        </StyledList>

      </StyledCont>
  );
}

export default WeaponsList;