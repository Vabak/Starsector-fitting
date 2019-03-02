import React, { Component } from 'react';
// import axios from '../../axios-base'
import { connect } from 'react-redux';
import * as actions from '../../stores/actions/selectionPage';
// import styled from 'styled-components';

import Select from '../../components/Select/Select';

// const styleOptions = ['ARKGNEISIS_MID',
//     'ARKGNEISIS_HIGH',
//     'SHADOW_TECH',
//     'MIDLINE',
//     'SRD_MTF_TECH',
//     'SCYHULL',
//     'LOW_TECH',
//     'HIGH_TECH',
//     'DA_WANZER',
//     'SRD_TECH',
//     'KADUR_TECH',
//     'SRD_RH_TECH',
//     'SANGUINARY_TECH'];

// const hullSizeOptions = ['CAPITAL_SHIP',
//     'DESTROYER',
//     'CRUISER',
//     'FIGHTER',
//     'FRIGATE']

class SelectionList extends Component {

    componentDidUpdate( prevProps, prevState ) {
        if (prevState.styleValue !== this.state.styleValue ||
            prevState.hullSizeValue !== this.state.hullSizeValue) {
            this.fetchShips()
        }
    }
    componentDidMount() {
        this.props.onFetchFilters() 
        this.fetchShips()
    }

    fetchShips() {
        let param = 'ships/';
        const { styleValue, hullSizeValue } = this.props;

        if (!!(styleValue && hullSizeValue)) {
            console.log(styleValue && hullSizeValue);
            param += '?hull_size=' + hullSizeValue + '&style=' + styleValue;
        } else if (styleValue || hullSizeValue) {
            param += '?' + (hullSizeValue ? 'hull_size=' + hullSizeValue
                                            : 'style=' + styleValue); 
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
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <Select onSelect={this.onSelect} type='style' options={this.props.styleOptions} />
                <Select onSelect={this.onSelect} type='hull size' options={this.props.hullSizeOptions} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        styleOptions: state.styleOptions,
        hullSizeOptions: state.hullSizeOptions,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchShips: (param) => dispatch(actions.fetchShipsByParam(param)),
        onFetchFilters: () => dispatch(actions.fetchFilters())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectionList);
