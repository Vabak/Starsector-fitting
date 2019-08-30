import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ShipSprite from '../../../UI/ShipSprite';
import Slot from './Slot/Slot';
import WeaponSelection from '../../../WeaponSelection';

const FittingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 600px;
`;

class ShipFitting extends Component {
  state = {
    selectedSlot: null,
    weapons: null,
    availableWeapons: [],
  }

  getSlotCoordinates = ( slot ) => {
    const ship = Object.assign( {}, this.props.selectedShip );
    const center = ship.center;
    const [slotX, slotY] = slot.locations;
    const [centerX, centerY] = center;
    const locations = {};
    locations.left = centerX - slotY - 9;
    locations.bottom = centerY + slotX - 9;
    return locations;
  }

  render() {

    const ship = Object.assign( {}, this.props.selectedShip );
    let slots = null;
    if ( this.props.selectedShip ) {
      slots = Object.keys( ship.weapon_slots )
          .filter( slot => ship.weapon_slots[slot]['type'] !== 'DECORATIVE' )
          .map( slot => {
            return <Slot
                key={ slot }
                type={ ship.weapon_slots[slot]['type'] }
                locations={ this.getSlotCoordinates( ship.weapon_slots[slot] ) }
                availableWeapons={ this.state.availableWeapons }
                arc={ ship.weapon_slots[slot]['arc'] }
                angle={ ship.weapon_slots[slot]['angle'] }>
              {/*<WeaponSelection />*/ }
            </Slot>
          } )
    }

    return (
        this.props.selectedShip ?
            <FittingContainer>
              <div style={{position: 'relative'}}>
                <ShipSprite
                    name={ ship.ship_name }
                    preview={ ship.sprite_name }
                    unsized/>
                { slots }
              </div>
            </FittingContainer>
            : null
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedShip: state.shipSelection.selectedShip
  }
}

export default connect( mapStateToProps )( ShipFitting );
