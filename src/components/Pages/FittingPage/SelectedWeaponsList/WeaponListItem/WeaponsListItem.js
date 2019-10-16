import React from 'react';
import styled from 'styled-components';
import { chooseColorByType } from '../../../../../utility/utility';

const StyledLi = styled.li`
  border: solid 2px ${ props => props.color };
  list-style: none;
  min-width: 100px;
  min-height: 50px;
`;


const WeaponsListItem = ( {type} ) => {
  const color = chooseColorByType( type )

  return (
      <StyledLi color={ color }>
        <div>sprite</div>
        <span>some description</span>
      </StyledLi>
  );
};

export default WeaponsListItem;