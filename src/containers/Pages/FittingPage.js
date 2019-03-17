import React from 'react';
import styled from 'styled-components';

const StyledPage = styled.div`
    display: flex;
    flex-direction: row;
`;

const FittingPage = ( props ) => {
    return (
        <StyledPage>
            <div>Filters</div>
            <div>Ship</div>
            <div>Paremeters</div> 
        </StyledPage>
    );
}
 
export default FittingPage;