import React from 'react';
import styled from 'styled-components';


const DataTable = ( props ) => {
    const data = props.data || {};
    return ( 
        <table>
            <tbody>
            { Object.keys(data).map(key => {
                if ( ( typeof data[key] !== 'string' )  && 
                     ( typeof data[key] !== 'number' )) { return null }

                return (
                    <tr key={ key }>
                        <td>{ key }</td>
                        <td>{ data[key] }</td>      
                    </tr>
                )
            })}
            </tbody>
        </table>
    );
}
 
export default DataTable;