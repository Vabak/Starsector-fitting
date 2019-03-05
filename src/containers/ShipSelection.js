import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../stores/actions/shipSelection'
import Previews from './Previews';
import ShipDescription from './ShipDescription';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column; 
    flex-grow: 3;
`;

class ShipSelection extends Component {
    render() { 
        return (
            <Container>
                <Previews
                    ships={this.props.ships}
                    selectShip={(id) => this.props.onSelectShip(id)}
                    selectedShip={this.props.selectedShip} />
                <ShipDescription
                    ships={this.props.ships}
                    selectedShip={this.props.selectedShip} />               
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        ships: state.filters.ships,
        selectedShip: state.shipSelection.selectedShip
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSelectShip: ( shipId ) => dispatch(actions.selectShip( shipId ))
    }
}


export default connect( mapStateToProps, mapDispatchToProps ) (ShipSelection);