export default function petReducer(state = {}, action) {
    switch (action.type) {
    case 'SET_PETS': {
        return { ...state, petList: action.payload };
    }

    default:
        return state;
    }
}
