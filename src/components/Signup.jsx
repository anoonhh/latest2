import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
import './Signup.css';
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios'
import { useState } from 'react';



const Sign = () => {

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    Axios.post('http://localhost:3000/auth/signup', { username, email, password })
    .then(response => {
      navigate('/login')
    }).catch(err => {
      console.log(err)
    })
  }


  return (

    <div className='sign-up-container'>
      <form className='sign-up-form'       onSubmit={handleSubmit}
>

        <Typography variant="h5" color={'error'}>
          <b> SignUp Page</b>
        </Typography><br></br><br></br>


        <label htmlFor='username'>Name:</label>
        <input type='text' placeholder='Name'         onChange={(e) => setUsername(e.target.value)}/>


        <label htmlFor='email'>Email:</label>
        <input type='email' placeholder='Email'    onChange={(e) => setEmail(e.target.value)} />
     


        <label htmlFor='password'>Password:</label>
        <input type='password' placeholder='********'  onChange={(e) => setPassword(e.target.value)}/>
        


        <button className='signup-button' type='submit'>Sign Up</button>
<br></br>
<Button className='signup-button' >
          <Link to={'/login'} style={{textDecoration:'none', color:'brown'}}>
            Login
            </Link>
            </Button>
      </form>
    </div>
  )
}

export default Sign