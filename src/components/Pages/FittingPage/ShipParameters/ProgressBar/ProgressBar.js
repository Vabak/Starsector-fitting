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
  width: ${ props => props.statusValue};
  height: 100%;
  background-color: #1ca8ff;
`;

const ProgressText = styled.span`
  font-weight: bold;
  font-size: 14px;
  line-height: 14px;
  text-transform: uppercase;
  position: absolute;
  left: 50%;
  top: 25%;
`;


const ProgressBar = () => {
  return (
      <Progress>
        <ProgressStatus statusValue={"25%"}/>
        <ProgressText>25</ProgressText>
      </Progress>
  );
};

export default ProgressBar;
