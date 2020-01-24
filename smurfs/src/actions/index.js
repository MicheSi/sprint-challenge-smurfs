import axios from 'axios';

// fetching
export const FETCHING_SMURF_START = 'FETCHING_SMURF_START';
export const FETCHING_SMURF_SUCCESS = 'FETCHING_SMURF_SUCCESS';
export const FETCHING_SMURF_FAIL = 'FETCHING_SMURF_FAIL';
// posting

export const POSTING_SMURF_START = 'POSTING_SMURF_START';
export const POSTING_SMURF_SUCCESS = 'POSTING_SMURF_SUCCESS';
export const POSTING_SMURF_FAIL = 'POSTING_SMURF_FAIL';

// fetching smurf data
export const fetchSmurf = () => dispatch => {
    dispatch({type: FETCHING_SMURF_START});
    axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
        console.log('this is my data', res.data[0])
        dispatch({type: FETCHING_SMURF_SUCCESS, payload: res.data[0]})
    })
    .catch(err =>
        dispatch({type: FETCHING_SMURF_FAIL, payload: err})
    )
}

// posting new smurf data
export const postSmurf = (payload) => dispatch => {
    dispatch({type: POSTING_SMURF_START});
    axios
    .post('http://localhost:3333/smurfs', payload)
    .then(res => {
        console.log('new data posting', payload)
        dispatch({type: POSTING_SMURF_SUCCESS}, payload)
    })
    .catch(err =>
        dispatch({type: POSTING_SMURF_FAIL, payload: err}))
}