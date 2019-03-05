import React from 'react';
import styled from 'styled-components';
import ShipSprite from '../components/UI/ShipSprite';

const StyledDecripion = styled.div`
    height: 50%;
`;

const ShipDescription = ( props ) => {
    const ship = props.ships.find( ship => {
        return ship.hull_id === props.selectedShip
    })
    return ( 
        (props.selectedShip) ? 
        <div>
            <ShipSprite
                name={ ship.ship_name } 
                preview={ ship.sprite_name } />
            <p>{ ship.description }</p>
        </div>
        :
        null
    );
}

export default ShipDescription;