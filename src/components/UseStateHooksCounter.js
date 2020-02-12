import React ,{useState}  from 'react';
function UseStateHooksCounter() {
    const [count,setCount]=useState(0)
  return (
    <div className="App">
     <button onClick={()=>setCount(count+1)}>Counter: {count}</button>
    </div>
  );
}

export default UseStateHooksCounter;
