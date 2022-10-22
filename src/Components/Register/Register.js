import React from 'react'
import "./Register.css"

function Register() {

    
  return (
    <div>
        <div>
            <lable>NAME</lable>
            <input type="text" placeholder='name'/>

            <lable>Email</lable>
            <input type="email" placeholder='email'/>

            <lable>Password</lable>
            <input type="password" placeholder='password'/>

            <button>Submit</button>
        </div>
      
    </div>
  )
}

export default Register
