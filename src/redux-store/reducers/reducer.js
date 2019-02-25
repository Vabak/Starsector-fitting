import { updateObject } from '../../utility/utility';
import * as actionTypes from '../actions/actionTypes';


const initialState = {
    ships: [],
    error: null,
}

const fetchShipsByParamStart = ( state, action ) => {
    return updateObject( state, action );
};

const fetchShipsByParamFail = ( state, action ) => {
    return updateObject( state, action );
};

const fetchShipsByParamSuccess = ( state, action ) => {
    return updateObject( state, {
        ships: action.fethedShips
    } );
};

const reducer = (state = initialState, action) => {
    switch ( action.type ) {
        case actionTypes.FETCH_SHIPS_BY_PARAM_START: return fetchShipsByParamStart( state, action );
        case actionTypes.FETCH_SHIPS_BY_PARAM_FAIL: return fetchShipsByParamFail( state, action );
        case actionTypes.FETCH_SHIPS_BY_PARAM_SUCCESS: return fetchShipsByParamSuccess( state, action );
        default: return state;
    }
}

export default reducer;