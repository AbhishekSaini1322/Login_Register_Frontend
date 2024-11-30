import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';


const Register = () => {

  const [name,setName] = useState()
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const [mobile,setMobile] = useState()

  const submitHandler = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8000/register',{name,email,password,mobile})
    .then(result => console.log(result))
    .catch(err => console.log(err)
    )
  }

  return (
    <div>
    <h2>Register</h2>
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Name"
        name='name'
        onChange={(e)=> setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Mobile"
        name='mobile'
        // value={mobile}
        onChange={(e)=> setMobile(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        name='email'
        // value={email}
        onChange={(e)=> setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        name='password'
        // value={password}
        onChange={(e)=> setPassword(e.target.value)}
        required
      />
      <button type="submit">Register</button>
      </form>
      <p>Already account</p>
      <Link to='/login'>Login</Link>
    
  </div>
  )
}

export default Register