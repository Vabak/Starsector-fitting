import * as actionTypes from './actionTypes';
import axios from '../../axios-base';

export const fetchWeaponsByParamStart = () => {
  return {
    type: actionTypes.FETCH_WEAPONS_BY_PARAM_START
  }
};

export const fetchWeaponsByParamFail = ( error ) => {
  return {
    type: actionTypes.FETCH_WEAPONS_BY_PARAM_FAIL,
    error: error
  }
};

export const fetchWeaponsByParamSuccess = ( fetchedWeapons ) => {
  return {
    type: actionTypes.FETCH_WEAPONS_BY_PARAM_SUCCESS,
    availableWeapons: fetchedWeapons
  }
};

export const fetchWeaponsByParam = ( param ) => {
  return dispatch => {
    dispatch( fetchWeaponsByParamStart() );
    axios.get( param )
        .then( res => {
          const fetchedWeapons = Array.from( res.data );
          dispatch( fetchWeaponsByParamSuccess( fetchedWeapons ) )
        } )
        .catch( error => {
          dispatch( fetchWeaponsByParamFail( error ) )
        } )
  }
};

export const selectWeapon = ( slotId, selectedWeapon ) => {
  return {
    type: actionTypes.SELECT_WEAPON,
    slotId: slotId,
    selectedWeapon: selectedWeapon,
  }
}