import React from 'react';
import styled from 'styled-components';
import WeaponSprite from './UI/WeaponSprite';
import { useDispatch } from 'react-redux';
import * as actions from '../stores/actions/shipFitting';
import { chooseColorByType } from '../utility/utility';

const StyledCard = styled.li`
  display: flex;
  flex-direction: row;
  list-style: none;
  align-items: center;
  padding: 0;
  margin: 0;
  background-color: #2e0000;
  height: 70px;
  box-sizing: border-box;
  border-top: 1px solid black;
  color: #d7d7d7;
  font-size: 14px;
  :hover {
    background-color: gray;
    cursor: pointer;
  }
`;

const ImgWrapper = styled.div`
  width: 80px;
  object-fit: contain;
  height: 100%;
  display: flex;
  justify-content: center;
  position: relative;
        ::before {
      content: '';
      position: absolute;
      z-index: 0;
      width: 30px;
      height: 30px;
      left: 20px;
      top: 15px;
      border: solid 4px ${ props => props.color};
      border-radius: 2px;
      transform: rotate(45deg);
`;


const WeaponCard = ( {weapon, slotId, resetSlot, type} ) => {
  const dispatch = useDispatch();

    return ( 
        <StyledCard onClick={(e) => {
          e.stopPropagation()
          dispatch(actions.selectWeapon(slotId, weapon))
          resetSlot()
        }}>
            <ImgWrapper color={chooseColorByType(type)}>
              <WeaponSprite  weapon={ weapon } rotate={45} />
            </ImgWrapper>
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