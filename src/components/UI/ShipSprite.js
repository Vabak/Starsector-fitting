import React from 'react';
import styled from 'styled-components';
import { baseURL } from '../../utility/utility';

const StyledImg = styled.img`
    max-height: 175px;
    max-width: 150px;
    object-fit: contain;
    display: block;
`;

const ShipSprite = ( props ) => {
    return (
        <StyledImg src={ baseURL + 'static/fitting' + props.preview } alt={ props.name }  />
    );
}
 
export default ShipSprite;
