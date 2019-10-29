import React from 'react';
import styled from 'styled-components';

const Progress = styled.div`
  width: 300px;
  height: 30px;
  box-sizing: border-box;
  background-color: #042c49;
  position: relative;
  border: 1px solid #67e5ff;
`;

const ProgressStatus = styled.div`
  width: ${ props => props.progressValue};
  height: 100%;
  background-color: #1ca8ff;
`;

const ProgressText = styled.span`
  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;
  position: absolute;
  left: 45%;
  top: 27%;
`;


const ProgressBar = ({ordnancePoints}) => {
  return (
      <Progress>
        <ProgressStatus progressValue={"25%"}/>
        <ProgressText>0/{ordnancePoints}</ProgressText>
      </Progress>
  );
};

export default ProgressBar;
