
export const fetchPets = (status) => ({ type: 'GET_PETS', payload: status });

export const setPets = (petList) => ({ type: 'SET_PETS', payload: petList});

export const filterPets = (name) => ({ type: 'FILTER_PETS', payload: name});
