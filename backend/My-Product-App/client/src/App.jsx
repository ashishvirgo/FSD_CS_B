import React from 'react'
import Home from './pages/Home'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import ViewUsers from './pages/ViewUsers'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<h1>Signup page</h1>}/>
        <Route path="/login" element={<h1>Login page</h1>}/>
        <Route path="/contactus" element={<h1>Contact Us page</h1>}/>
        <Route path="/aboutus" element={<h1>About us page</h1>}/>
        <Route path="/viewuser" element={<ViewUsers/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
