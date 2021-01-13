import {BUY_ICE_CREAM} from './typeOfIceCream'

const iceCreamsInitialState = {
    numOfIceCreams: 20,
}

const iceCreamReducer = (state = iceCreamsInitialState, action) => {
    switch (action.type) {
        case BUY_ICE_CREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1,
        }
    
        default:return state
    }
}

export default iceCreamReducer;