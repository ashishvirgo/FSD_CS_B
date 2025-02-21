import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import wifyImage from '../assets/images/wify.jpeg';
const Register = ({setregdata}) => {
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const navigate=useNavigate();
    const getData=(e)=>{
          e.preventDefault();
          const data={name,email,password};
          setregdata(data);
          alert("Registration Successfull")
          navigate('/login')
    }
  return (
    <div className='login'>
      <div className='left'>
            <img src={wifyImage} width="300" height="300" alt="restaurant image"/>
      </div>
      <div className='right'>
        <center><h1 style={{color: "red"}}>Registration</h1></center>
            <form>
      <div class="mb-3">
    <label for="exampleInputName" class="form-label">Name</label>
    <input type="text" onChange={(e)=>setName(e.target.value)} class="form-control" id="exampleInputName"/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" onChange={(e)=>setEmail(e.target.value)} class="form-control" id="exampleInputEmail1"/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" onChange={(e)=>setPassword(e.target.value)} class="form-control" id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" onClick={getData} class="btn btn-primary">Register</button>
</form>
</div>
    </div>
  )
}

export default Register
