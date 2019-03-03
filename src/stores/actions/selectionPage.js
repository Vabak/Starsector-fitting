import * as actionTypes from './actionTypes'
import axios from '../../axios-base';

export const fetchFiltersStart = () => {
    return {
        type: actionTypes.FETCH_FILTERS_START
    }
}

export const fetchFiltersFail = ( error ) => {
    return {
        type: actionTypes.FETCH_FILTERS_FAIL,
        error: error
    }
}

export const fetchFiltersSuccess = ( name, options ) => {
    return {
        type: actionTypes.FETCH_FILTERS_SUCCESS,
        options: options,
        filterName: name
    }
}

export const fetchFilters = ( name, url ) => {
    return dispatch => {
        dispatch(fetchFiltersStart());
        axios.get( url )
            .then(res => {
                const options = res.data.values;
                console.log('action opt', options)
                dispatch(fetchFiltersSuccess( name, options ));
            })
            .catch(err => {
                dispatch(fetchFiltersFail( err ))
            })
    }
};

export const fetchShipsByParam = ( param ) => {
    return dispatch => {
        dispatch(fetchShipsByParamStart());
        axios.get( param )
            .then(res => {
                const fetchedShips = res.data.results;
                dispatch(fetchShipsByParamSuccess( fetchedShips ));
            })
            .catch(err => {
                dispatch(fetchShipsByParamFail( err ))
            })
    }
}

export const fetchShipsByParamStart = () => {
    return {
        type: actionTypes.FETCH_SHIPS_BY_PARAM_START
    }
}

export const fetchShipsByParamFail = ( error ) => {
    return {
        type: actionTypes.FETCH_SHIPS_BY_PARAM_FAIL,
        error: error
    }
}

export const fetchShipsByParamSuccess = ( fetchedShips ) => {
    return {
        type: actionTypes.FETCH_SHIPS_BY_PARAM_SUCCESS,
        ships: fetchedShips
    }
}