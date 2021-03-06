import { updateObject } from '../../utility/utility';
import * as actionTypes from '../actions/actionTypes';


const initialState = {
    ships: [],
    styleOptions: [],
    hullSizeOptions: [],
    error: null,
}

const fetchFiltersStart = ( state, action ) => {
    return updateObject( state, action );
}

const fetchFiltersFail = ( state, action ) => {
    return updateObject( state, action );
}

const fetchFiltersSuccess = ( state, action ) => {
    return updateObject( state, {
        [action.filterName]: action.options,
        selectedShip: null
    } );
}

const fetchShipsByParamStart = ( state, action ) => {
    return updateObject( state, action );
}

const fetchShipsByParamFail = ( state, action ) => {
    return updateObject( state, action );
}

const fetchShipsByParamSuccess = ( state, action ) => {
    return updateObject( state, {
        ships: action.fetchedShips
    } );
}

const setPagination = ( state, action ) => {
    return updateObject( state, {
        previous: action.previousPage,
        next: action.nextPage
    })
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.FETCH_SHIPS_BY_PARAM_START: return fetchShipsByParamStart( state, action );
        case actionTypes.FETCH_SHIPS_BY_PARAM_FAIL: return fetchShipsByParamFail( state, action );
        case actionTypes.FETCH_SHIPS_BY_PARAM_SUCCESS: return fetchShipsByParamSuccess( state, action );
        case actionTypes.FETCH_FILTERS_START: return fetchFiltersStart( state, action );
        case actionTypes.FETCH_FILTERS_FAIL: return fetchFiltersFail( state, action );
        case actionTypes.FETCH_FILTERS_SUCCESS: return fetchFiltersSuccess( state, action );
        case actionTypes.PAGINTATION_HANDLER: return setPagination( state, action );
        default: return state;
    }
}

export default reducer;