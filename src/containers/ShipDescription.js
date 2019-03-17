import React from 'react';
import styled from 'styled-components';
import ShipPreview from '../components/ShipPreview';
import ShipDataTable from '../components/ShipDataTable';

const StyledDescription = styled.div`
    /* height: 50%; */
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    p {
        display: block;
        width: 30%;
    }
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
                <ShipDataTable data={ship} />
            </StyledDescription>
            :
            null
    );
}

export default ShipDescription;
