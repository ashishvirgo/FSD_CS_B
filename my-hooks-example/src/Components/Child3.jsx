import React from 'react'
import { useContext } from 'react';
import { StudentContext } from './Contextex';
const Child3 = () => {
    const student=useContext(StudentContext);
  return (
    <div>
      <h1>Child3 Component</h1>
      <h2>
        Name={student.name}<br/>
        Age={student.age}
      </h2>
    </div>
  )
}

export default Child3
