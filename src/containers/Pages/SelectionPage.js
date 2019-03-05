import React, { Component } from 'react';

import Filters from '../Filters';
import ShipSelection from '../ShipSelection'



class SelectionPage extends Component {
    render() { 
        return (
            <div style={{ display: 'flex', height: '100%' }}>
                <Filters />
                <ShipSelection />
            </div>
        );
    }
}
 
export default SelectionPage;