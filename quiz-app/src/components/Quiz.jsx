import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { qBank } from '../Data'
import './App.css'
const Quiz = () => {
  return (
    <div>
        <Header/>
        <div id="Quiz">
          <div>
            <h1><center>Quiz App</center></h1>
            Question{qBank.id}:{qBank.ques}<br/>
            <input type="radio" name="opt"/>{qBank.op1}<br/>
            <input type="radio" name="opt"/>{qBank.op2}<br/>
            <input type="radio" name="opt"/>{qBank.op3}<br/>
            <input type="radio" name="opt"/>{qBank.op4}<br/>
            <butoon>Previous</butoon>
            <butoon>Next</butoon>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Quiz