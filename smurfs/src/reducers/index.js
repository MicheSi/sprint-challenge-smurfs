import { FETCHING_SMURF_START } from "../actions";


const initialState = {
    isLoading: false,
    error: '',
    name: '',
    age: [],
    height: '',
    id: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_SMURF_START:
            return {
                ...state,
                isLoading: true
            }
        default:
            return state;
    }
}