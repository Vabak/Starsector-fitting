import React from 'react';
import styled from 'styled-components';


const StyledSelect = styled.select`
    display: inline-block;
    border: 2px solid #bbb;
    padding: 4px 3px 3px 5px;
    margin: 0;
    font-style: inherit;
    outline:none; 
    line-height: 1.2;
    background: #f8f8f8;
`

const Select = (props) => {
    const optionsList = props.options.map(opt => {
        return <option value={opt} key={opt}>{opt}</option>
    })
    return (
        <StyledSelect onChange={(e, id) => props.onSelect(e, props.type)} id={props.type}>
            <option value=''>Select {props.type}</option>
            {optionsList}
        </StyledSelect>
    );
}

export default Select;
