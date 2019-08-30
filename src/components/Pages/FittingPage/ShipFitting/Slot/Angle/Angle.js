import React from 'react';
import styled from 'styled-components';


const SvgAngle = styled.svg`
  top: -75px;
  left: -68px;
  position: absolute;
  transform: rotate(${ props => props.angle + "deg" });
  height: 150px;
  width: 150px;
  pointer-events:none;
`;

const Angle = ( { type, angle, arc, color, ...props } ) => {
  const R = 57;
  const dash = 358 - arc;
  const slotArc = arc / 2;
  const slotArcRad = slotArc * 0.01745;
  const center = {
    x: 58,
    y: 58,
  };
  const rotateAngle = -90 - angle;
  const x1 = center.x + ( Math.cos( slotArcRad ) * R );
  const y1 = center.y + ( Math.sin( slotArcRad ) * R );
  const x2 = center.x + ( Math.cos( -slotArcRad ) * R );
  const y2 = center.y + ( Math.sin( -slotArcRad ) * R );


  return (
      <SvgAngle viewBox="0 0 116 116" angle={ rotateAngle }>
        <defs>
          <linearGradient id="opacity">
            <stop offset="0" stop-opacity="0.2" stop-color={color} />
            <stop offset=".5" stop-opacity="1" stop-color={color} />
            <stop offset="1" stop-opacity="0.2" stop-color={color} />
          </linearGradient>
        </defs>
        <line x1={ center.x } y1={ center.y } x2={ x1 } y2={ y1 } fill={color} stroke="url(#opacity)" strokeWidth="2"/>
        <line x1={ center.x } y1={ center.y } x2={ x2 } y2={ y2 } stroke="url(#opacity)" strokeWidth="2"/>
        <circle cx={ center.x } cy={ center.y } r={ R } stroke={color} strokeWidth="1"
                strokeDasharray={ `${ slotArc } ${ dash }` } fill="none" />
      </SvgAngle>
  );
}

export default Angle;
