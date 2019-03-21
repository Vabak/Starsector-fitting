import React, { Component } from 'react';
import ShipSprite from '../components/UI/ShipSprite';
import { connect } from 'react-redux';
import styled from 'styled-components';



class ShipFitting extends Component {
    state = {}
    render() { 
        const ship = Object.assign({}, this.props.selectedShip)
        return (
            ( this.props.selectedShip ) ? 
            <div> 
                <div>
                    <ShipSprite
                        name={ ship.ship_name }
                        preview={ ship.sprite_name }
                        unsized />
                </div>
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