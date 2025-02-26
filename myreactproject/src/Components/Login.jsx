import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import wifyImage from '../assets/images/wify.jpeg';
const Login = ({regdata}) => {
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const navigate=useNavigate();
    function validate(e){
          e.preventDefault();
    if(regdata.email==email && regdata.password==password){
        alert("Login Successfully");
        navigate('/dashboard');
    }
    else{
        alert("Login Failed");
    }
    }
  return (
    <div className='login'>
      <div className='left'>
      <img src={wifyImage} width="300" height="300" alt="restaurant image"/>
    </div>
      <div className='right'><form>
        <center><h1 style={{color: "red"}}>Login</h1></center>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" onChange={(e)=>setEmail(e.target.value)} class="form-control" id="exampleInputEmail1" />
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" onChange={(e)=>setPassword(e.target.value)} class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" onClick={validate} class="btn btn-primary">Login</button>
  </form>
</div>

    </div>
  )
}

export default Login
