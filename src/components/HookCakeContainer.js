import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyCake } from './../redux';

const HookCakeContainer = () => {
    const numOfCakes = useSelector(state => state.cake.numOfCakes);
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Number of cakes - {numOfCakes}</h1>
            <button onClick={() => dispatch(buyCake())}>buy cake</button>
        </div>
    );
};

export default HookCakeContainer;