import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';


const Register = () => {

  const [name,setName] = useState()
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const [phoneNumber,setPhoneNumber] = useState()
  const navigate = useNavigate()


  const submitHandler = (e) => {
    e.preventDefault()
    axios
  .post("http://localhost:8000/api/register", {name,email,password,phoneNumber})
  .then((response) => {console.log(response)
    navigate('/login')
  })
  .catch((error) => {
    if (error.response && error.response.status === 400) {
      console.error("Validation Error:", error.response.data.msg);
      alert(error.response.data.msg);
    } else {
      console.error("Unexpected Error:", error);
    }
  });

  }

  return (
    <div >
    
    <form className='main-div' onSubmit={submitHandler}>
    <h2>Register</h2>
      <input
        type="text"
        placeholder="Name"
        name='name'
        onChange={(e)=> setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="phoneNumber"
        name='phoneNumber'
        // value={mobile}
        onChange={(e)=> setPhoneNumber(e.target.value)}
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

      <div className='account'>
        <p>Already account ?</p>
        <Link className='text' to='/login'>Login</Link>
      </div>
      
      </form>
      
    
  </div>
  )
}

export default Register