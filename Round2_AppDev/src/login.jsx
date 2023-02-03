import { useState } from 'react';
import { Box, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import './App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typed from "react-typed";
import Navbar from './navbar';
import {Stack} from '@mui/material';
import {TextField} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
function App() {
   return (
    <>
    <Navbar />
    <Box display="flex" justifyContent="center" alignContent="center">
      <Stack spacing={2} className="container">
      <Typography variant='h4'><Typed strings={["Login"]} typeSpeed={450} loop /></Typography>
      <TextField
          className='i-field'
          id="filled-multiline-flexible"
          label="Email Address"
          multiline
          maxRows={4}
          variant="filled"
        />
        <TextField
          className='i-field'
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
        />
        <Button>Login</Button>
        <Stack direction="row" spacing={1}>
        <Typography>Don't have an account ?</Typography><a href='/signup'>SignUp here</a>
        </Stack>
      </Stack>
      </Box>
      </>
   )
}

export default App
