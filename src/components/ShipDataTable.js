import React from 'react';
import styled from 'styled-components';

const StyledTable = styled.table`
    width: 40%;
    color: white;
    th {
      background-color: #9E9E9E;
      padding: 5px;
    };
    tbody tr td:nth-child(2n+1) {
      text-align: left;
    }
    tbody tr td:nth-child(2n) {
      text-align: right;
    }
`;

const DataTable = ( props ) => {
  const data = props.data || {};
  return (
      <StyledTable>
        <tbody>
        <tr>
          <th colSpan="2">Logistical</th>
          <th colSpan="2">Combat</th>
          <th colSpan="2">Movement</th>
        </tr>
        <tr>
          <td>Hull size</td>
          <td>{ data.hull_size }</td>
          <td>Hitpoints</td>
          <td>{ data.hitpoints }</td>
          <td>Max speed</td>
          <td>{data.max_speed}</td>
        </tr>
        <tr>
          <td>Supplies per month</td>
          <td>{ data.supplies_month }</td>
          <td>Armor rating</td>
          <td>{ data.armor_rating }</td>
          <td>Acceleration</td>
          <td>{data.acceleration}</td>
        </tr>
        <tr>
          <td>Fuel/Per light year</td>
          <td>{ data.fuel }/{ data.fuel_ly }</td>
          <td>Flux</td>
          <td>{ data.max_flux }</td>
          <td>Deceleration</td>
          <td>{data.deceleration}</td>
        </tr>
        <tr>
          <td>Cargo</td>
          <td>{ data.cargo }</td>
          <td>Flux dissipation</td>
          <td>{ data.flux_dissipation }</td>
          <td>Max turn rate</td>
          <td>{data.max_turn_rate}</td>
        </tr>
        <tr>
          <td>Min/Max crew</td>
          <td>{ data.min_crew }/{ data.max_crew }</td>
          <td>Shield type</td>
          <td>{data.shield_type}</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Mass</td>
          <td>{ data.mass }</td>
          <td>Shield efficiency</td>
          <td>{data.shield_efficiency}</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Max burn</td>
          <td>{ data.max_burn }</td>
          <td>Shield arc</td>
          <td>{data.shield_arc}</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>Shield upkeep</td>
          <td>{data.shield_upkeep}</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>Fighter bays</td>
          <td>{data.fighter_bays}</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        </tbody>
      </StyledTable>
      // <StyledTable>
      //     <colgroup >
      //         <col span="2" />
      //         <col span="2" />
      //         <col span="2" />
      //     </colgroup>
      //     <thead>
      //         <tr>
      //             <th colSpan="2">Logistical</th>
      //             <th colSpan="2">Combat</th>
      //             <th colSpan="2">Movement</th>
      //         </tr>
      //     </thead>
      //     <tbody>
      //         {/*Logistical*/}
      //         <td>
      //             <tr>Hull size</tr>
      //             <tr>Supplies per month</tr>
      //             <tr>Fuel/Per light year </tr>
      //             <tr>Cargo</tr>
      //             <tr>Min/Max crew</tr>
      //             <tr>Mass</tr>
      //             <tr>Max burn</tr>
      //         </td>
      //         <td>
      //             <tr>{data.hull_size}</tr>
      //             <tr>{data.supplies_month}</tr>
      //             <tr>{data.fuel}/{data.fuel_ly}</tr>
      //             <tr>{data.cargo}</tr>
      //             <tr>{data.min_crew}/{data.max_crew}</tr>
      //             <tr>{data.mass}</tr>
      //             <tr>{data.max_burn}</tr>
      //
      //         </td>
      //         {/*Combat*/}
      //         <td>
      //             <tr>Hitpoints</tr>
      //             <tr>Armor rating</tr>
      //             <tr>Flux</tr>
      //             <tr>Flux dissipation</tr>
      //             <tr>Shield type</tr>
      //             <tr>Shield efficiency</tr>
      //             <tr>Shield arc</tr>
      //             <tr>Shield upkeep</tr>
      //             <tr>Fighter bays</tr>
      //         </td>
      //         <td>
      //             <tr>{data.hitpoints}</tr>
      //             <tr>{data.armor_rating}</tr>
      //             <tr>{data.max_flux}</tr>
      //             <tr>{data.flux_dissipation}</tr>
      //             <tr>{data.shield_type}</tr>
      //             <tr>{data.shield_efficiency}</tr>
      //             <tr>{data.shield_arc}</tr>
      //             <tr>{data.shield_upkeep}</tr>
      //             <tr>{data.fighter_bays}</tr>
      //         </td>
      //         {/*Movement*/}
      //         <td>
      //             <tr>Max speed</tr>
      //             <tr>Acceleration</tr>
      //             <tr>Deceleration</tr>
      //             <tr>Max turn rate</tr>
      //
      //         </td>
      //         <td>
      //             <tr>{data.max_speed}</tr>
      //             <tr>{data.acceleration}</tr>
      //             <tr>{data.deceleration}</tr>
      //             <tr>{data.max_turn_rate}</tr>
      //
      //         </td>
      //     </tbody>
      // </StyledTable>
  );
}


export default DataTable;
