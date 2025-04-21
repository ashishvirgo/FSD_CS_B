import React from 'react'
import ViewUsers from './component/ViewUsers'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './component/Header'
import Footer from './component/Footer'

const App = () => {
  return (
    <div>
      <Header/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<ViewUsers/>}></Route>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}

export default App
