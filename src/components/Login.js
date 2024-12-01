import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';


const Login = () => {

  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const navigate = useNavigate()


  const submitHandler = (e) => {
    e.preventDefault()
    axios
  .post("http://localhost:8000/api/login", {email,password})
  .then((response) => {console.log(response)
    if(response.data.msg === "login success"){
      navigate('/home')
    }
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
    <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        name='email'
        onChange={(e)=> setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        name='password'
        onChange={(e)=> setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>

      <div className='account'>
      <p>No account ?</p>
      <Link className='text' to='/register'>Register</Link>
      </div>
      </form>
    
  </div>
  )
}

export default Login