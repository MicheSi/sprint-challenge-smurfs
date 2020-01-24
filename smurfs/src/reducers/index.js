import { FETCHING_SMURF_START, FETCHING_SMURF_SUCCESS, FETCHING_SMURF_FAIL } from "../actions";


const initialState = {
    isLoading: false,
    error: '',
    smurfs: []
    // name: '',
    // age: [],
    // height: '',
    // id: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_SMURF_START:
            return {
                ...state,
                isLoading: true
            }
        case FETCHING_SMURF_SUCCESS:
            return {
                ...state,
                isLoading: false,
                smurfs: action.payload
                // name: action.payload,
                // age: action.payload,
                // height: action.payload,
                // id: action.payload,
            }
        case FETCHING_SMURF_FAIL:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}