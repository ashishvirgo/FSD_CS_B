import React, { useState,useEffect } from 'react'
import axios from 'axios';
import '../App.css'
const ViewUsers = () => {
    const [error,setError]=useState(null);
    const [users,setUsers]=useState([]);
    useEffect(()=>{
         loadUser();
    },[])

    const loadUser=async()=>{
        try{
         const res=await axios.get("https://userapp7-qdo2.onrender.com/users");
         setUsers(res.data);
        }
        catch(err){
            setError(err.message);
        }
    }

  return (
    <div className='content'>
      <h1>View Users</h1>\
      <table>
        <thead>
            <tr>
                <th>Sr.No.</th>
                <th>User Name</th>
                <th>User Email</th>
                <th>User Role</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
        {error || users.map((user,index)=>(
            <tr key={index}>
                <td>{++index}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                    <button>Edit</button> &nbsp;
                    <button>Delete</button>
                </td>
            </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default ViewUsers
