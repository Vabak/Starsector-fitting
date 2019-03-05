import { updateObject } from '../../utility/utility';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    selectedShip: null,
    error: null,
}

export const selectShip = ( state, action ) => {
    return updateObject( state, {
        selectedShip: action.shipId
    })
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SELECT_SHIP: return selectShip( state, action )
        default: return state;
    }
}

export default reducer;