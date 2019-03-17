import React, { Component } from 'react';
import ShipPreview from '../components/UI/ShipSprite';
import { connect } from 'react-redux';

class ShipFitting extends Component {
    state = {}
    render() { 
        return (
            <div>
                <div>
                    <ShipPreview />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        selectedShip: state.shipSelection.selectedShip
    }
}
 
export default connect( mapStateToProps )( ShipFitting );