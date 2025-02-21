import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link, Outlet } from 'react-router-dom'
import wifyImage from '../assets/images/wify.jpeg';
import '../App.css'
const Home = () => {
  return (
    <div>
      <Header/>
      <nav>
        <ul>
            <li>
                <Link to="/login">LOGIN</Link>
            </li>
            <li>
                <Link to="/register">Register Here</Link>
            </li>
        </ul>
      </nav>
      <Outlet/>
      <div className='left'>
            <img src={wifyImage} width="300" height="300" alt="restaurant image"/>
          </div>
      
      <Footer/>
    </div>
  )
}

export default Home
