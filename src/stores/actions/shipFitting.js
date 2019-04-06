import * as actionTypes from './actionTypes';
import axios from '../../axios-base';

export const fetchWeaponsByParamStart = () => {
    return {
        type: actionTypes.FETCH_WEAPONS_BY_PARAM_START
    }
}

export const fetchWeaponsByParamFail = ( error ) => {
    return {
        type: actionTypes.FETCH_WEAPONS_BY_PARAM_FAIL,
        error: error
    }
}

export const fetchWeaponsByParamSuccess = ( fetchedWeapons ) => {
    return {
        type: actionTypes.FETCH_WEAPONS_BY_PARAM_SUCCESS,
        weapons: fetchedWeapons
    }
}

// need to combine fetch weapons and ships func in one.
export const fetchWeaponsByParam = ( params ) => {
    const weapons = [];
    return dispatch => {
        dispatch(fetchWeaponsByParamStart());
        params.map( param => {
            axios.get( param )
            .then(res => {
                weapons.push(res.data.results);
            })
            .catch(err => {
                dispatch( fetchWeaponsByParamFail( err ))
            })    
        })
        dispatch( fetchWeaponsByParamSuccess( weapons ));
    }
}