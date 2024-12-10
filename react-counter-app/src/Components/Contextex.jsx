import React, { createContext } from 'react'
import Child1 from './Child1'
const StudentContext=createContext()
const Contextex = () => {
    
    const student={
        name: "ashish",
        age:35
    }
  return (
    <div>
      <StudentContext.Provider value={student}>
      <h1>Hi Student Name is {student.name}</h1>
      <Child1/> 
      </StudentContext.Provider>  
      
    </div>
  )
}

export default Contextex
