import React from 'react';
import styled from 'styled-components';

import ShipSprite from './UI/ShipSprite'


const StyledPreview = styled.div`
    margin: 10px;
    height: 200px;
    width: 150px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    font-family: 'Orbitron', sans-serif;
    &.disabled {
    border: none;
    pointer-events: none;
    }
    border: ${props => ( props.selectedShip === props.id ) ? '2px solid red'  : '2px solid lightgray'};
    &:hover {
        transform: scale(1.05);
        background: repeating-linear-gradient(
            45deg,
            #131111,
            #131111 20px,
            #A7AC0C 20px,
            #A7AC0C 40px
        );
        color: white;
        text-shadow: black 1px 1px 0, black -1px -1px 0,
                     black -1px 1px 0, black 1px -1px 0;
    }
    b {
    display: block;
    }
`;

const ShipPreview = ({ preview, name, selectShip, id, selectedShip, className }) => {
    return (
        <StyledPreview 
            className={className}
            onClick={() => {selectShip(id)}} selectedShip={selectedShip} id={id} >
            <b>{ name }</b>
            <ShipSprite 
                preview={preview}
                name={name} />
        </StyledPreview> 
    );
}
 
export default ShipPreview;
