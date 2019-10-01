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

export const chooseColor = ( type ) => {
  let color;
  switch ( type ) {
    case 'ENERGY':
      color = 'blue';
      break;
    case 'BALLISTIC':
      color = 'yellow';
      break;
    case 'MISSILE':
      color = 'green';
      break;
    default:
      color = 'white';
  }
  return color
}