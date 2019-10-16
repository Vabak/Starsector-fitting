import React from 'react';
import styled from 'styled-components';

import ShipSprite from '../../../../../UI/ShipSprite'


const StyledPreview = styled.div`
    margin: 10px;
    padding: 5px 0;
    height: 210px;
    width: 150px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    overflow: hidden;
    font-family: 'Orbitron', sans-serif;
    color: antiquewhite;
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
    };
    b {
        display: block;
    };
    div {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`;

const ShipPreview = ({unsized, preview, name, selectShip, id, selectedShip, className }) => {
    return (
        <StyledPreview 
            className={className}
            onClick={() => {selectShip(id)}} selectedShip={selectedShip} id={id} >
            <b>{ name }</b>
            <div>
            <ShipSprite 
                unsized={unsized}
                preview={preview}
                name={name} />
            </div>
        </StyledPreview> 
    );
}
 
export default ShipPreview;
