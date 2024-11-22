import {Link} from 'react-router-dom'
const Home=()=>{
    return(
        <div>
            <ul>
                <li>
                    <Link to='/login'>login</Link>
                </li>
                <li>
                    <Link to='/signup'>Signup</Link>
                </li>
                <li>
                    <Link to='/counter'>Counter App</Link>
                </li>
            </ul>
        </div>
    )
}
export default Home;