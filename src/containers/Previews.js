import React from 'react';
import ShipPreview from '../components/ShipPreview';
import styled from 'styled-components';
import Button from '../components/UI/Button';

const StyledPreviewList = styled.div`
    height: 50%;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    align-items: flex-start;
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
                        selectedShip={ props.selectedShip } />)
    return (
        <>
        <StyledPreviewList>
            { List }
        </StyledPreviewList>
        <div>
            <Button value='previous'
                page={ props.previousPage }
                changePage={ props.changePage } />
            <Button value='next'
                page={ props.nextPage }
                changePage={ props.changePage } />
        </div>
        </>
    );
}

export default PreviewList;