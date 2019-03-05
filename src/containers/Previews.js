import React from 'react';
import ShipPreview from '../components/ShipPreview';
import styled from 'styled-components';

const StyledPreviewList = styled.div`
    height: 50%;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    align-items: center;
    justify-content: space-around;
`

const PreviewList = ( props ) => {
    const List = props.ships.map(ship => 
                    <ShipPreview 
                        name={ ship.ship_name } 
                        preview={ ship.sprite_name }
                        key={ ship.hull_id }
                        id={ ship.hull_id }
                        selectShip={ ( id ) => ( props.selectedShip === id ) ? null : props.selectShip( id ) }
                        selectedShip={props.selectedShip} />)
    return (
        <StyledPreviewList>
            { List}
        </StyledPreviewList>
    );
}

export default PreviewList;