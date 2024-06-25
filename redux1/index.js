import {createStore, applyMiddleware, combineReducers} from 'redux';
import logger from 'redux-logger';
import { thunk } from 'redux-thunk';
import axios from 'axios';

// action name constants
const init = 'init'
const inc = 'increment';
const dec = 'decrement';
const incByAmt = 'incrementByAmount'

// store
const store = createStore(
    combineReducers({
        account: accountReducer,
        bonus: bonusReducer
    }), 
    applyMiddleware(logger.default, thunk.default)
);

const history = [];



// reducer
function accountReducer(state={amount:1},action) {
    
    switch(action.type){
        case init:
            return {amount: action.payload};
        case inc:
            return {amount: state.amount+1};
        case dec:
            return {amount: state.amount-1};
        case incByAmt:
            return {amount: state.amount + action.payload}
        default:
            return state
    }
}

function bonusReducer(state = {points:0}, action){
    switch(action.type){
        case inc:
            return {points: state.points + 1};
        default:
            return state;
    }
}
//     if(action.type === inc){
//         // mutable //wrong things to do
//         // state.amount = state.amount+1

//         // immutability
        
//     }

//     if(action.type === dec){
//         return {amount: state.amount-1}
//     }

//     if(action.type === incByAmt)
//     return {amount: state.amount + action.payload}
// }

// global state
// store.subscribe(() => {
//     history.push(store.getState())
//     console.log(history)
// })

// Async API call
// async function getUser(){
//     const {data} = await axios.get('http://localhost:3000/accounts/1')
//     console.log(data)
// }

// getUser()

// Action creators 
function getUser(id){
    return async(dispatch, getState) => {
    const {data} = await axios.get(`http://localhost:3000/accounts/${id}`)
    dispatch (initUser(data.amount))
};
}

function initUser(value){
    return {type:init, payload:value}
}
 
function increment(){
    return {type:inc}
}

function decrement(){
    return{type:dec}
}

function incrementByAmount(){
    return{type:incByAmt,payload:2}
}

setTimeout(() => {
    store.dispatch(getUser(1))
},2000)
