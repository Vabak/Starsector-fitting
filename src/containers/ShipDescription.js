import React , { Component }from 'react';
import styled from 'styled-components';
import ShipSprite from '../components/UI/ShipSprite';
import ShipPreview from '../components/ShipPreview';
import ShipDataTable from '../components/ShipDataTable';

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
    componentDidMount() {
        this.scrollToMyRef()
    }
    scrollRef = React.createRef();
    scrollToMyRef = () => window.scrollTo(0, this.scrollRef.current.offsetTop)
    render() { 
            const ship = this.props.ships.find( ship => {
        return ship.hull_id === this.props.selectedShip
    })
            return (
        ( this.props.selectedShip ) ?
            <StyledDescription ref={this.scrollRef}>
                <ShipSprite 
                    unsized
                    onClick={null}
                    className="disabled"
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

// const ShipDescription = ( props ) => {

//     const ship = props.ships.find( ship => {
//         return ship.hull_id === props.selectedShip
//     })
//     return (
//         ( props.selectedShip ) ?
//             <StyledDescription>
//                 <ShipPreview onClick={null}
//                     className="disabled"
//                     name={ ship.ship_name }
//                     preview={ ship.sprite_name } />
//                 <p>{ ship.description }</p>
//                 <ShipDataTable data={ship} />
//             </StyledDescription>
//             :
//             null
//     );
// }

// export default ShipDescription;
