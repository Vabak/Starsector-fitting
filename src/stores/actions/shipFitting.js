export const fetchWeaponsByParamStart = () => {
    return {
        type: actionTypes.FETCH_WEAPONS_BY_PARAM_START
    }
}

export const fetchWeaponsByParamFail = ( error ) => {
    return {
        type: actionTypes.FETCH_WEAPONS_BY_PARAM_FAIL,
        error: error
    }
}

export const fetchWeaponsByParamSuccess = ( fetchedWeapons ) => {
    return {
        type: actionTypes.FETCH_WEAPONS_BY_PARAM_SUCCESS,
        weapons: fetchedWeapons
    }
}

// need to combine fetch weapons and ships func in one.
export const fetchWeaponsByParam = ( param ) => {
    return dispatch => {
        dispatch(fetchWeaponsByParamStart());
        axios.get( param )
            .then(res => {
                console.log(res.data)
                dispatch ( cutPagesLinks( res.data ) );
                const fetchedWeapons = res.data.results;
                dispatch( selectShip( null ));
                dispatch( fetchWeaponsByParamSuccess( fetchedWeapons ));
            })
            .catch(err => {
                dispatch( fetchWeaponsByParamFail( err ))
            })
    }
}