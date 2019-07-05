export default function petReducer(state = {}, action) {
    switch (action.type) {
    case 'SET_PETS': {
        console.log('%cSet Reducer Called', 'color: white; font-size: 20px')
        return { ...state, petList: action.payload };
    }

    default:
        return state;
    }
}
