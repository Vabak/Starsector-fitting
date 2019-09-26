export const updateObject = ( oldObject, updatedProperties ) => {
  return Object.assign({}, oldObject, updatedProperties)
};

export const createAction = ( type, payload ) => {
    return {
        type: type,
        payload
    }
}

export const baseURL = 'http://127.0.0.1:8000/';