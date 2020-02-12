import React, {useReducer} from 'react'

const initialState={
    firstCounter:0,
    secondCounter:10
}
const reducer=(state,action)=>{
switch(action.type){
    case 'increment':
        return {...state,firstCounter:state.firstCounter+action.value}
    case 'decrement':
        return {...state,firstCounter:state.firstCounter-action.value}
    case 'increment2':
            return {...state,secondCounter:state.secondCounter+action.value}
    case 'decrement2':
            return {...state,secondCounter:state.secondCounter-action.value}    
    case 'reset':
        return initialState
    default:
        return state       
}
}
function CounterTwoUseReducer() {
    const [count,dispatch]=useReducer(reducer,initialState)
    return (
        <div>
            <div>First Count =>{count.firstCounter}</div>
            <div>Second Count =>{count.secondCounter}</div>
            <button onClick={()=>dispatch({type:'increment',value:1})}>increment</button>
            <button onClick={()=>dispatch({type:'decrement',value:1})}>decrement</button>
            <button onClick={()=>dispatch({type:'increment',value:5})}>increment 5</button>
            <button onClick={()=>dispatch({type:'decrement',value:5})}>decrement 5</button>
            <div>
            <button onClick={()=>dispatch({type:'increment2',value:1})}>increment Counter 2</button>
            <button onClick={()=>dispatch({type:'decrement2',value:1})}>decrement Counter 2</button>    
            </div>
            <button onClick={()=>dispatch({type:'reset',value:1})}>reset</button>
        </div>
    )
}

export default CounterTwoUseReducer
