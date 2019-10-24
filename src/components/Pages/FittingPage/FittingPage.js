import React, { useEffect } from 'react';
import styled from 'styled-components';
import * as actions from '../../../stores/actions/shipFitting'
import { connect } from 'react-redux';

import ShipFitting from './ShipFitting/ShipFitting';
import WeaponsList from './SelectedWeaponsList/WeaponsList';
import ShipParameters from './ShipParameters/ShipParameters';


const StyledPage = styled.div`
    display: flex;
    flex-direction: row;
`;

const FittingPage = ( props ) => {

  useEffect( () => {
    if ( props.selectedShip ) {
      const param = '/available_weapons/' + props.selectedShip.hull_id + '/';
      props.onFetchWeapons( param )
    }

  } );

  return props.selectedShip ?
      (
          <StyledPage>
            <WeaponsList ship={ props.selectedShip }/>
            { props.selectedShip ? <ShipFitting/> : null }
            <ShipParameters ship={props.selectedShip}/>
          </StyledPage>
      ) : null
};

const mapStateToProps = state => {
  return {
    selectedShip: state.shipSelection.selectedShip
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchWeapons: ( param ) => dispatch( actions.fetchWeaponsByParam( param ) )
  }
};
export default connect( mapStateToProps, mapDispatchToProps )( FittingPage );