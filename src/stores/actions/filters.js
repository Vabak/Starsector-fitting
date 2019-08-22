import * as actionTypes from './actionTypes'
import axios from '../../axios-base';
import { selectShip } from './shipSelection';

export const fetchFiltersStart = () => {
  return {
    type: actionTypes.FETCH_FILTERS_START
  }
};

export const fetchFiltersFail = ( error ) => {
  return {
    type: actionTypes.FETCH_FILTERS_FAIL,
    error: error
  }
};

export const fetchFiltersSuccess = ( name, options ) => {
  return {
    type: actionTypes.FETCH_FILTERS_SUCCESS,
    options: options,
    filterName: name
  }
};

export const fetchFilters = ( name, url ) => {
  return dispatch => {
    dispatch( fetchFiltersStart() );
    axios.get( url )
        .then( res => {
          const options = res.data.values;
          dispatch( fetchFiltersSuccess( name, options ) );
        } )
        .catch( err => {
          dispatch( fetchFiltersFail( err ) )
        } )
  }
};

export const fetchShipsByParam = ( param ) => {
  return dispatch => {
    dispatch( fetchShipsByParamStart() );
    axios.get( param )
        .then( res => {
          dispatch( cutPagesLinks( res.data ) );
          const fetchedShips = res.data.results;
          dispatch( selectShip( null ) );
          dispatch( fetchShipsByParamSuccess( fetchedShips ) );
        } )
        .catch( err => {
          dispatch( fetchShipsByParamFail( err ) )
        } )
  }
};

const cutPagesLinks = ( data ) => {
  return dispatch => {
    let previous = data.previous;
    let next = data.next;
    if ( previous ) {
      previous = previous.slice( previous.lastIndexOf( '/' ) )
    }
    if ( next ) {
      next = next.slice( next.lastIndexOf( '/' ) )
    }

    dispatch( paginationHandler( previous, next ) )
  }
};

export const fetchShipsByParamStart = () => {
  return {
    type: actionTypes.FETCH_SHIPS_BY_PARAM_START
  }
};

export const fetchShipsByParamFail = ( error ) => {
  return {
    type: actionTypes.FETCH_SHIPS_BY_PARAM_FAIL,
    error: error
  }
};

export const fetchShipsByParamSuccess = ( fetchedShips ) => {
  return {
    type: actionTypes.FETCH_SHIPS_BY_PARAM_SUCCESS,
    ships: fetchedShips
  }
};

export const paginationHandler = ( previous, next ) => {
  return {
    type: actionTypes.PAGINATION_HANDLER,
    previousPage: previous,
    nextPage: next
  }
};
