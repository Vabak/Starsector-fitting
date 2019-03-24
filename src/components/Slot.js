import React from 'react';
import styled from 'styled-components';

const StyledSlot = styled.div`
    width: 5px;
    height: 5px;
    border: solid 2px black;
    border-radius: 2px;
    z-index: 99;
    position: absolute;
    left: ${props => props.locations.left + 'px'};
    bottom: ${props => props.locations.bottom + 'px'};
`;

const Slot = ( props ) => {
    return (
        <StyledSlot locations={ props.locations } />
    );
}
 
export default Slot;