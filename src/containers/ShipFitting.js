import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import * as actions from '../stores/actions';

import ShipSprite from '../components/UI/ShipSprite';
import Slot from '../components/Slot';

const FittingContainer = styled.div`
    position: relative;
`;

class ShipFitting extends Component {
    state = {
        selectedSlot: null,
        weapons: null,     
    }

    componentDidMount() {
        this.fetchWeapons()
    }

    _getAvailableWeapons( slots ) {
        const available = [];
        Object.keys( slots ).map( slot => {
            if (slots[slot].type === 'DECORATIVE') return;
            if (!(available.find( weap => {
            return  weap.type === slots[slot].type &&
                    weap.size === slots[slot].size
            }))) {
                available.push({ type: slots[slot].type,
                size: slots[slot].size })
            }
        })
        return available;
    }
    
    fetchWeapons() {
        const slots = this.props.selectedShip.weapon_slots;
        const params = [];
        const availableParams = this._getAvailableWeapons( slots );
        availableParams.map( weapon => {
            let param = 'weapons/';
            param += '?weapon_type=' + weapon.type +'&size=' + weapon.size;
            params.push(param);
        }) 
        this.props.onFetchWeapons( params );
    } 

    getSlotCoordinates = ( slot ) => {
        const ship = Object.assign({}, this.props.selectedShip);
        const center = ship.center;
        const [slotX, slotY] = slot.locations;
        const [centerX, centerY] = center;
        const locations = {};
        locations.left = centerX - slotY - 5;
        locations.bottom = centerY + slotX - 5;
        return locations;
    } 

    render() {
        const ship = Object.assign({}, this.props.selectedShip);
        let slots = null;
        if ( this.props.selectedShip ) {
            slots = Object.keys(ship.weapon_slots)
            .filter( slot => ship.weapon_slots[slot]['type'] !== 'DECORATIVE' )
            .map( slot => {
                return <Slot key={ slot } type={ ship.weapon_slots[slot]['type'] } locations={ this.getSlotCoordinates( ship.weapon_slots[slot] )} />
            })  
        }
        return (
            this.props.selectedShip ? 
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

const mapDispatchToProps = dispatch => {
    return {
        onFetchWeapons: ( param ) => dispatch(actions.fetchWeaponsByParam( param )),
    }
}
 
export default connect( mapStateToProps )( ShipFitting );
