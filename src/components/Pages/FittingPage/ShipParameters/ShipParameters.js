import React from 'react';
import ProgressBar from './ProgressBar/ProgressBar';
import styled from 'styled-components';

const ParametersCont = styled.div`
  color: white;
  & .params-wrapper {
    display: flex;
    justify-content: flex-end;
    & span {
      padding-right: 20px;
    }
  }
`;


const ShipParameters = () => {
  return (
      <ParametersCont>
        <ProgressBar/>
        <div className={"params-wrapper"}>
          <span>top speed</span>
          <span>armor</span>
          <span>hull</span>
        </div>
      </ParametersCont>
  );
};

export default ShipParameters;
