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
  width: 300px;
  z-index: 1;
`;

const StyledList = styled.ul`
  padding: 0;
  margin: 0;
  margin-top: 5px;
  list-style: none; 
  height: 400px;
  overflow: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  background-color: #F5F5F5;
  }
  ::-webkit-scrollbar {
  width: 10px;
  background-color: #F5F5F5;
  }
  ::-webkit-scrollbar-thumb {
  background-color: #6e2707;
  background-image: -webkit-gradient(linear, 0 0, 0 100%,
                   color-stop(.5, rgba(255, 255, 255, .2)),
  color-stop(.5, transparent), to(transparent));
  }
`;

const WeaponsList = ( { type, size, slotId, resetSlot } ) => {

  const availableWeapons = useSelector( state => state.shipFitting.availableWeapons, shallowEqual );
  const weapons = availableWeapons
      .filter( weapon => {
        return ( type === 'COMPOSITE' || type === weapon.weapon_type ) && size === weapon.size
      } )
      .map( weapon => <WeaponCard key={ weapon.weapon_id } weapon={ weapon } type={type} slotId={ slotId }
                                  resetSlot={ resetSlot }/> );
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