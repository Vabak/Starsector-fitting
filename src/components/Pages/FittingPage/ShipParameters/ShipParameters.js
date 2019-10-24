import React from 'react';
import ProgressBar from './ProgressBar/ProgressBar';
import styled from 'styled-components';

const ParametersContainer = styled.div`
  color: white;
  margin-right: 5px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 5px;
`;

const ParameterBlock = styled.div`
  margin-right: 20px;
`;

const ParamTitle = styled.span`
  display: block;
`;

const ParamValue = styled.span`
  font-size: 24px;
  color: #fbd000;
`;

const ShipParameters = ( { ship } ) => {
  console.log( ship )
  const { armor_rating, max_speed, hitpoints, ordnance_points, shield_arc, shield_efficiency } = ship;
  return (
      <ParametersContainer>
        <ProgressBar ordnancePoints = {ordnance_points}/>
        <Wrapper>
          <ParameterBlock>
            <ParamTitle>top speed</ParamTitle>
            <ParamValue>{max_speed}</ParamValue>
          </ParameterBlock>
          <ParameterBlock>
            <ParamTitle>armor</ParamTitle>
            <ParamValue>{ armor_rating }</ParamValue>
          </ParameterBlock>
          <ParameterBlock>
            <ParamTitle>hull</ParamTitle>
            <ParamValue>{hitpoints}</ParamValue>
          </ParameterBlock>
        </Wrapper>
        <Wrapper>
          <ParameterBlock>
            <ParamTitle>shield arc</ParamTitle>
            <ParamValue>{shield_arc}</ParamValue>
          </ParameterBlock>
          <ParameterBlock>
            <ParamTitle>shield flux/dam</ParamTitle>
            <ParamValue>{shield_efficiency}</ParamValue>
          </ParameterBlock>
        </Wrapper>
      </ParametersContainer>
  );
};

export default ShipParameters;
