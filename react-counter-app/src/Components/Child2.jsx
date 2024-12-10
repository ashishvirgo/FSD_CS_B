import React, { useContext } from 'react'
import StudentContext from './Contextex'
const Child2 = () => {
  const student=useContext(StudentContext);
  return (
    <div>
      <h1>Child2</h1>
      <h1>Student Age is {student}</h1>
    </div>
  )
}

export default Child2
