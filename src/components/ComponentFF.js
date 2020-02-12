import React, {useContext} from 'react'
import { CountContext } from '../App'
function ComponentFF() {
    const countContext=useContext(CountContext)
    return (
        <div>
           ComponentFF =>{countContext.countState}
          <button onClick={()=>countContext.countDispatch('increment')}>increment</button>
          <button onClick={()=>countContext.countDispatch('decrement')}>decrement</button>
          <button onClick={()=>countContext.countDispatch('reset')}>reset</button> 
        </div>
    )
}

export default ComponentFF
