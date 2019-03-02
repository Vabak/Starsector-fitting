import React from 'react';
import { baseURL } from '../../utility/utility';
import styled from 'styled-components';


const StyledPreview = styled.div`
    width: auto;
    height: 200px;
    margin: 0 5px;
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