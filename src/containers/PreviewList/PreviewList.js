import React from 'react';
import ShipPreview from '../../components/ShipPreview/ShipPreview';
import { connect } from 'react-redux';
import styled from 'styled-components';

const StyledPreviewList = styled.div`
    flex-grow: 3;
    display: flex;
    flex-direction: row;
`


const PreviewList = (props) => {
    const List = props.ships.map(ship => 
                    <ShipPreview 
                        name={ship.ship_name} 
                        preview={ship.sprite_name}
                        key={ship.ship_name} />)
    return (
        <StyledPreviewList>
        {List}
        </StyledPreviewList>
    );
}

const mapStateToProps = state => {
    return {
        ships: state.ships
    }
}

export default connect(mapStateToProps)(PreviewList);