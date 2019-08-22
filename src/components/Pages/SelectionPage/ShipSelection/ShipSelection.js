import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../../stores/actions'
import Previews from './Previews/Previews';
import ShipDescription from './ShipDesctiption/ShipDescription';
import styled from 'styled-components';

const Container = styled.div`
    min-height: 100%;
    display: flex;
    flex-direction: column;
    flex-grow: 3;
    font-family: 'Roboto';
`;

class ShipSelection extends Component {
  selectShip = ( id ) => {
    const ship = this.props.ships.find( ship => {
      return ship.hull_id === id
    } )
    this.props.onSelectShip( ship );
  }

  paginationHandler = ( e, page ) => {
    if ( !page ) return;
    const param = '/ships' + page;
    this.props.onFetchShips( param )
  }

  render() {
    return (
        <Container>
          <Previews
              ships={ this.props.ships }
              selectShip={ ( id ) => this.selectShip( id ) }
              selectedShip={ this.props.selectedShip }
              changePage={ this.paginationHandler }
              nextPage={ this.props.nextPage }
              previousPage={ this.props.previousPage }/>
          { ( this.props.selectedShip ) ? <ShipDescription
                  ships={ this.props.ships }
                  selectedShip={ this.props.selectedShip }/>
              : null }
        </Container>
    );
  }
}


const mapStateToProps = state => {
  return {
    ships: state.filters.ships,
    selectedShip: state.shipSelection.selectedShip,
    nextPage: state.filters.next,
    previousPage: state.filters.previous
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSelectShip: ( shipId ) => dispatch( actions.selectShip( shipId ) ),
    onFetchShips: ( param ) => dispatch( actions.fetchShipsByParam( param ) ),
  }
}


export default connect( mapStateToProps, mapDispatchToProps )( ShipSelection );
