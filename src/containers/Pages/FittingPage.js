import React from 'react';
import styled from 'styled-components';
import ShipFitting from '../ShipFitting';
import { connect } from 'react-redux';

const StyledPage = styled.div`
    display: flex;
    flex-direction: row;
`;

const FittingPage = ( props ) => {
    return (
        <StyledPage>
            <div>Weapons</div>
            {props.selectedShip ? <ShipFitting /> : null}
            <div>Paremeters</div> 
        </StyledPage>
    );
}

const mapStateToProps = state => {
    return {
        selectedShip: state.shipSelection.selectedShip
    }
}
export default connect( mapStateToProps ) (FittingPage);