import { updateObject } from '../../utility/utility';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
  availableWeapons: [],
  selectedWeapons: {},
  error: null,
};

const fetchWeaponsStart = ( state, action ) => {
  return updateObject( state, action );
};

const fetchWeaponsFail = ( state, action ) => {
  return updateObject( state, action );
};

const fetchWeaponsSuccess = ( state, action ) => {
  return updateObject( state, {
    availableWeapons: action.availableWeapons
  } );
};

const selectWeapon = ( state, action ) => {
  return updateObject( state, {
    selectedWeapons: {
      ...state.selectedWeapons,
      [action.slotId]: action.selectedWeapon,
    }
  } )
}

const reducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case actionTypes.FETCH_WEAPONS_BY_PARAM_START:
      return fetchWeaponsStart( state, action );
    case actionTypes.FETCH_WEAPONS_BY_PARAM_FAIL:
      return fetchWeaponsFail( state, action );
    case actionTypes.FETCH_WEAPONS_BY_PARAM_SUCCESS:
      return fetchWeaponsSuccess( state, action );
    case actionTypes.SELECT_WEAPON:
      return selectWeapon( state, action );
    default:
      return state;
  }
};

export default reducer;