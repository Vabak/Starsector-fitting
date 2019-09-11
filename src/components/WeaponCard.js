import React from 'react';
import styled from 'styled-components';
import WeaponSprite from './UI/WeaponSprite';

const StyledCard = styled.li`
  display: flex;
  flex-direction: row;
  list-style: none;
  align-items: center;
  padding: 0;
  margin: 0;
  background-color: #000000;
  height: 80px;
  box-sizing: border-box;
  color: #d7d7d7;
  font-size: 14px;
  :hover {
    background-color: gray;
    cursor: pointer;
  }
`;


const WeaponCard = ( {weapon} ) => {
    return ( 
        <StyledCard>
            <WeaponSprite weapon={ weapon } />
            <div>
              <span>{weapon.name}</span>
              <span>range {weapon.weapon_range}</span>
            </div>
            <div>
              <span>{weapon.ops}</span>
              <span>Ordnance points</span>
            </div>
        </StyledCard>
    );
}
 
export default WeaponCard;