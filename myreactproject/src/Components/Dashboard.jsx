import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { useEffect,useState } from 'react'
const Dashboard = ({regdata}) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const currentdate=new Date();
  useEffect(()=>{
    const url="https://dummyjson.com/recipes?limit=50";
    const res=fetch(url);
    res.then((res)=>res.json())
       .then((data)=>{
      console.log(data);
      setRecipes(data.recipes); 
      setLoading(false);
    })
    .catch((err)=>{
      console.log("Error",err);
      setError("Error fetching data");
      setLoading(false);
    })
  },[]) 
  return (
    <div>
      <Header/>
      <nav>
        <ul>
            <li>
                Welcome: {regdata.name}
            </li>
            <li>
                Date:{currentdate.toDateString()}
            </li>
            <li>
                <Link to="/logout">Logout</Link>
            </li>
        </ul>
      </nav>
      <div className='recipe'>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <div>
          <h2>Menu</h2>
          <table>
            <tr>
              <th>&nbsp;</th>
              <th>Recipe</th>
              <th>Cuisine</th>
              <th>Rating</th>
              <th>Price</th>
            </tr>
            {recipes.filter((recipe)=>(recipe.cuisine=='Indian' || recipe.cuisine=='Italian'
              || recipe.cuisine=='Thai'
             ))
            .map((recipe) => (
              <tr>
              <td id="img"><img src={recipe.image} width="100" height="50" /></td>
              <td>{recipe.name}</td>
              <td>{recipe.cuisine}</td>
              <td>{recipe.rating}</td>
              <td id="price">120/-</td>
              </tr>
            ))}
          </table>
        </div>
      )}
      </div>
      <Footer/>
    </div>
  )
}
export default Dashboard
