import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    border: 2px solid black;
    border-radius: 5px;
    background-color: lightblue;
`;

const Button = ( props ) => {
    return ( 
        <StyledButton>{props.value}</StyledButton>
    );
}
 
export default Button;