import React, { Component } from 'react';
import axios from '../../axios-base'
import { connect } from 'react-redux';
import * as actions from '../../redux-store/actions/selectionPage'

import Select from '../../components/Select/Select';

const styleOptions = ['ARKGNEISIS_MID',
    'ARKGNEISIS_HIGH',
    'SHADOW_TECH',
    'MIDLINE',
    'SRD_MTF_TECH',
    'SCYHULL',
    'LOW_TECH',
    'HIGH_TECH',
    'DA_WANZER',
    'SRD_TECH',
    'KADUR_TECH',
    'SRD_RH_TECH',
    'SANGUINARY_TECH'];

const hullSizeOptions = ['CAPITAL_SHIP',
    'DESTROYER',
    'CRUISER',
    'FIGHTER',
    'FRIGATE']

class SelectionList extends Component {
    state = {
        styleValue: null,
        hullSizeValue: null,
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.styleValue !== this.state.styleValue ||
            prevState.hullSizeValue !== this.state.hullSizeValue) {
            this.fetchShips()
        }
    }
    componentDidMount() {
        this.fetchShips()
    }

    fetchShips() {
        let param = 'ship/';
        const { styleValue, hullSizeValue } = this.state;
        if (!!(styleValue && hullSizeValue)) {
            console.log(styleValue && hullSizeValue);
            param += '?hull_size=' + hullSizeValue + '&style=' + styleValue;

        } else if (styleValue || hullSizeValue) {

            param += '?' + (hullSizeValue ? 'hull_size=' + hullSizeValue
                : '&style=' + styleValue); 
        }
        this.props.onFetchShips(param);
    }

    onSelect = (e, selectType) => {
        if (selectType === 'style') {
            this.setState({ styleValue: e.target.value })
        }
        if (selectType === 'hull size') {
            this.setState({ hullSizeValue: e.target.value })
        }
    }

    render() {
        return (
            <div>
                <Select onSelect={this.onSelect} type='style' options={styleOptions} />
                <Select onSelect={this.onSelect} type='hull size' options={hullSizeOptions} />
            </div>
        );
    }
}

;

const mapDispatchToProps = dispatch => {
    return {
        onFetchShips: (param) => dispatch(actions.fetchShipsByParam(param))
    };
};

export default connect(null, mapDispatchToProps)(SelectionList);
