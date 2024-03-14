import { Button, Input, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'



const Login = () => {
  return (
    <div className='bg'>
      <div style={{ paddingTop: '90px' }}></div>
      <div className='sign-up-container'>
        <form className='sign-up-form'>
          <Typography variant="h5" color={'error'}>
            <b> Login </b>
          </Typography><br></br><br></br>

          <label htmlFor='email'>Email:</label>
          <input type='email' placeholder='Email' />
          <label htmlFor='password'>Password:</label>
          <input type='password' placeholder='********' />
          <button className='signup-button' type='submit'>Login </button><br></br>
          <Button className='signup-button'>
          <Link to={'/signup'} style={{textDecoration:'none', color:'brown'}}>
            SignUp
            </Link>
            </Button>
        
        </form>
      
      </div></div>
  )
}

export default Login