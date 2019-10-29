import React from 'react';
import styled from 'styled-components';
import { baseURL } from '../../utility/utility';

const StyledSprite = styled.img`
  transform: rotate(${ props => props.rotate + "deg"});
  flex-shrink: 0;
  object-fit: contain;
`;

const WeaponSprite = ( {weapon, rotate, color} ) => {
    return ( 
        <StyledSprite rotate={rotate}
                      color={color}
                      src={ baseURL + 'static/fitting' + weapon.turret_sprite } alt={ weapon.weapon_name }/>
    );
}
 
export default WeaponSprite;