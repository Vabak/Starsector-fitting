import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    border: 2px solid black;
    box-sizing: content-box;
    display: ${ props => props.isShow ? 'inline-block' : 'none' } ;
    height: 20px;
    margin: 10px;
    padding: 5px 10px;
    font-family: 'Orbitron', sans-serif;
    background-color: lightblue;
    align-self: flex-start;
    &:active {
      background-color: #4141e5;
    }
    &:hover {
    background-color: #127cde;
    }
`;

const Button = ( props ) => {
  return (
      <StyledButton
          {...props}
          isShow={ props.isShow }
          onClick={ ( e ) => props.buttonClickHandler( e, props.buttonArg ) }
      >{ props.children }</StyledButton>
  );
};

export default Button;
