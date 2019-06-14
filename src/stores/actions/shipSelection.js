import * as actionTypes from './actionTypes';

export const selectShip = ( ship ) => {
    return {
        type: actionTypes.SELECT_SHIP,
        ship: ship
    }
};
