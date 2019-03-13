import React from 'react';
import ShipPreview from '../components/ShipPreview';
import styled from 'styled-components';
import Button from '../components/UI/Button';

const StyledPreviewList = styled.div`
    margin: 20px;
    height: auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
`

const PreviewList = ( props ) => {
    const List = props.ships.map(ship => 
        <ShipPreview 
            name={ ship.ship_name } 
            preview={ ship.sprite_name }
            key={ ship.hull_id }
            id={ ship.hull_id }
            selectShip={ ( id ) => ( props.selectedShip === id ) ? null : props.selectShip( id ) }
            selectedShip={ props.selectedShip } />)
    return (
        <>
        <StyledPreviewList>
            { List }
        </StyledPreviewList>
        <div>
            <Button value='Previous'
                page={ props.previousPage }
                changePage={ props.changePage } />
            <Button value='Next'
                page={ props.nextPage }
                changePage={ props.changePage } />
        </div>
        </>
    );
}

export default PreviewList;
