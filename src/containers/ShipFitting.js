import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
// import * as actions from '../stores/actions';
import axios from '../axios-base';

import ShipSprite from '../components/UI/ShipSprite';
import Slot from '../components/Slot';

const FittingContainer = styled.div`
    position: relative;
`;

class ShipFitting extends Component {
    state = {
        selectedSlot: null,
        weapons: null,
        availableWeapons: [],
    }

    componentDidMount() {
        this.fetchWeapons()
    }
    
    fetchWeapons() {
        axios.get( 'available_weapons/' + this.props.selectedShip.hull_id )
            .then( res => {
                this.setState({ availableWeapons: res.data})
            } )
            .catch( err => {
                console.log( err )
            })
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

// const mapDispatchToProps = dispatch => {
//     return {
//         onFetchWeapons: ( param ) => dispatch(actions.fetchWeaponsByParam( param )),
//     }
// }
 
export default connect( mapStateToProps )( ShipFitting );
