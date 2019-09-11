import React from 'react';
import styled from 'styled-components';
import { baseURL } from '../../utility/utility';

const StyledSprite = styled.img`
  border: 4px ${ props => props.color } solid;
  width: 25px;
  height: 25px;
`;

const WeaponSprite = ( {weapon} ) => {
    return ( 
        <StyledSprite src={ baseURL + 'static/fitting' + weapon.turret_sprite } alt={ weapon.weapon_name }/>
    );
}
 
export default WeaponSprite;