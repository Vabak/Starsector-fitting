import React from 'react';
import styled from 'styled-components';
import { baseURL } from '../../../../../../utility/utility';

const WeaponSprite = styled.img`
  transform: rotate(${ props => props.angle + 'deg' });
  pointer-events: none;
`;

const EquippedWeapon = ({weapon, angle}) => {
  return weapon ? <WeaponSprite src={ baseURL + 'static/fitting' + weapon.turret_sprite } alt={ weapon.weapon_name } angle={-angle} />
                : null
  ;
};

export default EquippedWeapon;
