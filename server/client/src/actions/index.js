// node modules
import axios from 'axios';

//  local modules
import { FETCH_USER } from './types';

//  original code
/*export const fetchUser = () => {
    return function(dispatch) {
        axios
            .get('/api/current_user')
            .then(res => dispatch({ type: FETCH_USER, payload: res }))
    }
};*/

//  refactored
//  we can remove outside {} and return, because the => contains only 1 expression
//  the following code is equivalent to the original code
export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user')
    dispatch({ type: FETCH_USER, payload: res.data });
};

//  this looks very similar to the fetchUser function BECAUSE it also uses (updates) the User model, but with the credits added
export const handleToken = (token) => async dispatch => {
    const res = await axios.post('/api/stripe', token);

    dispatch({ type: FETCH_USER, payload: res.data });
};