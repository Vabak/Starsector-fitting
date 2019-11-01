import React , { Component }from 'react';
import styled from 'styled-components';
import ShipSprite from '../../../../UI/ShipSprite';
import ShipPreview from '../Previews/ShipPreview/ShipPreview';
import ShipDataTable from '../../../../ShipDataTable';

const StyledDescription = styled.div`
    height: auto;
    margin: 20px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    p {
        display: block;
        width: 30%;
    }
`;


class ShipDescription extends Component {
    componentDidUpdate(prevProps, prevState) {
        if ( prevProps.selectedShip.hull_id !== this.props.hull_id ) {        
            this.scrollToMyRef()
        }
    }
    componentDidMount() {
        this.scrollToMyRef()
    }
    scrollRef = React.createRef();
    scrollToMyRef = () => window.scrollTo(0, this.scrollRef.current.offsetTop);
    render() {
        const ship = Object.assign({}, this.props.selectedShip);
        return (
            ( this.props.selectedShip ) ?
                <StyledDescription ref={this.scrollRef}>
                    <ShipSprite 
                        unsized
                        name={ ship.ship_name }
                        preview={ ship.sprite_name } />
                    <p>{ ship.description }</p>
                    <ShipDataTable data={ship} />
                </StyledDescription>
                :
                null
        );
    } 
}
 
export default ShipDescription;
