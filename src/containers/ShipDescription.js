import React from 'react';
import styled from 'styled-components';
import ShipSprite from '../components/UI/ShipSprite';
import ShipPreview from '../components/ShipPreview';

const StyledDescription = styled.div`
    height: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

const ShipDescription = ( props ) => {
    const ship = props.ships.find( ship => {
        return ship.hull_id === props.selectedShip
    })
    return (
        ( props.selectedShip ) ?
            <StyledDescription>
                <ShipPreview onClick={null}
                    className="disabled"
                    name={ ship.ship_name }
                    preview={ ship.sprite_name } />
                <p>{ ship.description }</p>
            </StyledDescription>
            :
            null
    );
}

export default ShipDescription;