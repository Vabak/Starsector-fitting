import React from 'react';
import ShipPreview from '../../components/ShipPreview';
import { connect } from 'react-redux';
import styled from 'styled-components';

const StyledPreviewList = styled.div`
    height: 50%;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    align-items: center;
    justify-content: space-around;
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