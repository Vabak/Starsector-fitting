import React from 'react';
import styled from 'styled-components';

const StyledTable = styled.table`
    width: 40%;
    thead {
        background-color: #9E9E9E;
    };
    tbody > td:nth-child(2n-1) > tr {
        text-align: left;
    };
    tbody > td:nth-child(2n) > tr {
        text-align: right;
    };
`;

const DataTable = (props) => {
    const data = props.data || {};
    return (
        <StyledTable>
            <colgroup >
                <col span="2" />
                <col span="2" />
                <col span="2" />
            </colgroup>
            <thead>
                <tr>
                    <th colSpan="2">Logistical</th>
                    <th colSpan="2">Combat</th>
                    <th colSpan="2">Movement</th>
                </tr>
            </thead>
            <tbody>
                {/*Logistical*/}
                <td>
                    <tr>Hull size</tr>
                    <tr>Supplies per month</tr>
                    <tr>Fuel/Per light year </tr>
                    <tr>Cargo</tr>
                    <tr>Min/Max crew</tr>
                    <tr>Mass</tr>
                    <tr>Max burn</tr>
                    <tr>&nbsp;</tr>
                    <tr>&nbsp;</tr>
                </td>
                <td>
                    <tr>{data.hull_size}</tr>
                    <tr>{data.supplies_month}</tr>
                    <tr>{data.fuel}/{data.fuel_ly}</tr>
                    <tr>{data.cargo}</tr>
                    <tr>{data.min_crew}/{data.max_crew}</tr>
                    <tr>{data.mass}</tr>
                    <tr>{data.max_burn}</tr>
                    <tr>&nbsp;</tr>
                    <tr>&nbsp;</tr>
                </td>
                {/*Combat*/}
                <td>
                    <tr>Hitpoints</tr>
                    <tr>Armor rating</tr>
                    <tr>Flux</tr>
                    <tr>Flux dissipation</tr>
                    <tr>Shield type</tr>
                    <tr>Shield efficiency</tr>
                    <tr>Shield arc</tr>
                    <tr>Shield upkeep</tr>
                    <tr>Fighter bays</tr>
                </td>
                <td>
                    <tr>{data.hitpoints}</tr>
                    <tr>{data.armor_rating}</tr>
                    <tr>{data.max_flux}</tr>
                    <tr>{data.flux_dissipation}</tr>
                    <tr>{data.shield_type}</tr>
                    <tr>{data.shield_efficiency}</tr>
                    <tr>{data.shield_arc}</tr>
                    <tr>{data.shield_upkeep}</tr>
                    <tr>{data.fighter_bays}</tr>
                </td>
                {/*Movement*/}
                <td>
                    <tr>Max speed</tr>
                    <tr>Acceleration</tr>
                    <tr>Deceleration</tr>
                    <tr>Max turn rate</tr>
                    <tr>&nbsp;</tr>
                    <tr>&nbsp;</tr>
                    <tr>&nbsp;</tr>
                    <tr>&nbsp;</tr>
                    <tr>&nbsp;</tr>
                </td>
                <td>
                    <tr>{data.max_speed}</tr>
                    <tr>{data.acceleration}</tr>
                    <tr>{data.deceleration}</tr>
                    <tr>{data.max_turn_rate}</tr>
                    <tr>&nbsp;</tr>
                    <tr>&nbsp;</tr>
                    <tr>&nbsp;</tr>
                    <tr>&nbsp;</tr>
                    <tr>&nbsp;</tr>
                </td>
            </tbody>
        </StyledTable>
    );
}


export default DataTable;
