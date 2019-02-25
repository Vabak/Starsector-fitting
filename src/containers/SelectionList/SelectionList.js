import React, { Component } from 'react';
import Select from '../../components/Select/Select';

import axios from '../../axios-base'

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
    state = {}
    componentDidMount() {
        // const query = 
        axios.get('ship/?style=SCYHULL')
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err))
    }
    render() {

        return (
            <div>
                <Select field='style' options={styleOptions} />
                <Select field='hull size' options={hullSizeOptions} />
            </div>
        );
    }
}

export default SelectionList;
