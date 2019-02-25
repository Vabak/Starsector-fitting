import actionTypes from './actionTypes'
import axios from 'axios';

export const fetchModsStart = () => {
    return {
        type: actionTypes.FETCH_MODS_START
    }
}

export const fetchModsFail = (error) => {
    return {
        type: actionTypes.FETCH_MODS_FAIL,
        error: error
    }
}

export const fetchModsSuccess = () => {
    return {
        type: actionTypes.FETCH_MODS_SUCCESS
    }
}

export const fetchMods = () => {
    return dispatch => {
        dispatch(fetchModsStart());
        const queryParams = '';
        axios.get(queryParams)
            .then(res => {
                const fetchedMods = [];
                dispatch(fetchModsSuccess(fetchedMods));
            })
            .catch(err => {
                dispatch(fetchModsFail(err))
            })
    }
};



