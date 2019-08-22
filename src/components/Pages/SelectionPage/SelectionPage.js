import React, { Component } from 'react';

import Filters from './Filters/Filters';
import ShipSelection from './ShipSelection/ShipSelection'



class SelectionPage extends Component {
    render() { 
        return (
            <div style={{ display: 'flex' }}>
                <Filters />
                <ShipSelection />
            </div>
        );
    }
}
 
export default SelectionPage;