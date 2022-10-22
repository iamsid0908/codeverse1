import React from 'react'
import "./Login.css"

function Login() {
  return (
    <div>
      <div>

      <lable>Email</lable>
            <input type="email" placeholder='email'/>

            <lable>Password</lable>
            <input type="password" placeholder='password'/>
            <button>Submit</button>
      </div>
    </div>
  )
}

export default Login
