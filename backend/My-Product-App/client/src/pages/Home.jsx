import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import "../App.css"
const Home = () => {
  return (
    <div className='home-container'>
      <Header/>
      <Navbar/>
      <div className='home-content'>
      <h1> Home Page</h1>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
