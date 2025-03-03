import React, { useEffect,useState } from 'react'

const ViewUsers = () => {
  const [count,setCount]=useState(0);
  const data=[];
    useEffect(()=>{
      const fetchUser=async()=>{
        const res=await fetch("http://localhost:3001/users");
        const resjson=await res.json();
        const data=resjson;
      }
     fetchUser();
    },[])
  return (
    <div>
      <h1>List of Users</h1>
      <table>
        <tr>
          <th>Sr. No.</th>
          <th>id</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </table>
      {
        data.map((ind)=>{
         <tr>
          <td>{count}</td>
          <td>{ind.id}</td>
          <td>{ind.name}</td>
          <td>{ind.email}</td>
         </tr>
        })
      }
    </div>
  )
}

export default ViewUsers
