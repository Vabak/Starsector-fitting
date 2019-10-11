import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ShipSprite from '../../../UI/ShipSprite';
import Slot from './Slot/Slot';

const FittingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 600px;
    //zoom: 2;
`;

class ShipFitting extends Component {
  state = {
    selectedSlot: null,
    weapons: null,
  }

  getSlotCoordinates = ( slot ) => {
    const ship = Object.assign( {}, this.props.selectedShip );
    const center = ship.center;
    const [slotX, slotY] = slot.locations;
    const [centerX, centerY] = center;
    const locations = {};
    locations.left = centerX - slotY - 6;
    locations.bottom = centerY + slotX - 6;
    return locations;
  }

  clickSlotHandler = ( slotId ) => {
    this.setState( { selectedSlot: slotId } )
  }
  resetSelectedSlot = () => {
    this.setState( { selectedSlot: null } )
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
                id={ slot }
                type={ ship.weapon_slots[slot]['type'] }
                locations={ this.getSlotCoordinates( ship.weapon_slots[slot] ) }
                arc={ ship.weapon_slots[slot]['arc'] }
                angle={ ship.weapon_slots[slot]['angle'] }
                size={ ship.weapon_slots[slot]['size'] }
                selectSlot={ this.clickSlotHandler }
                selectedSlot={ this.state.selectedSlot }
                resetSlot={ this.resetSelectedSlot }
                weapon={ this.props.selectedWeapons[slot] }/>
          } )
    }
    return (
        this.props.selectedShip ?
            <FittingContainer onClick={ this.resetSelectedSlot }>
              <div style={ { position: 'relative' } }>
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
    selectedShip: state.shipSelection.selectedShip,
    selectedWeapons: state.shipFitting.selectedWeapons,
  }
}

export default connect( mapStateToProps )( ShipFitting );
