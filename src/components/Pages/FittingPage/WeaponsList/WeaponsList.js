import React from 'react';
import styled from 'styled-components';

import WeaponsListItem from './WeaponListItem/WeaponsListItem';

const StyledWeaponsList = styled.ul`
  padding: 0;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
`;

const WeaponsList = ( {ship} ) => {
  const slotList = Object.keys(ship.weapon_slots).map( slot => {
    return <WeaponsListItem type={ship.weapon_slots[slot].type} key={[slot]}/>
  });

  return (
      <div>
        <StyledWeaponsList>
          {slotList}
        </StyledWeaponsList>
      </div>
  );
};

export default WeaponsList;