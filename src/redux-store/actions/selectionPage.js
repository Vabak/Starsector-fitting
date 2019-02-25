import * as actionTypes from './actionTypes'
import axios from '../../axios-base';

// export const fetchStylesStart = () => {
//     return {
//         type: actionTypes.FETCH_SHIP_STYLES_START
//     }
// }

// export const fetchStylesFail = (error) => {
//     return {
//         type: actionTypes.FETCH_SHIP_STYLES_FAIL,
//         error: error
//     }
// }

// export const fetchStylesSuccess = () => {
//     return {
//         type: actionTypes.FETCH_SHIP_STYLES_SUCCESS
//     }
// }

// export const fetchStyles = () => {
//     return dispatch => {
//         dispatch(fetchStylesStart());
//         const queryParams = '';
//         axios.get(queryParams)
//             .then(res => {
//                 const fetchedMods = [];
//                 dispatch(fetchStylesSuccess(fetchedMods));
//             })
//             .catch(err => {
//                 dispatch(fetchStylesFail(err))
//             })
//     }
// };

export const fetchShipsByParam = (param) => {
    console.log('fetch')
    return dispatch => {
        dispatch(fetchShipsByParamStart());
        console.log('fetchStart')
        axios.get(param)
            .then(res => {
                const fetchedShips = res.data.results;
                dispatch(fetchShipsByParamSuccess(fetchedShips));
            })
            .catch(err => {
                dispatch(fetchShipsByParamFail(err))
            })
    }
}

export const fetchShipsByParamStart = () => {
    return {
        type: actionTypes.FETCH_SHIPS_BY_PARAM_START
    }
}

export const fetchShipsByParamFail = (error) => {
    return {
        type: actionTypes.FETCH_SHIPS_BY_PARAM_FAIL,
        error: error
    }
}

export const fetchShipsByParamSuccess = (fetchedShips) => {
    return {
        type: actionTypes.FETCH_SHIPS_BY_PARAM_SUCCESS,
        ships: fetchedShips
    }
}