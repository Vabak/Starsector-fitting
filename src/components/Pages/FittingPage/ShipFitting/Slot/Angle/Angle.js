import React from 'react';
import styled from 'styled-components';


const SvgAngle = styled.svg`
  top: -75px;
  left: -68px;
  position: absolute;
  transform: rotate(${ props => props.angle + "deg" });
  height: 150px;
  width: 150px;
  pointer-events: none;
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
  // const largeArcFlag = (arc >= 180) ? 1 : 0;
  // const sweepFlag = (angle <= 180) ? 0 : 1;
  const rotateAngle = -90 - angle;
  const x1 = center.x + ( Math.cos( slotArcRad ) * R );
  const y1 = center.y + ( Math.sin( slotArcRad ) * R );
  const x2 = center.x + ( Math.cos( -slotArcRad ) * R );
  const y2 = center.y + ( Math.sin( -slotArcRad ) * R );
  // const arcPath = `M${x1} ${y1} A 57 57, ${angle}, ${largeArcFlag}, ${sweepFlag}, ${x2} ${y2}`


  return (
      <SvgAngle viewBox="0 0 116 116" angle={ rotateAngle }>
           {/*unknown bug with color**/}
          {/*<linearGradient id="opacity-gradient" >*/}
          {/*  <stop  stopOpacity="0.2" stopColor={ color } offset="0%"/>*/}
          {/*  <stop  stopOpacity="1" stopColor={ color } offset="20%"/>*/}
          {/*  <stop  stopOpacity="1" stopColor={ color } offset="80%"/>*/}
          {/*  <stop  stopOpacity="0.2" stopColor={ color } offset="100%"/>*/}
          {/*</linearGradient>*/}
          <line x1={ center.x } y1={ center.y } x2={ x1 } y2={ y1 }  stroke={ color } strokeWidth="2"/>
          <line x1={ center.x } y1={ center.y } x2={ x2 } y2={ y2 } stroke={ color } strokeWidth="2"/>
          <circle cx={ center.x } cy={ center.y } r={ R } stroke={ color } strokeWidth="2"
                  strokeDasharray={ `${ slotArc } ${ dash }` } fill="none"/>
          {/*<path d={arcPath} fill="none"  strokeWidth="2"/>*/}
      </SvgAngle>
  );
}

export default Angle;
