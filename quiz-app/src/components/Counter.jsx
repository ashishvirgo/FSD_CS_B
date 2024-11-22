import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
const Counter = () => {
    const [count,setCount]=useState(0);
    const [count1,setCount1]=useState(0);
    function handleIncrese(){
        setCount(count+1)
    }
    function handleDecrese(){
        setCount(count-1)
    }
    useEffect(()=>{
        alert("Hi ",{count})
    //    setCount1(count*5)
    },[count])
  return (
    <div><h1>Counter:{count}</h1><br/>
     <button onClick={handleIncrese}>Increse</button>
     <button  onClick={handleDecrese}>Decrese</button>
     <h1>new Counter:{count1}</h1><br/>
    </div>
  )
}

export default Counter