import React from 'react'
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <ul>
        <li>
            <Link to="/refex">useRef Example</Link>
        </li>
        <li>
            <Link to="/contextex">useContext Example</Link>
        </li>
      </ul>
    </div>
  )
}

export default Home
