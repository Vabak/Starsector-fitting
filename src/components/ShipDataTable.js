import React from 'react';
import styled from 'styled-components';


const DataTable = (props) => {
    const data = props.data || [];
    return ( 
        <table>
            {props.data.map()}
        </table>
    );
}
 
export default DataTable;