import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link,Outlet } from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <Header/>
      <nav>
        <ul>
            <li><Link to="/dashboard">Restaurant Menu</Link></li>
        </ul>
      </nav>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Home
