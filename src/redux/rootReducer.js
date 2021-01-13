import { combineReducers } from "redux";
import reducer from './cake/cakeReducer';
import iceCreamReducer from './iceCream/iceCreamReducer';

const rootReducer = combineReducers({
    cake: reducer,
    iceCream:iceCreamReducer
})
export default rootReducer;