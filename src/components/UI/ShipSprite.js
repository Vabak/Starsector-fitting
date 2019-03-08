import React from 'react';
import styled from 'styled-components';
import { baseURL } from '../../utility/utility';

const StyledImg = styled.img`
    max-width: 163px;
    object-fit: contain;
`;

const ShipSprite = ( props ) => {
    return (
        <StyledImg src={ baseURL + 'static/fitting' + props.preview } alt={ props.name }  />
    );
}
 
export default ShipSprite;