import React from 'react';
import styles from './Select.module.css'



const Select = (props) => {
    const optionsList = props.options.map(opt => {
        return <option value={opt} key={opt}>{opt}</option>
    })
    return (
        <select className={styles.Select}>
            <option value='null'>Select {props.field}</option>
            {optionsList}
        </select>
    );
}

export default Select;