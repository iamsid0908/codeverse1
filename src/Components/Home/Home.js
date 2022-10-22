import React from 'react'
import './Home.css'
import{Link} from 'react-router-dom'

function Home() {
  return (
    <div>
       <ul>
        <Link to='/'> <li>Home</li></Link>
        <Link to='/placement'> <li>Placement</li></Link>
        <Link to='/coding'> <li>Coding</li></Link>
        <Link to='/academics'> <li>Academics</li></Link>
        <Link to='/login'> <li>Login</li></Link>
        <Link to='/register'> <li>Register</li></Link>
       
        
       </ul>
      
    </div>
  )
}

export default Home
