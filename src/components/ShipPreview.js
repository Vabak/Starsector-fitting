import React from 'react';
import styled from 'styled-components';

import ShipSprite from './UI/ShipSprite'


const StyledPreview = styled.div`
    box-sizing: border-box;
    flex-direction: column;
    border: ${props => ( props.selectedShip === props.id ) ? '2px solid red'  : '2px solid lightgray'};
    &:hover {
        background-color: lightgreen;
        transform: scale(1.05); 
    }
    b {
        display: block
    }
`;

const ShipPreview = ({ preview, name, selectShip, id, selectedShip }) => {
    return (
        <StyledPreview onClick={() => {selectShip(id)}} selectedShip={selectedShip} id={id} >
            <b>{ name }</b>
            <ShipSprite 
                preview={preview}
                name={name} />
        </StyledPreview> 
    );
}
 
export default ShipPreview;