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




export const fetchFiltersSuccess = ( filters ) => {
    console.log('filters', filters)
    console.log('filters.hullSizeOptions', filters.hullSizeOptions)
    console.log('filters.styleOptions', filters.styleOptions)
    
    
    

    return {
        type: actionTypes.FETCH_FILTERS_SUCCESS,
        hullSizeOptions: filters.hullSizeOptions,
        styleOptions: filters.styleOptions,
    }
}

export const fetchFilters = () => {
    return dispatch => {
        dispatch(fetchFiltersStart());
        const fetchedFilters = {};
        axios.get( 'filters/ships/style' )
            .then(res => {
                fetchedFilters.styleOptions = res.data.values;
                axios.get( 'filters/ships/hull_size' )
                .then(res => {
                    fetchedFilters.hullSizeOptions = Array.from(res.data.values)
                })
                dispatch(fetchFiltersSuccess( fetchedFilters ));
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