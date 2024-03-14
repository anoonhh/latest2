
import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import BloodtypeOutlinedIcon from '@mui/icons-material/BloodtypeOutlined';
import Icon from '@mui/material/Icon';
import { IconButton } from '@mui/material';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" color='error' >
      <Toolbar>
     <b> <BloodtypeOutlinedIcon/></b>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
          BLOOD BANK
        </Typography>

              
        <Button >
          <Link to={'/'} style={{textDecoration:'none', color:'white'}}>
            Home
            </Link>
            </Button>
        <Button >
          <Link to={'/login'} style={{textDecoration:'none', color:'white'}}>
            Login
            </Link>
            </Button>

      
            {/* <Button >
          <Link to={'/dashboard'} style={{textDecoration:'none', color:'white'}}>
            Dashboard
            </Link>
            </Button> */}
      
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Navbar