import React from 'react';
import styled from 'styled-components';
import { baseURL } from '../../../../../../utility/utility';

const WeaponSprite = styled.img`
  
`;

const EquippedWeapon = ({weapon}) => {
  return weapon ? <WeaponSprite src={ baseURL + 'static/fitting' + weapon.turret_sprite } alt={ weapon.weapon_name } />
                : null
  ;
};

export default EquippedWeapon;
