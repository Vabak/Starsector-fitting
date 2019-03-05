import * as actionTypes from './actionTypes';
// import axios from 'axios';

export const selectShip = ( shipId ) => {
    return {
        type: actionTypes.SELECT_SHIP,
        shipId: shipId
    }
}

// fetch the single ship is don't need, cause we already had data from fetchShips,
// maybe use it later. 

// export const fetchSelectedShip = ( shipId ) => {
//     return dispatch => {
//         dispatch(fetchSelectedShipStart());
//         const url = `/ships/ + ${shipId}`
//         axios.get( '/ships/' )
//             .then(res => {
//                 console.log(res)
//                 const shipData = res.data.values;
//                 dispatch(fetchSelectedShipSuccess( shipData ));
//             })
//             .catch(err => {
//                 dispatch(fetchSelectedShipFail( err ))
//             })
//     }
// }

// export const fetchSelectedShipStart = () => {
//     return {
//         type: actionTypes.FETCH_SHIPS_BY_PARAM_START
//     }
// }

// export const fetchSelectedShipFail = ( error ) => {
//     return {
//         type: actionTypes.FETCH_SHIPS_BY_PARAM_FAIL,
//         error: error
//     }
// }

// export const fetchSelectedShipSuccess = ( shipData ) => {
//     return {
//         type: actionTypes.FETCH_SHIPS_BY_PARAM_SUCCESS,
//         shipData: shipData
//     }
// }