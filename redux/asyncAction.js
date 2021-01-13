const redux = require('redux');
const thunkMiddleware = require('redux-thunk').default;
const axios = require('axios');

const applyMiddleware = redux.applyMiddleware;
const createStore = redux.createStore;
const initialState = {
    loading: true,
    users: [],
    error:''
}

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
const FETCH_USER_ERROR = 'FETCH_USER_ERROR';

const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST,
    }
}

const fetchUsersSuccess = (user) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: user
    }
}

const fetchUsersError = (error) => {
    return {
        type: FETCH_USER_ERROR,
        payload: error
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state
            }
        case FETCH_USER_SUCCESS: return {
            loading: false,
            user: action.payload,
            error:''
        }
        case FETCH_USER_ERROR: return {
            loading: false,
            user: [],
            error: action.payload
        }
    
        default:
    }
}

const fetchData = () => {
    return async function (dispatch) {
        dispatch(fetchUsersRequest());
        await axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                const users = response.data.map(user => user.name);
                dispatch(fetchUsersSuccess(users))
            })
            .catch(error => {
                dispatch(fetchUsersError(error));
        })
    }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
store.subscribe(() => { console.log(store.getState()) });
store.dispatch(fetchData());