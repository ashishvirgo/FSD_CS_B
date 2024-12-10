import React from 'react'
import {useRef} from 'react'
const Refex = () => {
    const refcount=useRef(0);
    console.log("object Rendering")
    function handleIncrement(){
        refcount.current++;
        console.log("RefCount=",refcount.current)
        if(refcount.current==5)
            alert("Refcount="+refcount.current)
    }
  return (
    <div>
      <h1>useRef Example</h1>
      <h2>RefCount={refcount.current}</h2>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}

export default Refex
