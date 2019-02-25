import React from 'react';

const ShipPreview = ({preview, name}) => {
    return (
        <div>
            <b>{name}</b>
            <img src={'/static/fitting' + preview} alt={name} />
        </div> 
    );
}
 
export default ShipPreview;