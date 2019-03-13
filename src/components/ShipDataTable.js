import React from 'react';
import styled from 'styled-components';

const StyledTable = styled.table`
    width: 30%;
`;

const DataTable = ( props ) => {
    const data = props.data || {};
    return ( 
        <StyledTable>
                            <thead>
                <tr>
                    <th colSpan="2">Logistical</th>
                    <th colSpan="2">Combat</th>
                    <th colSpan="2">Movement</th>
                </tr>
                </thead>
            <tbody>
                <tr>
                    <td>Supplies per month</td>
                    <td>{data.supplies_month}</td>
                    <td>Hull size</td>
                    <td>{data.hull_size}</td>
                    <td>Max speed</td>
                    <td>{data.max_speed}</td>
                </tr>
                <tr>
                    <td>Flux dissipation</td>
                    <td>{data.flux_dissipation}</td>
                    <td>Hitpoints</td>
                    <td>{data.hitpoints}</td>
                    <td>Acceleration</td>
                    <td>{data.acceleration}</td>
                </tr>
                <tr>
                    <td>Fuel/light year </td>
                    <td>{data.fuel}/{data.fuel_ly}</td>
                    <td>Flux</td>
                    <td>{data.max_flux}</td>
                    <td>Deceleration</td>
                    <td>{data.deceleration}</td>
                </tr>
                <tr>
                    <td>Cargo</td>
                    <td>{data.cargo}</td>
                    <td>Armor rating</td>
                    <td>{data.armor_rating}</td>
                    <td>Max turn rate</td>
                    <td>{data.max_turn_rate}</td>
                </tr>
                <tr>
                    <td>Mass</td>
                    <td>{data.mass}</td>
                    <td>Shield type</td>
                    <td>{data.shield_type}</td>
                </tr>
                <tr>
                    <td>Min/Max crew</td>
                    <td>{data.min_crew}/{data.max_crew}</td>
                    <td>Shield efficiency</td>
                    <td>{data.shield_efficiency}</td>
                </tr>
                <tr>
                    <td />
                    <td />
                    <td>Shield arc</td>
                    <td>{data.shield_arc}</td>
                </tr>
                <tr>
                <td />
                    <td />
                    <td>Shield upkeep</td>
                    <td>{data.shield_upkeep}</td>
                </tr>
            </tbody>
        </StyledTable>
    );
}

 
export default DataTable;
