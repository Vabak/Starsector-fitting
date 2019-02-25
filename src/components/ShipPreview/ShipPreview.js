import React from 'react';
import { baseURL } from '../../utility/utility'

const ShipPreview = ({ preview, name }) => {
    return (
        <div>
            <b>{ name }</b>
            <img src={ baseURL + 'static/fitting' + preview } alt={ name } />
        </div> 
    );
}
 
export default ShipPreview;