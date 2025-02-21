import React, { useEffect } from 'react'
import { useState } from 'react'
const Dashboard = () => {
    const [recipes,setRecipes]=useState([])
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);
    useEffect(()=>{
      const url="https://dummyjson.com/recipes?limit=50";
      const res=fetch(url);
           res.then((res)=>res.json())
           .then((data)=>{
            console.log(data.recipes);
            setRecipes(data.recipes);
            setLoading(false)
           })
           .catch((err)=>{
            console.log("Network error",err)
            setError(err.message);
            setLoading(false)
           })
    },[])
  return (
    <div>
        {loading && <p>Loading .......</p>}
        {error && <p>{error}</p>}
        {!loading && !error && (
      <table>
        <tr>
            <th>&nbsp;</th>
            <th>Recipe Name</th>
            <th>Cuisine</th>
            <th>Rating</th>
            <th>Price</th>
            <th>Action</th>
        </tr>
        {
            recipes.map((r)=>(
             <tr>
                <td><img src={r.image} width="100" height="50"/></td>
                <td>{r.name}</td>
                <td>{r.cuisine}</td>
                <td>{r.rating}</td>
                <td>150/-</td>
                <td><button>Add to Cart</button></td>
            </tr> 
            ))
        }
      </table>
      )}
    </div>
  )
}

export default Dashboard
