import React from 'react';
import styled from 'styled-components';

import WeaponsListItem from './WeaponListItem/WeaponsListItem';

// const StyledWeaponsList = styled.ul`
//
// `;

const WeaponsList = ( {ship} ) => {
  const slotList = Object.keys(ship.weapon_slots).map( slot => {
    return <WeaponsListItem type={ship.weapon_slots[slot].type} key={[slot]}/>
  });

  return (
      <div>
        <ul>
          {slotList}
        </ul>
      </div>
  );
};

export default WeaponsList;