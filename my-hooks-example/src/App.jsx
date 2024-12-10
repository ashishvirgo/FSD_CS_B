import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import Refex from './Components/Refex'
import Contextex from './Components/Contextex'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/refex" element={<Refex/>}></Route>
        <Route path="/contextex" element={<Contextex/>}></Route>
        <Route path="*" element={<h1> No Page Available</h1>}></Route>
      </Routes>
    </div>
  )
}

export default App
