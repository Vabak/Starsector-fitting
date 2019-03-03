import React from 'react';
import { baseURL } from '../utility/utility';
import styled from 'styled-components';


const StyledPreview = styled.div`
    width: auto;
    flex-direction: column;
    border: 2px solid lightgray
    b {
        display: block
    }
`;

const ShipPreview = ({ preview, name }) => {
    return (
        <StyledPreview>
            <b>{ name }</b>
            <img src={ baseURL + 'static/fitting' + preview } alt={ name } />
        </StyledPreview> 
    );
}
 
export default ShipPreview;