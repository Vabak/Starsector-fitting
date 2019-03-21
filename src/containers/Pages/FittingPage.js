import React from 'react';
import styled from 'styled-components';
import ShipFitting from '../ShipFitting'

const StyledPage = styled.div`
    display: flex;
    flex-direction: row;
`;

const FittingPage = ( props ) => {
    return (
        <StyledPage>
            <div>Weapons</div>
            <ShipFitting />
            <div>Paremeters</div> 
        </StyledPage>
    );
}
 
export default FittingPage;