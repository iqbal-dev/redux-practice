import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {buyIceCream} from './../redux'

const IceCreamContainer = () => {
    const iceCream = useSelector(state => state.iceCream.numOfIceCreams);
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Number Of Ice Cream: { iceCream }</h1>
            <button onClick={()=>dispatch(buyIceCream())}>Buy Ice Cream</button>
        </div>
    );
};

export default IceCreamContainer;