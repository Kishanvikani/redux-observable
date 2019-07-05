
export const fetchPets = (status) => {
    console.log('%cFetch Action Called', 'color: yellow; font-size: 20px')
    return { type: 'GET_PETS', payload: status };
} 

export const setPets = (petList) => {
    console.log('%cSet Action Called', 'color: yellow; font-size: 20px')
    return { type: 'SET_PETS', payload: petList}
}

export const filterPets = (name) => {
    console.log('%cFilter Action Called', 'color: yellow; font-size: 20px')   
    return ({ type: 'FILTER_PETS', payload: name})
}
