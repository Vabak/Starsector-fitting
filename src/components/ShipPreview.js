import React from 'react';
import { baseURL } from '../utility/utility';
import styled from 'styled-components';


const StyledPreview = styled.div`
    box-sizing: border-box;
    flex-direction: column;
    border: 2px solid lightgray;
    &:hover {
        background-color: lightgreen;
        transform: scale(1.05); 
    }
    img {
        max-width: 163px;
    }
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