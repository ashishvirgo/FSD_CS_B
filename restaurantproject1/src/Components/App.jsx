import React from 'react'
import Home from './Home'
import Dashboard from './Dashboard'
import {Routes,Route} from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
