import React,{useReducer} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter'
import DataFetchingTwo from './components/DataFetchingTwo'
import DataFetchingOne from './components/DataFetchingOne'
import ComponentAA from './components/ComponentAA'
import ComponentBB from './components/ComponentBB'
import ComponentCC from './components/ComponentBB'
import CounterThreeUseReducer from './components/CounterThreeUseReducer'
import CounterTwoUseReducer from './components/CounterTwoUseReducer'
import CounterOneUseReducer from './components/CounterOneUseReducer'
import ComponentD from './components/ComponentD'
import DataFetching from './components/DataFetching'
import IntervelHookCounter from './components/IntervelHookCounter'
import IntervelClassCounter from './components/IntervelClassCounter'
import MouseContainer from   './components/MouseContainer'
import HookMouse from './components/HookMouse'
import ClassMouse from './components/ClassMouse'
import UseEffectHookCounterOne from './components/UseEffectHookCounterOne'
import UseEffectClassCounterOne from './components/UseEffectClassCounterOne'
import UseStateClassCounter from './components/UseStateClassCounter'
import UseStateHooksCounter from './components/UseStateHooksCounter'
import UseStateHookCounterTwo from './UseStateHookCounterTwo'
import UseStateHookCounterThree from './components/UseStateHookCounterThree'
import UseStateHookCounterFour from './components/UseStateHookCounterFour'
import ParentComponent from './components/ParentComponent';
import FocusInput from './components/FocusInput';
import ClassTimer from './components/ClassTimer';
import HookTimer from './components/HookTimer';
import DocTitleOne from './components/DocTitleOne';
import DocTitleTwo from './components/DocTitleTwo';
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';
import UserForm from './components/UserForm';

export const CountContext=React.createContext();
const initialState=0
const reducer=(state,action)=>{
switch(action){
    case 'increment':
        return state+1
    case 'decrement':
        return state-1
    case 'reset':
        return initialState
    default:
        return state       
}
}
function App() {
  const [count,dispatch]=useReducer(reducer,initialState)
  return (
    
    <div className="App">
     <h1>hello Abdul</h1>
     
    <h1>UserForm</h1>
    <UserForm/>

    {/* <h1>Counter One</h1>
    <CounterOne/>

    <h1>Counter Two</h1>
    <CounterTwo/> */}

     {/* <h1>Doc Title Two</h1>
     <DocTitleTwo/>

     <h1>Doc Title One</h1>
     <DocTitleOne/>     */}

     {/* <h1>Class Timer</h1>
     <ClassTimer/>
     <h1>Hook Timer</h1>
     <HookTimer/>
     <h1>FocusInput</h1>
     <FocusInput/> */}


     {/* <h1>Counter</h1>
     <Counter/> */}

     {/* <h1>Parent Component</h1>
     <ParentComponent/> */}

     {/* <h1>Data Fetching Two</h1>
     <DataFetchingTwo/>
     <h1>Data Fetching One</h1>
     <DataFetchingOne/> */}


     {/* <CountContext.Provider value={{countState:count,countDispatch:dispatch}}>
  <h1> Count=> {count}</h1>
    <h1>Component AA</h1>
    <ComponentAA/>
    <h1>Component BB</h1>
    <ComponentBB/>
    <h1>Component CC</h1>
    <ComponentCC/>
    </CountContext.Provider> */}


     {/* <h1>CounterThreeUseReducer</h1>
     <CounterThreeUseReducer/>
     <h1>CounterTwoUseReducer</h1>
     <CounterTwoUseReducer/>
     <h1>CounterOneUseReducer</h1>
     <CounterOneUseReducer/> */}
     {/* <UserContext.Provider value={'abdul'} >
     <ComponentC/>
     </UserContext.Provider> */}

     {/* <h1>Data fetching throught useEffect</h1>
     <DataFetching/>
     <h1>Intervel Hook Counter</h1>
     <IntervelHookCounter/>
     <h1>Intervel Class Counter</h1>
     <IntervelClassCounter/>
     <h1>Mouse Container</h1>
     <MouseContainer/>
     <h1>HookMouse</h1>
     <HookMouse/>
     <h1>ClassMouse</h1>
     <ClassMouse/>
     <h1>UseEffectHookCounterOne</h1>
     <UseEffectHookCounterOne/>     
     <h1>UseEffectClassCounterOne</h1>
     <UseEffectClassCounterOne/>
     <h1>UseStateHookCounterFour</h1>
     <UseStateHookCounterFour/>
     <h1>UseStateHookCounterThree</h1>
     <UseStateHookCounterThree/>
     <h1>UseStateHookCounterTwo</h1>
     <UseStateHookCounterTwo/>
     <h1>UseStateHooksCounter</h1>
     <UseStateHooksCounter/>
     <h1>UseStateClassCounter</h1>
     <UseStateClassCounter/> */}
    </div>
  );
}

export default App;
