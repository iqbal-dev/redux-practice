import React from 'react';
import {buyCake} from './../redux';
import {connect} from 'react-redux'

const CakeContainer = (props) => {
    return (
        <div>
            <h1>Number Of Cakes: { props.numOfCakes }</h1>
            <button onClick={()=>props.buyCake()}>Buy now</button>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        numOfCakes: state.numOfCakes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: ()=>dispatch(buyCake()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CakeContainer);