import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../stores/actions/index'
import Previews from './Previews';
import ShipDescription from './ShipDescription';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column; 
    flex-grow: 3;
`;

class ShipSelection extends Component {
    paginationHandler = ( e, page ) => {
        if (!page) return;
        const param = '/ships' + page;
        this.props.onFetchShips( param )
    }
    render() {  
        return (
            <Container>
                <Previews
                    ships={ this.props.ships }
                    selectShip={( id ) => this.props.onSelectShip( id )}
                    selectedShip={ this.props.selectedShip }
                    changePage={ this.paginationHandler }
                    nextPage={ this.props.nextPage }
                    previousPage={ this.props.previousPage } />

                <ShipDescription
                    ships={ this.props.ships }
                    selectedShip={ this.props.selectedShip } />                 
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
        onSelectShip: ( shipId ) => dispatch(actions.selectShip( shipId )),
        onFetchShips: ( param ) => dispatch(actions.fetchShipsByParam( param )),
    }
}


export default connect( mapStateToProps, mapDispatchToProps ) (ShipSelection);