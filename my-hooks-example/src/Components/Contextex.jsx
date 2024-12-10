import React from 'react'
import Child1 from './Child1'
import { createContext } from 'react';
const StudentContext=createContext();
const Contextex = () => {
    const stu={
        name: "XYZ",
        age:29,
    }
  return (
    <StudentContext.Provider value={stu}>
       <div>
       
       <h1>Parent Component</h1>
       <Child1/>
     </div>
    </StudentContext.Provider>
    
  )
}

export default Contextex
export {StudentContext}
