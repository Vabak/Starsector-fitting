import React from 'react';
import ShipPreview from '../../components/ShipPreview/ShipPreview';
import { connect } from 'react-redux'

const PreviewList = (props) => {
    const List = props.ships.map(ship => 
                    <ShipPreview 
                        name={ship.ship_name} 
                        preview={ship.sprite_name}
                        key={ship.ship_name} />)
    return (
        <div>
        {List}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        ships: state.ships
    }
}

export default connect(mapStateToProps)(PreviewList);