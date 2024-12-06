import React from 'react'
import {useRef} from 'react'
const Refex = () => {
    const count=useRef(0);
    const a=5;
    console.log("object rendering")
    function handleaddvalue(){
            count.current++;
            if(count.current==5)
                alert("you hit button"+count.current)
            console.log("count.current=",count.current)
    }
  return (
    <div>
      <h1>useRef Example</h1>
      <h1>Ref Counter:{count.current}</h1>
      <p>{a}</p>
      <button onClick={handleaddvalue}>Add Value</button>
    </div>
  )
}

export default Refex
