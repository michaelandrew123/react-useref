import React, {useState, useRef, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';




function App() {
  const [name, setName] = useState('')
  const [renderCount, setRenderCount] = useState(0)
  const refRenderCount = useRef(0)
  const inputRef = useRef();
  const prevName = useRef('');

  useEffect(()=>{
       //setRenderCount(prevRenderCount => prevRenderCount + 1)
      refRenderCount.current = refRenderCount.current + 1
  })
     
  function focus(){
    inputRef.current.focus()
  }
  
  //store previous value of your state using useref
  useEffect(()=>{
      prevName.current = name;
  }, [name])
  
  return ( 
    <>
        <nav>Create React useRef</nav>
        <div> 
            <input ref={inputRef} name={name} onChange={e=>setName(e.target.value)} />
            <div>My name is {name}</div>
            <div>I render use State  {renderCount} times</div>
            <div>I render use Ref {refRenderCount.current} times</div>
        </div>
        <div>
          <button onClick={focus}>Focus</button> 
        </div>
        <div> 
            <input  name={name} onChange={e=>setName(e.target.value)} />
            <div>My name is {name}and it used to be {prevName.current}</div> 
        </div>
        
       
    </>
  );
}

export default App;
