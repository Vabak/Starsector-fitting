import React from 'react';
import styled from 'styled-components';

const TempSlot = styled.div`
    width: 5px;
    height: 5px;
    border: solid 2px white;
    border-radius: 2px;
    position: absolute;
    left: ${props => props.locations.left};
    top: ${props => props.locations.top};
`;

const Slot = ( props ) => {
    return (
        <TempSlot locations={ props.locations } />
    );
}
 
export default Slot;