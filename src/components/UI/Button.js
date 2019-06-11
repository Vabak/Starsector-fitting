import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    border: 2px solid black;
    visibility: ${props => props.page ? 'visible' : 'hidden'} ;
    height: 20px;
    margin: 10px;
    font-family: 'Orbitron', sans-serif;
    background-color: lightblue;
    &:active {

    }
    &:hover {
    background-color: #3EA9E5;
    }
`;

const Button = (props) => {
    return (
        <StyledButton
            page={props.page}
            onClick={(e, page) => props.changePage(e, props.page)}
        >{props.value}</StyledButton>
    );
}

export default Button;
