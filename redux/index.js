const redux = require('redux');
const reduxLogger = require('redux-logger');



const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger()

const BUY_CAKE = "BUY_CAKE";
const BUY_ICE_CREAM = "BUY_ICE_CREAM";

const buyCake = () => {
    return ({
        type: BUY_CAKE,
        info:'first redux action'
    })
}
const buyIceCream = () => {
    return ({
        type: BUY_ICE_CREAM
    })
}

// (previous state,action)=>newState;

// const initialState = {
//     numOfCakes: 10,
//     numOfIceCreams: 20,
// }

const cakeInitialState = {
    numOfCakes: 10,
}
const iceCreamsInitialState = {
    numOfIceCreams:20,
}

// const reducer = (state=initialState, action) => {
//     switch (action.type) {
//         case BUY_CAKE: return {
//             ...state,
//             numOfCakes: state.numOfCakes - 1,
//         };
//         case BUY_ICE_CREAM: return {
//             ...state,
//             numOfIceCreams: state.numOfIceCreams-1,
//         }
            
    
//         default: return state
//     }
// }

const cakeReducer = (state=cakeInitialState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1,
        };
            
    
        default: return state
    }
}

const iceCreamReducer = (state=iceCreamsInitialState, action) => {
    switch (action.type) {
        case BUY_ICE_CREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams-1,
        }
            
    
        default: return state
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
})

const store = createStore(rootReducer,applyMiddleware(logger));
console.log('Initial state ', store.getState());
const unsubscribe = store.subscribe(() => console.log('Updated store', store.getState()));
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();