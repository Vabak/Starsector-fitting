import React from 'react';
import styled from 'styled-components';

const StyledTable = styled.table`
    width: 30%;
`;

const DataTable = ( props ) => {
    const data = props.data || {};
    return ( 
        <StyledTable>
            <tbody>
                <tr>
                    <th>Logistical data</th>
                    <th>Combat data</th>
                </tr>
                <tr>
                    <td>Hull size</td>
                    <td>{data.hull_size}</td>
                </tr>
                <tr>
                    <td>Hitpoints</td>
                    <td>{data.hitpoints}</td>
                </tr>
                <tr>
                    <td>Flux</td>
                    <td>{data.max_flux}</td>
                </tr>
                <tr>
                    <td>Armor rating</td>
                    <td>{data.armor_rating}</td>
                </tr>
                <tr>
                    <td>Max speed</td>
                    <td>{data.max_speed}</td>
                </tr>
                <tr>
                    <td>Acceleration</td>
                    <td>{data.acceleration}</td>
                </tr>
                <tr>
                    <td>Deceleration</td>
                    <td>{data.deceleration}</td>
                </tr>
                <tr>
                    <td>Max turn rate</td>
                    <td>{data.max_turn_rate}</td>
                </tr>
                <tr>
                    <td>Cargo</td>
                    <td>{data.cargo}</td>
                </tr>
                <tr>
                    <td>Supplies per month</td>
                    <td>{data.supplies_month}</td>
                </tr>
                <tr>
                    <td>Flux dissipation</td>
                    <td>{data.flux_dissipation}</td>
                </tr>
                <tr>
                    <td>Fuel/light year </td>
                    <td>{data.fuel}/{data.fuel_ly}</td>
                </tr>
                <tr>
                    <td>Mass</td>
                    <td>{data.mass}</td>
                </tr>
                <tr>
                    <td>Min/Max crew</td>
                    <td>{data.min_crew}/{data.max_crew}</td>
                </tr>
                <tr>
                    <td>Shield type</td>
                    <td>{data.shield_type}</td>
                </tr>
                <tr>
                    <td>Shield efficiency</td>
                    <td>{data.shield_efficiency}</td>
                </tr>
                <tr>
                    <td>Shield arc</td>
                    <td>{data.shield_arc}</td>
                </tr>
                <tr>
                    <td>Shield upkeep</td>
                    <td>{data.shield_upkeep}</td>
                </tr>
            </tbody>
        </StyledTable>
    );
}

 
export default DataTable;