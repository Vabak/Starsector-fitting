import React, { Component } from 'react';
import axios from '../../axios-base'
import { connect } from 'react-redux';
import { fetchShipsByParam } from '../../redux-store/actions/selectionPage'

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
    componentDidMount() {
        let param = 'ship/';
        const { styleValue, hullSizeValue } = this.state
        if (styleValue && hullSizeValue) {
            param += '?hull_size=' + hullSizeValue + '&style=' + styleValue;                        
        } 
        if (styleValue || hullSizeValue) {
            param += '?' + hullSizeValue ? 'hull_size=' + hullSizeValue 
                                            : '&style=' + styleValue;
        }
        this.props.onFetchShips(param);
        // const query = 
        // axios.get('ship/?style=SCYHULL')
        //     .then(res => {
        //         console.log(res);
        //     })
        //     .catch(err => console.log(err))
    }

    onSelect = (e, selectType) => {
        if (selectType === 'style') {
            return this.setState({ styleValue: e.target.value})
        }
        if (selectType === 'hull size') {
            return this.setState({ hullSizeValue: e.target.value})
        }
    }
    render() {
        return (
            <div>
                <Select type='style' options={styleOptions} />
                <Select type='hull size' options={hullSizeOptions} />
            </div>
        );
    }
}

;

const mapDispatchToProps = dispatch => {
    return {
        onFetchShips: (param) => dispatch(fetchShipsByParam(param))
    };
};

export default connect(null, mapDispatchToProps)(SelectionList);
