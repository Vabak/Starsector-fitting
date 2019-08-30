import React from 'react';
import styled from 'styled-components';


const SvgAngle = styled.svg`
  transform: rotate(${props => props.angle + "deg"});
  opacity: 0.6;
  height: 150px;
  width: 150px;
`;

const Angle = ( { type, angle, arc, ...props } ) => {
  const R = 57;
  const dash = 358 - arc;
  const slotArc = arc / 2;
  const slotArcRad = slotArc * 0.01745;
  const center = {
    x: 58,
    y: 58,
  };
  const rotateAngle = -90 + angle;
  const x1 = center.x + (Math.cos(slotArcRad) * R);
  const y1 = center.y + (Math.sin(slotArcRad) * R);
  const x2 = center.x + (Math.cos(-slotArcRad) * R);
  const y2 = center.y + (Math.sin(-slotArcRad) * R);
  // x1 = Math.cos(ang) * R;
  // y1 = Math.sin(ang) * R;


  return (
      <SvgAngle viewBox="0 0 116 116" angle={rotateAngle}>
        <line x1={center.x} y1={center.y} x2={x1} y2={y1} stroke="#673E93" strokeWidth="1" />
        <line x1={center.x} y1={center.y} x2={x2} y2={y2} stroke="#673E93" strokeWidth="1" />
        <circle  cx={center.x} cy={center.y} r={R} stroke="#673E93" strokeWidth="2"   strokeDasharray={`${slotArc} ${dash}`} fill="none" />
      </SvgAngle>
  );
}

export default Angle;
