import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import ShipSprite from '../components/UI/ShipSprite';
import Slot from '../components/Slot';

const FittingContainer = styled.div`
    position: relative;
`;

class ShipFitting extends Component {
    state = {}

    getSlotCoordinates = ( slot ) => {
        const ship = Object.assign({}, this.props.selectedShip);
        const center = ship.center;
        const [slotY, slotX] = slot.locations;
        console.log('locations', slot.locations)
        let [centerY, centerX] = center;

        // Something wrong with coordinates
        console.log('center',center)
        const locations = {};
        locations.bottom = centerY + slotY;
        locations.left = centerX + slotX;
        console.log('result', locations)
        return locations;
    } 

    render() {
        const ship = Object.assign({}, this.props.selectedShip);
        let slots = null;
        if ( this.props.selectedShip ) {
            slots = Object.keys(ship.weapon_slots)
            .map( slot => {
            return <Slot key={ slot } locations={ this.getSlotCoordinates( ship.weapon_slots[slot] )} />
        })  
        }
        return (
            ( this.props.selectedShip ) ? 
            <div> 
                <FittingContainer>
                    <ShipSprite
                        name={ ship.ship_name }
                        preview={ ship.sprite_name }
                        unsized />
                    { slots }    
                </FittingContainer>
            </div>
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