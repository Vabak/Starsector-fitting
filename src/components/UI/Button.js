import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    border: ${props => props.page ? '2px solid black' : 'none' } ;
    border-radius: 5px;
    background-color: lightblue;
    &:active {

    }
`;

const Button = ( props ) => {
    return ( 
        <StyledButton
            page={props.page}
            onClick={( e, page ) => props.changePage( e, props.page )}
            >{ props.value }</StyledButton>
    );
}
 
export default Button;