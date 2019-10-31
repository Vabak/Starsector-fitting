import React from 'react';
import ShipPreview from './ShipPreview/ShipPreview';
import styled from 'styled-components';
import Button from '../../../../UI/Button';

const StyledPreviewList = styled.div`
    margin: 20px;
    margin-top: 40px;
    height: auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
`;

const PreviewList = ( props ) => {
  const List = props.ships.map( ship =>
      <ShipPreview
          name={ ship.ship_name }
          preview={ ship.sprite_name }
          key={ ship.hull_id }
          id={ ship.hull_id }
          selectShip={ ( id ) => ( props.selectedShip === id ) ? null : props.selectShip( id ) }
          selectedShip={ props.selectedShip }/> );
  return (
      <>
        <StyledPreviewList>
          { List }
        </StyledPreviewList>
        <div>
          <Button
              isShow={ props.previousPage }
              buttonArg={ props.previousPage }
              buttonClickHandler={ props.changePage }>Previous</Button>
          <Button
              isShow={ props.nextPage }
              buttonArg={ props.nextPage }
              buttonClickHandler={ props.changePage }>Next</Button>
        </div>
      </>
  );
};

export default PreviewList;
